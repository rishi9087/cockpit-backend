const express = require('express')
const {getQuestions, uploadQuestions} = require('../controller/questionsController');
const router =  express.Router()
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); //for temporary(buffer) storing of file

router.post('/cockpit/uploadQuestions', upload.single('file'), uploadQuestions);
router.get("/cockpit/questions", getQuestions)

module.exports = router;
