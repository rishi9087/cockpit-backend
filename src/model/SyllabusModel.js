const mongoose = require('mongoose');

const SyllabusSchema = new mongoose.Schema({

    imageUrl: {
        type: String,
    },
    title: {
        type: String,
    },
    category: {
        type: String,
    },
})

module.exports = mongoose.model('Syllabus', SyllabusSchema)

