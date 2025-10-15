const express = require('express');
const router = express.Router();
const Hadith = require('../models/Hadith');

// Show level selector
router.get('/quiz', (req, res) => {
  res.render('quizLevel');
});

// Fetch random questions by level
router.get('/quiz/:level', async (req, res) => {
  try {
    const level = parseInt(req.params.level);
    const questionCount = level * 10;

    const total = await Hadith.countDocuments();
    const count = Math.min(questionCount, total);

    const randomQuestions = await Hadith.aggregate([{ $sample: { size: count } }]);
    res.render('quizPage', { hadiths: randomQuestions, level });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
