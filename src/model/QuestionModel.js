// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionId:{
    type: String,
    unique: true,
},     
question:{
    type: String
},
options: [
    {
      id: Number,
      text: String,
      isCorrect: Boolean
    }
],

  explanation:{
    type: String
  }

});

module.exports = mongoose.model('Question', questionSchema); 
