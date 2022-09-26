var express = require("express");
var router = express.Router();
const controller = require('../controllers/authcontroller');

router.post('/register_user',controller.create);
router.post('/login_user',controller.login);
router.post('/confirm_otp',controller.confirm_otp);

// route for logout

module.exports = router;