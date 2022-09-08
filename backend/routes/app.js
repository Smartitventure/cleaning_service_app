var express = require("express");
var router = express.Router();
const controller = require('../controllers/appcontroller');

router.get('/profile',controller.profile);
router.post('/update_information',controller.update_information);
router.post('/add_fav_location',controller.add_fav_location);
router.post('/remove_fav_location',controller.remove_fav_location);

module.exports = router;