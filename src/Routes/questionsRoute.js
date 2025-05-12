const express = require('express')
const {getQuestions, uploadQuestions, uploadQuestionsBulk} = require('../controller/questionsController');
const router =  express.Router()
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); //for temporary(buffer) storing of file

router.post('/cockpit/uploadQuestionsBulk', upload.single('file'), uploadQuestionsBulk);
router.post('/cockpit/uploadQuestions',  uploadQuestions);
router.get("/cockpit/questions", getQuestions)

module.exports = router;
