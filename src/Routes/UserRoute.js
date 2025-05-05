// const { Router } = require('express');
const express = require('express')
const createUser =  require("../controller/UserController")

const router =  express.Router()

router.post("/api/createUser", createUser)


module.exports = router;
