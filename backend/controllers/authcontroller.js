const Userdb = require('../models/User');
const Otp = require('../models/Otp');
const bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");

// register user
exports.create = async (req,res,next)=>{
    const userData = {
        name: req.body.name,
        mobile_number: req.body.mobile_number,
        gender: req.body.gender,
        dob: req.body.dob,
        role: req.body.role,
        gps_position: req.body.gps_position,
        status: 0,
        join_date: req.body.join_date,
        language: req.body.language,
        country: req.body.country,
    };
    await Userdb.create(userData)
    .then(data => {
        var token = jwt.sign({ id: data.id }, "bezkoder-secret-key", {
        expiresIn: 86400 // 24 hours
        });
       res.send({status:true, message: "User registered successfully!" ,id: data.id,accessToken: token});
    })
    .catch(err => {
        res.send({ message: err});
    });
}


// login user

exports.login = (req, res) => {
    Userdb.findOne({
      where: {
        bunmber: req.body.email
      }
    })
    .then(user => {
    if (!user) {
        return res.status(404).send({ message: "User Not found." });
    }
  
    var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
    );
    if (!passwordIsValid) {
        return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
        });
    }
  
    var token = jwt.sign({ id: user.id }, "bezkoder-secret-key", {
        expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
        status: true,
        id: user.id,
        message: "User login successfully!",
        accessToken: token
    });

      })
      .catch(err => {
        res.status(500).send({ status: false, message: err.message })
      });
  };

// forget Password


  exports.forgetPassword = async (req, res) => {

    const data = await Userdb.findOne({ where: { email: req.body.email } })
    .then(() => {  

        if (!data) {
            return res.status(404).send({ message: "User Not found." });
        }
        
    })

    if (data) {

        // Time 
        const minutesToAdd = 2
        const currentDate = new Date()
        const futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000)
        const otpCode = Math.floor((Math.random() * 1000000) + 1)
        const optData = {
            user_id: data.id,
            otp: otpCode,
            expiryDate: futureDate
        }
        const otpResponse = await Otp.create(optData)

        // Sending email 
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'tushar.rathi860@gmail.com',
                pass: 'vbjjjhalqrfbqpuw'
            }
        })

        const mailOptions = {
            from: 'tushar.rathi860@gmail.com',
            to: 'snavi4551@gmail.com@gmail.com',
            subject: 'Sending Email using Node.js',
            text: `That was easy! OTP: ${otpResponse.otp}`
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })

        res.status(200).send({
            status: true,
            message: "OTP sent successfully!",
        });
       
    }
    res.status(200).send({
        status: false,
        message: "Email does not exist!",
    });

}





