// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
questionId:{
    type: String,
    // unique: true,
},     
question:{
    type: String
},
options: [
  {
    id: { type: Number},
    text: { type: String},
    isCorrect: { type: Boolean }
  }
],

  explanation:{
    type: String
  }

});

module.exports = mongoose.model('Question', questionSchema); 
