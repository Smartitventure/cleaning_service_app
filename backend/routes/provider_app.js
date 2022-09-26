var express = require("express");
var router = express.Router();
const controller = require('../controllers/providerAppController');
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
router.get('/customer_requested_bookings',verifyAccessToken ,controller.customer_bookings);
router.post('/customer_booking_detail',verifyAccessToken ,controller.customer_booking_detail);
router.post('/add_reviews',verifyAccessToken ,controller.add_reviews);
router.post('/provider_request',verifyAccessToken ,controller.provider_request);
router.post('/update_information',upload.single("file"),verifyAccessToken, controller.update_information);

module.exports = router;