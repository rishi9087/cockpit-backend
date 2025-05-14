// models/Question.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  
bookTitle:{
  type: String
},
});

module.exports = mongoose.model('Book', bookSchema); 
