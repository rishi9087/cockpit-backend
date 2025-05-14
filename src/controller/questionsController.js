const express = require('express');
const Question = require("../model/QuestionModel")
const Syllabus = require("../model/SyllabusModel")
const Chapter = require("../model/ChapterModel")
const Book = require("../model/BookModel")

const uploadQuestions = async (req, res) => {
    try {
        const { syllabus, book, chapter, questionId, question, options, explanation } = req.body;

        if (!question || !options) {
            return res.json({ status: 400, message: "Invalid question format" });
        }

        const newQuestion = await Question.create({
            syllabus,
            book,
            chapter,
            questionId,
            question,
            options,
            explanation
        })

        res.json({
            status: 200,
            message: "Question uploaded successfully",
            data: newQuestion
        });

    } catch (err) {
        res.json({
            status: 400,
            message: "Internal server error"
        })
    }
}
const uploadQuestionsBulk = async (req, res) => {
    try {
        const jsonString = req.file.buffer.toString('utf8'); // convert raw binary to string
        const parsedData = JSON.parse(jsonString);  //converts json string to json object
        const { syllabus, book, chapter } = req.body;

        if (!Array.isArray(parsedData)) {
            return res.json({
                status: 400,
                error: 'JSON should be an array of questions'
            });
        }

        const questions = parsedData.map(q => ({
            ...q,
            syllabus,
            book,
            chapter
        }));


        const bulkOps = questions.map((q) => ({
            insertOne: {
                document: q // Directly insert each question as a new document
            }
        }));

        await Question.bulkWrite(bulkOps);

        res.json({
            status: 200,
            message: 'File uploaded successfully',
            count: parsedData.length
        });
    } catch (err) {
        res.json({
            status: 400,
            error: 'Invalid JSON file',
        });
    }
}

const getQuestions = async (req, res) => {
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

const addSyllabus = async (req, res) => {
    try {
        const { title, category } = req.body;
        const image = req.file;
        const imageUrl = image.location;

        const newSyllabus = await Syllabus.create({
            imageUrl,
            title,
            category
        })

        res.json({
            status: 200,
            message: "Syllabus added successfully",
            data: newSyllabus
        });

    } catch (err) {
        res.json({
            status: 400,
            message: "Internal server error"
        })
    }
}

const getSyllabus = async (req, res) => {
    try {
        const syllabus = await Syllabus.find();
        if (!syllabus) {
            res.json({
                status: 400,
                message: "syllabus not found"
            })
        }
        res.json({
            status: 200,
            message: "syllabus fetched successfully",
            data: syllabus
        });

    } catch (error) {
        console.log(error);
    }
}

const addChapters = async (req, res) => {
    try {
        const { syllabus, book, chapterno, chaptername, status } = req.body;

        const newChapter = await Chapter.create({
            syllabus,
            book,
            chapterno,
            chaptername,
            status
        })

        res.json({
            status: 200,
            message: "Chapter added successfully",
            data: newChapter
        });

    } catch (err) {
        res.json({
            status: 400,
            message: "Internal server error"
        })
    }
}

const addBooks = async (req, res) => {
    try {
        const { bookTitle } = req.body;

        const newBook = await Book.create({
            bookTitle
        })

        res.json({
            status: 200,
            message: "Book added successfully",
            data: newBook
        });

    } catch (err) {
        res.json({
            status: 400,
            message: "Internal server error"
        })
    }
}

module.exports = { getQuestions, uploadQuestions, uploadQuestionsBulk, addSyllabus, getSyllabus, addChapters, addBooks };
