const Userdb = require('../models/User');
const Otp = require('../models/Otp');
const UserDeviceId = require('../models/UserDeviceId');
const UserLanguage = require('../models/UserLanguage');
const bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");

exports.get_language = async (req,res,next)=>{

  
}

// register user
exports.create = async (req,res,next)=>{
    const userData = {
        name: req.body.name,
        mobile_number: req.body.mobile_number,
        gender: req.body.gender,
        dob: req.body.dob,
        role: "customer",
        status: 0,
        join_date: req.body.join_date,
        language: req.body.language,
        country: req.body.country,
    };
    await Userdb.create(userData)
    .then(user => {

        const user_language = {
            user_id: user.id,
            language: req.body.language,
        };

        UserLanguage.create(user_language)

        if(req.body.device_id !== null){       
            UserDeviceId.findOne({
                where: {
                    device_id: req.body.device_id,
                    user_id: user.id
                }
            }).then(device_token => {
    
                if (device_token) {
                    UserDeviceId.update(
                    {
                        firebase_token: req.body.firebase_token,    
                    },
                    { where: { user_id: user.id } }
                    )
                }else{
                    const device_id = {
                        user_id: user.id,
                        device_id: req.body.device_id,
                        firebase_token: req.body.firebase_token,
                        device_type: req.body.device_type,
                    };
                    UserDeviceId.create(device_id)
                }
            })
        }


        Otp.findOne({
            where: {
                user_id: user.id
            }
        }).then(otp => {
    
            const minutesToAdd = 2
            const currentDate = new Date()
            const futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000)
    
            if(otp){
                Otp.update(
                    {
                        code: "1111", 
                        expire_at: futureDate   
                    },
                    { where: { user_id: user.id } }
                )
            }else{
               // console.log("yesss")
                const optData = {
                    user_id: user.id,
                    code: "1111", 
                    expire_at: futureDate
                };
                const otpResponse = Otp.create(optData)
            }
    
      
            res.status(200).send({
                status: true,
                id: user.id,
                is_checked: 0,
                otp: "Otp send to you regsitered mobile number"
            });
    
        });
    
    })
    .catch(err => {
        res.send({ status:false, message: err.message});
    });
}



exports.login =  (req, res) => {

    Userdb.findOne({
      where: {
        mobile_number: req.body.mobile_number
      }
    })
    .then(user => {
    if (!user) {
        res.status(500).send({ status: false, message: "Number is not registered" })
    }

    if(req.body.device_id !== null){       
        UserDeviceId.findOne({
            where: {
                device_id: req.body.device_id,
                user_id: user.id
            }
        }).then(device_token => {

            if (device_token) {
                UserDeviceId.update(
                {
                    firebase_token: req.body.firebase_token,    
                },
                { where: { user_id: user.id } }
                )
            }else{
                const device_id = {
                    user_id: user.id,
                    device_id: req.body.device_id,
                    firebase_token: req.body.firebase_token,
                    device_type: req.body.device_type,
                };
                UserDeviceId.create(device_id)
            }
        })
    }

    Otp.findOne({
        where: {
            user_id: user.id
        }
    }).then(otp => {

        const minutesToAdd = 2
        const currentDate = new Date()
        const futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000)

        if(otp){
            Otp.update(
                {
                    code: "1111", 
                    expire_at: futureDate   
                },
                { where: { user_id: user.id } }
            )
        }else{
           // console.log("yesss")
            const optData = {
                user_id: user.id,
                code: "1111", 
                expire_at: futureDate
            };
            const otpResponse = Otp.create(optData)
        }

        if(req.body.name == user.name){
            var is_checked = 0;
        }else{
            var is_checked = 1; 
        }

        res.status(200).send({
            status: true,
            id: user.id,
            is_checked: is_checked,
            otp: "Otp send to you regsitered mobile number"
        });

    });

    })
    .catch(err => {
        res.status(500).send({ status: false, message: err.message })
    });
  };

// login user

exports.login =  (req, res) => {

    Userdb.findOne({
      where: {
        mobile_number: req.body.mobile_number
      }
    })
    .then(user => {
    if (!user) {
        res.status(500).send({ status: false, message: "Number is not registered" })
    }

    if(req.body.device_id !== null){       
        UserDeviceId.findOne({
        where: {
            device_id: req.body.device_id,
            user_id: user.id
        }
        }).then(device_token => {

            if (device_token) {
                UserDeviceId.update(
                {
                    firebase_token: req.body.firebase_token,    
                },
                { where: { user_id: user.id } }
                )
            }else{
                const device_id = {
                    user_id: user.id,
                    device_id: req.body.device_id,
                    firebase_token: req.body.firebase_token,
                    device_type: req.body.device_type,
                };
                UserDeviceId.create(device_id)
            }
        })
    }

    Otp.findOne({
        where: {
            user_id: user.id
        }
    }).then(otp => {

        const minutesToAdd = 2
        const currentDate = new Date()
        const futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000)

        if(otp){
            Otp.update(
                {
                    code: "1111", 
                    expire_at: futureDate   
                },
                { where: { user_id: user.id } }
            )
        }else{
           // console.log("yesss")
            const optData = {
                user_id: user.id,
                code: "1111", 
                expire_at: futureDate
            };
            const otpResponse = Otp.create(optData)
        }

        if(req.body.name == user.name){
            var is_checked = 0;
        }else{
            var is_checked = 1; 
        }

        res.status(200).send({
            status: true,
            id: user.id,
            is_checked: is_checked,
            otp: "Otp send to you regsitered mobile number"
        });

    });

    })
    .catch(err => {
        res.status(500).send({ status: false, message: err.message })
    });
  };

// Confirm OTP

  exports.confirm_otp = async (req, res) => {

    const currentDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    const data = await Userdb.findOne({ where: { id: req.body.user_id } })
    if (data) {

        const otp = await Otp.findOne({ where: { user_id: req.body.user_id ,code: req.body.otp } })
        if (otp) {
            if (otp.expire_at > currentDate) {
                var token = jwt.sign({ id: data.id }, "bezkoder-secret-key", {
                    expiresIn: 86400 // 24 hours
                });

                if(req.body.is_checked == 1){
                    console.log("yesssss")
                    Userdb.update(
                        {
                            name: req.body.name   
                        },
                        { where: { id: data.id } }
                    )
                }

                res.send({status:true, message: "Otp Verified!" ,id: data.id,accessToken: token});
            }else{
                res.send({status:false, message: "OTP expired!!"});
            }
        }else{
            res.status(200).send({
                status: false,
                message: "Invalid otp Please resend the otp",
            });
        }
       
    }else{
        res.status(200).send({
            status: false,
            message: "User Not Found",
        });
    }
   
}





