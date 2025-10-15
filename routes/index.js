const express = require('express');
const router = express.Router();


const Dua = require('../models/Dua');
const Sunnah = require('../models/Sunnah');
const Emotional = require('../models/Emotional');
const Sura = require('../models/Sura');
const Hadith = require('../models/Hadith');


// Home
router.get('/', (req, res) => {
res.render('index', { title: 'Islamic Home' });
});


// Duas
router.get('/duas', async (req, res) => {
const duas = await Dua.find().sort({ createdAt: -1 }).lean();
res.render('pages/duas', { title: 'Duas', duas });
});


// Sunnas
router.get('/sunnas', async (req, res) => {
const sunnas = await Sunnah.find().sort({ createdAt: -1 }).lean();
res.render('pages/sunnas', { title: 'Sunnas', sunnas });
});


// Emotional suggestions
router.get('/emotional', async (req, res) => {
const items = await Emotional.find().lean();
res.render('pages/emotional', { title: 'Emotional Suggestions', items });
});


// Suras
router.get('/suras', async (req, res) => {
const suras = await Sura.find().sort({ number: 1 }).lean();
res.render('pages/suras', { title: 'Suras', suras });
});


// Hadiths
router.get('/hadiths', async (req, res) => {
const hadiths = await Hadith.find().sort({ createdAt: -1 }).lean();
res.render('pages/hadiths', { title: 'Hadiths', hadiths });
});


module.exports = router;