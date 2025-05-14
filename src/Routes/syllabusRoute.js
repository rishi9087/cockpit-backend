const express = require('express')
const {addSyllabus, getSyllabus, addChapters, addBooks} = require('../controller/questionsController');
const router =  express.Router()
const upload= require('../middleware/S3Upload')

router.post('/cockpit/addSyllabus', upload.single('image'), addSyllabus);
router.get('/cockpit/getSyllabus', getSyllabus);
router.post('/cockpit/addChapters', addChapters);
router.post('/cockpit/addBooks', addBooks);

module.exports = router;
