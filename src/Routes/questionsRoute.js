const express = require('express')
const {getQuestions} = require('../controller/questionsController');
const router =  express.Router()

router.get("/cockpit/questions", getQuestions)




module.exports = router;
