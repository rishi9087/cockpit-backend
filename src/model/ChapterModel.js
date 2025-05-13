// models/Question.js
const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  
syllabus:{
  type: String
},
book:{
  type: String
},
chapterno:{
  type: Number
},

chaptername:{
    type: String,
    // unique: true,
},     
status:{
    type: String
}

});

module.exports = mongoose.model('Chapter', chapterSchema); 
