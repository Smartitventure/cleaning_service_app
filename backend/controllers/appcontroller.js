const Userdb = require('../models/User');
const FavouriteLocation = require('../models/FavouriteLocation');
const RequestedBooking = require('../models/RequestedBooking');
const Service = require('../models/Service');
const Booking = require('../models/Booking');
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
        attributes: ['id','provider_image']
      }
      ]
    })

    // const requested_bookings = [];

    // // requested_bookings.push(booking_data);

    // for (var i = 0; i < booking_data.length; i++) {

    //   const user_images = [];

    //   var value = booking_data[i];
     
    //   var booking_provider = value.requested_bookings

    //   var obj = {};
      
    //   for (var j = 0; j < booking_provider.length; j++) {

    //     var name = "name";

    //     var data = booking_provider[j];

    //     const user_data = await Userdb.findOne({ where: { id: data.service_provider_id } })
      
    //     user_images.push(user_data.name);

    //     var val = user_images;

    //     obj[name] = val;
    //     console.log(obj);

    //   }   
      
    //   requested_bookings.push(obj);

    //   //booking_data["user_names"] = user_images;
      

    // }

    res.send({status:true,booking_list:booking_data});

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
        attributes: ['id','provider_name','provider_image','provider_comment']
      }
      ]
    })

    res.send({status:true,booking_list:booking_data});

  }else{

    res.send({status:false,message:"User not found"});

   }

}





