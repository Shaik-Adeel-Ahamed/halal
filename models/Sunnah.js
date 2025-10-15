const mongoose = require('mongoose');


const SunnahSchema = new mongoose.Schema({
title: String,
description: { type: [String], required: true }
});

module.exports = mongoose.model('Sunnah', SunnahSchema);