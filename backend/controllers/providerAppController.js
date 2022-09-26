const Userdb = require('../models/User');
const RequestedBooking = require('../models/RequestedBooking');
const Service = require('../models/Service');
const User = require('../models/User');
const Booking = require('../models/Booking');
const { s3Uploadv2 } = require("./../s3Service");

// profile

exports.profile = async (req,res,next)=>{
    
    await Userdb.findByPk(req.payload.id)
     .then(function(userdb){
         res.send({status:true, message: "User Details" ,user:userdb});
     })
     .catch(err=>{
         res.send(err);
     })
 }


 exports.customer_bookings = async (req,res,next)=>{
    
    await Userdb.findByPk(req.payload.id)
     .then(function(userdb){

        Booking.findAll({
            include: [ {
              model: User,
              attributes: ['id','name','image']
            }
            ]
          })
        .then(function(booking){
            res.send({status:true,cutomer_bookings:booking});
        })
        .catch(err=>{
            res.send(err);
        })

     })
     .catch(err=>{
         res.send(err);
     })
 }

 exports.customer_booking_detail = async (req,res,next)=>{
    
    await Userdb.findByPk(req.payload.id)
     .then(function(userdb){

        Booking.findOne({
            where: { id: req.body.booking_id},
            include: [ {
              model: User,
              attributes: ['id','name','image']
            }
            ]
          })
        .then(function(booking){
            res.send({status:true,cutomer_bookings:booking});
        })
        .catch(err=>{
            res.send(err);
        })

     })
     .catch(err=>{
         res.send(err);
     })
 }

 

 exports.add_reviews = async (req,res,next)=>{
  
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

 


 

exports.provider_request = async (req,res,next)=>{
   await Userdb.findByPk(req.payload.id)
    .then(function(userdb){

        if(userdb.image == null){
            var provider_image = "https://bucket-dev-sss.s3.amazonaws.com/images/ink-pinned/1fe77ed9-e14b-404a-af3d-b9e3a633b007-581-5813504_avatar-dummy-png-transparent-png.png"
        }else{
            var provider_image = userdb.image
        }
        
        const provider_request = {
            customer_id: req.body.customer_id,
            service_provider_id: userdb.id,
            booking_id: req.body.booking_id,
            provider_comment: req.body.provider_comment,
            provider_image: provider_image,
            provider_name: userdb.name
        };

        RequestedBooking.create(provider_request)
        .then(data => {
            if(!data){
                res.status(404).send({status: false, message : `Somthing went wrong`})
            }else{
                res.status(200).send({status: true, message : `Submitted Succesfully`})
            }
        })
        .catch(err =>{
            res.status(500).send({ status: false, message : "Somthing went wrong"})
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






