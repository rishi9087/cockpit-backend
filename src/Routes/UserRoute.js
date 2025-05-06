const express = require('express')
const { CreateUser, LoginUser } = require('../controller/UserController');

const router =  express.Router();

router.post("/cockpit/registerUser", CreateUser)
router.post("/cockpit/loginUser", LoginUser)

module.exports = router;
