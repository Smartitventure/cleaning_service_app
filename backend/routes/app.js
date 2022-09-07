var express = require("express");
var router = express.Router();
const controller = require('../controllers/appcontroller');

router.get('/profile',controller.profile);

module.exports = router;