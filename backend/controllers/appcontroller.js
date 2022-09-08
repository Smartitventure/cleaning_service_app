const Userdb = require('../models/User');
const FavouriteLocation = require('../models/FavouriteLocation');

const bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");

// profile
exports.profile = async (req,res,next)=>{
    
    jwt.verify(req.token, 'bezkoder-secret-key', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {

        const userdb = Userdb.findOne({ where: { id: authData.id } })
        .then(function(userdb){
            res.send({status:true, message: "User Details" ,user:userdb});
        })
        .catch(err=>{
            res.send(err);
        })

        }
      });
}

exports.add_fav_location = async (req,res,next)=>{
    
  jwt.verify(req.token, 'bezkoder-secret-key', (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {

        const user = Userdb.findOne({ where: { id: authData.id } })
        .then(function(user){
            const fav_location = {
              user_id: user.id,
              location: req.body.location,
            };
            FavouriteLocation.create(fav_location)
            res.send({status:true, message: "Location is Added"});
        })
        .catch(err=>{
            res.send(err);
        })

      }
    });
}


exports.remove_fav_location = async (req,res,next)=>{
    
  jwt.verify(req.token, 'bezkoder-secret-key', (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {

        const user = Userdb.findOne({ where: { id: authData.id } })
        .then(function(user){
         
          FavouriteLocation.destroy({
              where: {
                id: req.body.id
              }
           })
          .then(data => {
              if(!data){
                  res.send({status:false, message: "Something Went Wrong"});
              }else{
                  res.send({status:true, message: "Location is Removed"});
              }
          })
          .catch(err =>{
              res.status(500).send({
                  message: "Something Went Wrong"
              });
          });


        })
        .catch(err=>{
            res.send(err);
        })
        
      }
    });
}


exports.update_information = async (req,res,next)=>{
    
  jwt.verify(req.token, 'bezkoder-secret-key', (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {

      const userdb = Userdb.findOne({ where: { id: authData.id } })
      .then(function(userdb){
          res.send({status:true, message: "User Details" ,user:userdb});
      })
      .catch(err=>{
          res.send(err);
      })

      }
    });
}





