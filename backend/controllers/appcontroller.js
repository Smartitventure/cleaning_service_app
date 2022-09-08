const Userdb = require('../models/User');
const FavouriteLocation = require('../models/FavouriteLocation');
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
          res.status(500).send({ message : "Cannot Update user Somthing went wrong"})
      })

    }

}


exports.services = async (req,res,next)=>{
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





