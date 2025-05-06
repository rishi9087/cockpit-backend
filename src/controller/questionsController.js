const express = require('express');
const Question =  require("../model/QuestionModel")

const getQuestions = async (req , res ) => {
    try {
        const questions = await Question.find();
        if (!questions) {
             res.json({ 
                status: 400,
                message: "questions not found"
             })
        }
        res.json({
            status: 200,
            message: "questions fetched successfully",
            data: questions
        });

    } catch (error) {
        console.log(error);
    }
}

module.exports = {getQuestions};
