const express = require('express');
const User =  require("../model/UserModel")


const createUser = async (req , res ) => {
    try {
        const {name, email} =  req.body;

        const newUser = await User.create({
            name :name,
            email : email
        })

        res.json({
            status : 200,
            message: "New User Created",
            data : newUser
            
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = createUser;
