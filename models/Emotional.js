

const mongoose = require('mongoose');

const EmotionalSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
    enum: ['happy', 'sad', 'anxiety', 'angry', 'stressed', 'motivated'] // restricts allowed categories
  },
  suggestions: {
    type: [String],
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Emotional', EmotionalSchema);

