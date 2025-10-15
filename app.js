require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');   // ✅ Added

const indexRoutes = require('./routes/index');
const hadithQuizRoutes = require('./routes/hadithQuiz');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);                  // ✅ Added
app.set('layout', 'layout');              // ✅ Default layout (views/layout.ejs)

// Static
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/', indexRoutes);
app.use('/', hadithQuizRoutes); 

// Connect to Mongo
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/islamic_site';
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server only after DB connects
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    console.log("http://localhost:3000/");
  })
  .catch(err => {
    console.error('MongoDB connection error', err);
  });

// =======================
// 🔍 Global Search Route
// =======================
const Dua = require('./models/Dua');
const Sura = require('./models/Sura');
const Hadith = require('./models/Hadith');
const Sunnah = require('./models/Sunnah');
const Emotional = require('./models/Emotional');

app.get('/search', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.redirect('/');

  try {
    const regex = new RegExp(query, 'i'); // case-insensitive partial match

    const [duas, suras, hadiths, sunnahs, emotionals] = await Promise.all([
      Dua.find({
        $or: [
          { title: regex },
          { arabic: regex },
          { transliteration: regex },
          { translation: regex },
          { tags: regex }
        ]
      }),
      Sura.find({
        $or: [
          { name: regex },
          { shortDescription: regex },
          { 'uses.when': regex },
          { 'uses.benefit': regex },
          { 'uses.times': regex }
        ]
      }),
      Hadith.find({
        $or: [
          { text: regex },
          { source: regex },
          { reference: regex }
        ]
      }),
      Sunnah.find({
        $or: [
          { title: regex },
          { description: regex }
        ]
      }),
      Emotional.find({
        $or: [
          { mood: regex },
          { suggestions: regex }
        ]
      })
    ]);

    res.render('pages/searchResults', {
      query,
      results: { duas, suras, hadiths, sunnahs, emotionals }
    });

  } catch (err) {
    console.error('Search error:', err);
    res.status(500).send('Error performing search');
  }
});

// app.use((req, res, next) => {
//   res.locals.title = 'Islamic Site';
//   next();
// });

module.exports = app;


