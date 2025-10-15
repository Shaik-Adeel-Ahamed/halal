require('dotenv').config();
const mongoose = require('mongoose');
const Dua = require('./models/Dua');
const Sunnah = require('./models/Sunnah');
const Emotional = require('./models/Emotional');
const Sura = require('./models/Sura');
const Hadith = require('./models/Hadith');


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/islamic_site';


async function seed(){


try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB ✅');

    
  } catch (err) {
    console.error("Error seeding data ❌", err);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed 🔒");
  }
}

seed();

