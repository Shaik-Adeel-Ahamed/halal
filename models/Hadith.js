const mongoose = require('mongoose');

const HadithSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String }],  // multiple choices
  answer: { type: String, required: true },
  reference: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Hadith', HadithSchema);


