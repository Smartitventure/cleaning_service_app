const Userdb = require('../models/User');
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





