const mongoose = require('mongoose');

const DuaSchema = new mongoose.Schema({
title: String,
arabic: String,
transliteration: String,
translation: String,
tags: [String], // e.g. ["after-prayer", "morning"]
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Dua', DuaSchema);