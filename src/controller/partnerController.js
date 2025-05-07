const express = require('express');
const Partner =  require("../model/PartnerModel")

const RegisterPartner = async (req , res ) => {
    try {
        const {instituteName, instituteType, contactPerson, position, email, phone, estimatedStudents,needs} =  req.body;
        

        const newPartner = await Partner.create({
            instituteName : instituteName,
            instituteType: instituteType,
            contactPerson: contactPerson,
            position: position,
            email: email,
            phone: phone,
            estimatedStudents: estimatedStudents,
            needs: needs
        })

        res.json({
            status : 200,
            message: "Form submitted successfully",
            data : newPartner        
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {RegisterPartner};
