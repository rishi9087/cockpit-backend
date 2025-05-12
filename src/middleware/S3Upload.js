const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();

// Configure AWS with your credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Your AWS Access Key
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,// Your AWS Secret Access Key
  region: 'ap-south-1' // Your S3 bucket region
});

const s3 = new AWS.S3();

// Setup multer to use S3 storage
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'sharyo-test', 
    // acl: 'public-read',  // Optional: Set file ACL for public access (use with caution)
    key: function (req, file, cb) {
      // Generate a unique filename for each image
      cb(null, Date.now().toString() + '-' + file.originalname);
    }
  })
});

module.exports = upload;
