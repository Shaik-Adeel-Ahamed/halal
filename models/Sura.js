const mongoose = require('mongoose');


// const SuraSchema = new mongoose.Schema({
// name: String,
// number: Number,
// uses: [String],
// shortDescription: String,
// createdAt: { type: Date, default: Date.now }
// });

const useSchema = new mongoose.Schema({
  when: String,
  benefit: String,
  times: String
}, { _id: false }); // Optional: prevent creating separate _id for each use object

const SuraSchema = new mongoose.Schema({
  name: String,
  number: Number,
  uses: [useSchema],  // <-- This is now an array of objects, not strings
  shortDescription: String,
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Sura', SuraSchema);