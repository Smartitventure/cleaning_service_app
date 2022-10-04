var express = require("express");
var router = express.Router();
const controller = require('../controllers/appcontroller');
const { verifyAccessToken } = require('../helpers/jwt_helper')

const multer = require("multer");
const storage = multer.memoryStorage();


const fileFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === "image") {
      cb(null, true);
    } else {
      cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 1000000000, files: 1 },
});

router.get('/profile',verifyAccessToken ,controller.profile);

router.post('/update_information',upload.single("file"),verifyAccessToken, controller.update_information);

router.post('/add_fav_location',verifyAccessToken,controller.add_fav_location);

router.get('/services',verifyAccessToken,controller.services);

router.post('/request_services',verifyAccessToken,controller.request_services);

router.get('/requested_bookings',verifyAccessToken,controller.requested_bookings);

router.get('/planned_bookings',verifyAccessToken,controller.planned_bookings);

router.post('/planned_bookings_details',verifyAccessToken,controller.planned_bookings_details);

router.post('/booking_details',verifyAccessToken,controller.booking_details);

router.post('/provider_detail',verifyAccessToken,controller.provider_detail);

router.post('/hire_providers',verifyAccessToken ,controller.hire_providers);

router.post('/add_reviews',verifyAccessToken,controller.add_reviews);


module.exports = router;