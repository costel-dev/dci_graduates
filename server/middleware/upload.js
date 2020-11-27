// Init multer
const path = require("path");
const multer = require("multer");

// set Storge Engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    /*  console.log("multer file", file); */
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// file filter for validation
const fileFilter = (req, file, cb) => {
  cb(null, true);
};

let upload = multer({
  storage: storage,
});

// exports upload middleware
module.exports = upload.single("image");
