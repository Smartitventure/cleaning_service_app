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

module.exports = router;