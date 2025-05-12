const express = require('express');
const User =  require("../model/UserModel")
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET_KEY || "token123";

const CreateUser = async (req , res ) => {
    try {
        const {email,username,password} =  req.body;

        const userExist = await User.findOne({email: email});

        if(userExist){
            return res.json({ 
                status: 400,
                message: "Email already exists"
             })
        }

        const hashedPassword = await bcrypt.hash(password, 10); //10 times hashing will happen

        const newUser = await User.create({
            email : email,
            username: username,
            password: hashedPassword
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

const LoginUser = async (req , res ) => {

    try {
        const {email,password} =  req.body;
        const userExist = await User.findOne({email: email});
      
        if(!userExist){
             res.json({ 
                status: 400,
                message: "Invalid credentials"
             })
        }

        const pwdcompare = await bcrypt.compare(password, userExist.password);
        const jwtToken = jwt.sign( { id: userExist._id },  JWT_SECRET, { expiresIn: "10d" } );

        if (pwdcompare) {
            res.json({
                    status: 200,
                    message: "Login successfull",
                    data: userExist,
                    token: jwtToken
                });
        }
        else {
            res.json({
                status: 400,
                message: "Invalid credentials"
             })
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {CreateUser, LoginUser};
