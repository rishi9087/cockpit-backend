const express = require('express')
const { CreateUser, LoginUser } = require('../controller/UserController');
const {RegisterPartner} = require('../controller/partnerController');

const router =  express.Router();

router.post("/cockpit/registerUser", CreateUser)
router.post("/cockpit/loginUser", LoginUser)
router.post("/cockpit/registerpartner", RegisterPartner)

module.exports = router;