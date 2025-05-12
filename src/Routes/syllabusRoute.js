const express = require('express')
const {addSyllabus, getSyllabus} = require('../controller/questionsController');
const router =  express.Router()
const upload= require('../middleware/S3Upload')

router.post('/cockpit/addSyllabus', upload.single('image'), addSyllabus);
router.get('/cockpit/getSyllabus', getSyllabus);
module.exports = router;
