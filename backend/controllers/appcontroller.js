const Userdb = require('../models/User');
const FavouriteLocation = require('../models/FavouriteLocation');
const RequestedBooking = require('../models/RequestedBooking');
const Service = require('../models/Service');
const Booking = require('../models/Booking');
const HireProvider = require('../models/HireProvider');
const Review = require('../models/Review');
const { s3Uploadv2 } = require("./../s3Service");

// profile
exports.profile = async (req,res,next)=>{
   await Userdb.findByPk(req.payload.id,{
    include: [ {
      model: FavouriteLocation,
      attributes: ['id', 'lat', 'long']
    }
    ]
    })
    .then(function(userdb){
        res.send({status:true, message: "User Details" ,user:userdb});
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.add_fav_location = async (req,res,next)=>{
  
    Userdb.findOne({ where: { id: req.payload.id } })
    .then(function(user){

      FavouriteLocation.findOne({ where: {
        user_id: user.id,
        lat: req.body.lat,
        long: req.body.long
      }}).then(function(fav_loc){

          if(!fav_loc){

          const fav_location = {
              user_id: user.id,
              lat: req.body.lat,
              long: req.body.long,
          };
          FavouriteLocation.create(fav_location)
          res.send({status:true, message: "Location is Added"});

          }else{

          FavouriteLocation.destroy({
            where: {
              id: fav_loc.id
            }
          })
          res.send({status:true, message: "Location is Removed"});

          }
          
      })
        
    })
    .catch(err=>{
        res.send(err);
    })

}

exports.update_information = async (req,res,next)=>{

    let doesExist = await Userdb.findOne({ where: { id: req.payload.id } })
    if (doesExist) {

      if(!req.file){
        var user_data = {
          name: req.body.name,
          mobile_number: req.body.mobile_number,
          gender: req.body.gender,
          dob: req.body.dob,
        };

      }else{

        let result = await s3Uploadv2(req.file);
        var url =  result.Location;

        var user_data = {
          name: req.body.name,
          mobile_number: req.body.mobile_number,
          gender: req.body.gender,
          dob: req.body.dob,
          image:url
        };

      }

      Userdb.update(user_data,{ where: { id: doesExist.id } })
      .then(data => {
          if(!data){
              res.status(404).send({status: false, message : `Cannot Update user Somthing went wrong`})
          }else{
              res.status(200).send({status: true, message : `User Updated Succesfully`})
          }
      })
      .catch(err =>{
          res.status(500).send({ status: false, message : "Cannot Update user Somthing went wrong"})
      })

    }else{
      res.status(500).send({ status: false, message : "Cannot Update user Somthing went wrong"})
    }

}


exports.services = async (req,res,next)=>{
  await Service.findAll()
  .then(function(services){
      res.send({status:true,services:services});
  })
  .catch(err=>{
      res.send(err);
  })
}

exports.request_services = async (req,res,next)=>{

  let doesExist = await Userdb.findOne({ where: { id: req.payload.id } })
  if (doesExist) {
      const booking_data = {
        user_id: req.payload.id,
        location_name: req.body.location_name,
        address: req.body.address,
        address_lat: req.body.address_lat,
        address_long: req.body.address_long,
        landmark: req.body.landmark,
        date: req.body.date,
        time: req.body.time,
        hours: req.body.hours,
        service_category: req.body.service_category,
        comment: req.body.comment,
        total_pay: req.body.total_pay,
        status: req.body.status,
    };
     await Booking.create(booking_data)
    .then(booking => {
      res.send({status:true, message: "Submitted"});
    })
    .catch(err => {
        res.send({ status:false, message: err.message});
    });
  }
    
}


exports.requested_bookings = async (req,res,next)=>{
  const user = await Userdb.findByPk(req.payload.id)

  if(user){

    const booking_data = await Booking.findAll({
      where: { user_id: user.id , status:0},
      include: [ {
        model: RequestedBooking,
        attributes: ['service_provider_id','provider_image']
      }
      ]
    })

    res.send({status:true,booking_list:booking_data});

  }else{

    res.send({status:false,message:"User not found"});

   }

}


exports.planned_bookings = async (req,res,next)=>{
  const user = await Userdb.findByPk(req.payload.id)

  if(user){

    const booking_data = await Booking.findAll({
      where: { user_id: user.id , status:1}
    })

    if(booking_data.length != 0){

    for (i = 0; i < booking_data.length; i++) {

        let obj = {}

        const hire_provider = await HireProvider.findOne({where: { user_id: user.id , booking_id:booking_data[i].id}})

        obj['id'] = booking_data[i].id;
        obj['address'] = booking_data[i].address;
        obj['date'] = booking_data[i].date;
        obj['time'] = booking_data[i].time;
        obj['hours'] = booking_data[i].hours;
        obj['price'] = booking_data[i].total_pay;
        
        if(hire_provider){
          obj['provider_id'] = hire_provider.service_provider_id;
          const user_name = await Userdb.findOne({where: { id:hire_provider.service_provider_id}})
          obj['provider_name'] = user_name.name;
          obj['provider_image'] = user_name.image;
        }

        booking_data[i] = obj;
    }
  

    }

    res.send({status:true,planned_bookings:booking_data});

  }else{

    res.send({status:false,message:"User not found"});

   }

}

exports.booking_details = async (req,res,next)=>{
  const user = await Userdb.findByPk(req.payload.id)

  if(user){
    
    const booking_data = await Booking.findOne({
      where: { id:req.body.booking_id, user_id: user.id , status:0},
      include: [ {
        model: RequestedBooking,
        attributes: ['service_provider_id','provider_name','provider_image','provider_comment']
      }
      ]
    })

    res.send({status:true,booking_list:booking_data});

  }else{

    res.send({status:false,message:"User not found"});

   }

}


exports.planned_bookings_details = async (req,res,next)=>{
  const user = await Userdb.findByPk(req.payload.id)

  if(user){
    
    const booking_data = await Booking.findOne({where: { id:req.body.booking_id, user_id: user.id , status:1}})

    if(booking_data){
      let obj = {}

        const hire_provider = await HireProvider.findOne({where: { user_id: user.id , booking_id:booking_data.id}})

        obj['id'] = booking_data.id;
        obj['address'] = booking_data.address;
        obj['date'] = booking_data.date;
        obj['time'] = booking_data.time;
        obj['hours'] = booking_data.hours;
        obj['price'] = booking_data.total_pay;
        
        if(hire_provider){
          obj['provider_id'] = hire_provider.service_provider_id;
          const user_name = await Userdb.findOne({where: { id:hire_provider.service_provider_id}})
          obj['provider_name'] = user_name.name;
          obj['provider_image'] = user_name.image;

          const customer = await Userdb.findOne({where: { id:user.id}})

          obj['customer_name'] = customer.name;
        }


        res.send({status:true,booking_list:obj});

    }else{

      res.send({status:false,message:"booking not found"});

    }

   
  }else{

    res.send({status:false,message:"User not found"});

   }

}





exports.provider_detail = async (req,res,next)=>{
  const user = await Userdb.findByPk(req.payload.id)

  if(user){
    
    const provider_data = await Userdb.findOne({
      where: { id:req.body.provider_id},
      include: [ {
        model: Review
      }
      ]
    })

    var reviews = [];

    for (i = 0; i < provider_data.reviews.length; i++) {

        let obj = {}

        obj['user_id'] = provider_data.reviews[i].user_id;
        const user_name = await Userdb.findOne({where: { id:provider_data.reviews[i].user_id}})
        obj['user_name'] = user_name.name;
        obj['rating_star'] = provider_data.reviews[i].rating_star;
        obj['punctuality'] = provider_data.reviews[i].punctuality;
        obj['speed'] = provider_data.reviews[i].speed;
        obj['cleaning'] = provider_data.reviews[i].cleaning;
        obj['comment'] = provider_data.reviews[i].comment;


        reviews[i] = obj;
    
    }


    const provider_datas = await Userdb.findOne({where: { id:req.body.provider_id}})

    var obj = {id: provider_datas.id, name: provider_datas.name , image: provider_datas.image , country: provider_datas.country , gender: provider_datas.gender,gender: provider_datas.gender , dob: provider_datas.dob};
    Object.assign(obj, {reviews: reviews});

    res.send({status:true,provider_details:obj});

  }else{

    res.send({status:false,message:"User not found"});

  }

}



exports.hire_providers = async (req,res,next)=>{
  const user = await Userdb.findByPk(req.payload.id)

  if(user){

  const hire_providers = {
      user_id: req.payload.id,
      service_provider_id: req.body.provider_id,
      booking_id: req.body.booking_id,
      status: 1,
  };

  let hire_provider = await HireProvider.create(hire_providers)
  if (hire_provider) {

    let booking = await Booking.findOne({ where: { id: req.body.booking_id } })
    if (booking) {

      var booking_data = {
        status:1
      };

      await Booking.update(booking_data,{ where: { id: booking.id } })

      res.send({status:true,message:"Submitted"});

    }else{

      res.send({status:false,message:"booking not found"});
    }

  }else{
    res.send({status:false,message:"Something went wrong"});
  }

  }else{

    res.send({status:false,message:"User not found"});

  }

}

exports.add_reviews = async (req,res,next)=>{
  const user = await Userdb.findByPk(req.payload.id)

  if(user){

  const review_data = {
      user_id: req.payload.id,
      service_provider_id: req.body.provider_id,
      service_id: req.body.service_id,
      rating_star: req.body.rating_star,
      punctuality: req.body.punctuality,
      speed: req.body.speed,
      cleaning: req.body.cleaning,
      comment: req.body.comment,
  };
   await Review.create(review_data)
  .then(review => {
    res.send({status:true, message: "Submitted"});
  })
  .catch(err => {
      res.send({ status:false, message: err.message});
  });


  }else{

    res.send({status:false,message:"User not found"});

   }

}







