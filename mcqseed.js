require('dotenv').config();

const mongoose = require('mongoose');
const Hadith = require('./models/Hadith');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/islamic_site';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const quizData = [
  {
    question: "What is the first month of the Islamic calendar?",
    options: ["Muharram", "Ramadan", "Shawwal", "Rabi’ al-Awwal"],
    answer: "Muharram",
    reference: "Islamic Calendar"
  },
  {
    question: "What is the last month of the Islamic calendar?",
    options: ["Dhul Hijjah", "Ramadan", "Shawwal", "Rajab"],
    answer: "Dhul Hijjah",
    reference: "Islamic Calendar"
  },
  {
    question: "How many daily prayers are there in Islam?",
    options: ["3", "4", "5", "6"],
    answer: "5",
    reference: "Sahih Bukhari 1:1"
  },
  {
    question: "What is the name of the Angel who brought revelation to the Prophets?",
    options: ["Mikail", "Israfil", "Jibreel", "Malik"],
    answer: "Jibreel",
    reference: "Qur’an 2:97"
  },
  {
    question: "In which cave did Prophet Muhammad (ﷺ) receive his first revelation?",
    options: ["Cave Thawr", "Cave Hira", "Cave Noor", "Cave Uhud"],
    answer: "Cave Hira",
    reference: "Sahih Bukhari 3:1"
  },
  {
    question: "What was the first word revealed to the Prophet (ﷺ)?",
    options: ["Pray", "Read", "Listen", "Proclaim"],
    answer: "Read",
    reference: "Surah Al-‘Alaq 96:1"
  },
  {
    question: "How old was the Prophet Muhammad (ﷺ) when he received the first revelation?",
    options: ["25", "30", "35", "40"],
    answer: "40",
    reference: "Sirah Nabawiyyah"
  },
  {
    question: "What is the name of the Prophet’s (ﷺ) father?",
    options: ["Abdullah", "Abdul Muttalib", "Abu Talib", "Hamza"],
    answer: "Abdullah",
    reference: "Seerah of the Prophet"
  },
  {
    question: "What is the name of the Prophet’s (ﷺ) mother?",
    options: ["Amina", "Khadijah", "Haleema", "Fatimah"],
    answer: "Amina",
    reference: "Seerah of the Prophet"
  },
  {
    question: "Where was Prophet Muhammad (ﷺ) born?",
    options: ["Madinah", "Taif", "Makkah", "Jerusalem"],
    answer: "Makkah",
    reference: "Seerah"
  },
  {
    question: "In which city did Prophet Muhammad (ﷺ) pass away?",
    options: ["Makkah", "Madinah", "Taif", "Jerusalem"],
    answer: "Madinah",
    reference: "Seerah"
  },
  {
    question: "What was the first battle fought by the Muslims?",
    options: ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq", "Battle of Hunayn"],
    answer: "Battle of Badr",
    reference: "Seerah"
  },
  {
    question: "How many companions fought in the Battle of Badr?",
    options: ["313", "500", "700", "1000"],
    answer: "313",
    reference: "Battle of Badr"
  },
  {
    question: "Which Surah is known as ‘The Heart of the Qur’an’?",
    options: ["Al-Fatiha", "Yaseen", "Al-Ikhlas", "Ar-Rahman"],
    answer: "Yaseen",
    reference: "Tafsir Ibn Kathir"
  },
  {
    question: "Which Surah is the longest in the Qur’an?",
    options: ["Al-Baqarah", "Aal-Imran", "An-Nisa", "Al-Ma'idah"],
    answer: "Al-Baqarah",
    reference: "Qur’an 2"
  },
  {
    question: "Which Surah has no Bismillah?",
    options: ["At-Tawbah", "Al-Anfal", "Al-Fatiha", "Al-Kahf"],
    answer: "At-Tawbah",
    reference: "Qur’an 9"
  },
  {
    question: "How many Surahs are there in the Qur’an?",
    options: ["100", "110", "114", "120"],
    answer: "114",
    reference: "Qur’an"
  },
  {
    question: "How many Juz are there in the Qur’an?",
    options: ["10", "20", "30", "40"],
    answer: "30",
    reference: "Qur’an"
  },
  {
    question: "Who was the first Caliph after Prophet Muhammad (ﷺ)?",
    options: ["Umar ibn Al-Khattab", "Ali ibn Abi Talib", "Abu Bakr As-Siddiq", "Uthman ibn Affan"],
    answer: "Abu Bakr As-Siddiq",
    reference: "Khilafah Rashidun"
  },
  {
    question: "Which Prophet built the Ka‘bah?",
    options: ["Prophet Musa", "Prophet Ibrahim", "Prophet Isa", "Prophet Nuh"],
    answer: "Prophet Ibrahim",
    reference: "Qur’an 2:127"
  },
  {
    question: "Who was Prophet Ibrahim’s son who helped him build the Ka‘bah?",
    options: ["Ishaq", "Isma‘eel", "Ya‘qub", "Yusuf"],
    answer: "Isma‘eel",
    reference: "Qur’an 2:127"
  },
  {
    question: "What is the name of the night when the Qur’an was first revealed?",
    options: ["Laylat al-Mi‘raj", "Laylat al-Qadr", "Laylat al-Isra", "Laylat al-Hijrah"],
    answer: "Laylat al-Qadr",
    reference: "Qur’an 97:1"
  },
  {
    question: "Which month is fasting (Sawm) obligatory in?",
    options: ["Rajab", "Sha‘ban", "Ramadan", "Shawwal"],
    answer: "Ramadan",
    reference: "Qur’an 2:185"
  },
  {
    question: "How many Rak‘ahs are there in Fajr prayer?",
    options: ["2", "3", "4", "5"],
    answer: "2",
    reference: "Sahih Bukhari"
  },
  {
    question: "How many Rak‘ahs are there in Dhuhr prayer?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    reference: "Sahih Bukhari"
  },
  {
    question: "How many Rak‘ahs are there in Asr prayer?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    reference: "Sahih Muslim"
  },
  {
    question: "How many Rak‘ahs are there in Maghrib prayer?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    reference: "Sahih Muslim"
  },
  {
    question: "How many Rak‘ahs are there in Isha prayer?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    reference: "Sahih Bukhari"
  },
  {
    question: "What is the name of the well-known Muslim declaration of faith?",
    options: ["Tawheed", "Shahadah", "Salah", "Zakat"],
    answer: "Shahadah",
    reference: "Pillars of Islam"
  },
  {
    question: "How many pillars of Islam are there?",
    options: ["3", "4", "5", "6"],
    answer: "5",
    reference: "Sahih Muslim"
  },
  {
    question: "How many articles of faith (Iman) are there?",
    options: ["4", "5", "6", "7"],
    answer: "6",
    reference: "Hadith Jibreel"
  },
  {
    question: "Which direction do Muslims face when they pray?",
    options: ["Jerusalem", "Ka‘bah", "Madina", "Mount Arafah"],
    answer: "Ka‘bah",
    reference: "Qur’an 2:144"
  },
  {
    question: "What is Zakat?",
    options: ["Charity", "Fasting", "Prayer", "Pilgrimage"],
    answer: "Charity",
    reference: "Qur’an 9:60"
  },
  {
    question: "What is Hajj?",
    options: ["Fasting", "Charity", "Pilgrimage", "Prayer"],
    answer: "Pilgrimage",
    reference: "Qur’an 22:27"
  },
  {
    question: "Which Prophet was swallowed by a big fish?",
    options: ["Prophet Musa", "Prophet Yunus", "Prophet Isa", "Prophet Yusuf"],
    answer: "Prophet Yunus",
    reference: "Qur’an 37:139-142"
  },
  {
    question: "Which Prophet parted the sea by Allah’s permission?",
    options: ["Prophet Isa", "Prophet Musa", "Prophet Ibrahim", "Prophet Nuh"],
    answer: "Prophet Musa",
    reference: "Qur’an 26:63"
  },
  {
    question: "Which Prophet was known for his patience?",
    options: ["Prophet Ayub", "Prophet Idris", "Prophet Yusuf", "Prophet Yahya"],
    answer: "Prophet Ayub",
    reference: "Qur’an 21:83"
  },
  {
    question: "Which Prophet was given the Zabur?",
    options: ["Prophet Musa", "Prophet Dawud", "Prophet Isa", "Prophet Muhammad"],
    answer: "Prophet Dawud",
    reference: "Qur’an 17:55"
  },
  {
    question: "Which Prophet was given the Tawrah?",
    options: ["Prophet Musa", "Prophet Isa", "Prophet Ibrahim", "Prophet Nuh"],
    answer: "Prophet Musa",
    reference: "Qur’an 3:3"
  },
  {
    question: "Which Prophet was given the Injil?",
    options: ["Prophet Musa", "Prophet Isa", "Prophet Ibrahim", "Prophet Dawud"],
    answer: "Prophet Isa",
    reference: "Qur’an 5:46"
  },
  {
    question: "Which Prophet was given the Qur’an?",
    options: ["Prophet Muhammad", "Prophet Isa", "Prophet Musa", "Prophet Ibrahim"],
    answer: "Prophet Muhammad",
    reference: "Qur’an 15:9"
  },
  {
    question: "Which Prophet built the Ark?",
    options: ["Prophet Nuh", "Prophet Musa", "Prophet Ibrahim", "Prophet Idris"],
    answer: "Prophet Nuh",
    reference: "Qur’an 11:37"
  },
  {
    question: "Which Prophet was known for interpreting dreams?",
    options: ["Prophet Yusuf", "Prophet Ibrahim", "Prophet Isa", "Prophet Dawud"],
    answer: "Prophet Yusuf",
    reference: "Qur’an 12:36"
  },
  {
    question: "What is the holy book of Islam?",
    options: ["Bible", "Torah", "Zabur", "Qur’an"],
    answer: "Qur’an",
    reference: "Qur’an 15:9"
  },
  {
    question: "What language was the Qur’an revealed in?",
    options: ["Hebrew", "Arabic", "Syriac", "Persian"],
    answer: "Arabic",
    reference: "Qur’an 26:195"
  },
  {
    question: "What is the name of the Angel of Death?",
    options: ["Israfil", "Malik", "Mikail", "Malak al-Mawt"],
    answer: "Malak al-Mawt",
    reference: "Qur’an 32:11"
  },
  {
    question: "Which angel will blow the trumpet on the Day of Judgement?",
    options: ["Jibreel", "Israfil", "Mikail", "Malik"],
    answer: "Israfil",
    reference: "Hadith Muslim"
  },
  {
    question: "How many months are there in the Islamic calendar?",
    options: ["10", "11", "12", "13"],
    answer: "12",
    reference: "Qur’an 9:36"
  },
  {
    question: "What is the main purpose of fasting?",
    options: ["To lose weight", "To feel hungry", "To attain Taqwa", "To celebrate"],
    answer: "To attain Taqwa",
    reference: "Qur’an 2:183"
  },
  {
    question: "How old was the Prophet (ﷺ) when his mother passed away?",
    options: ["4", "6", "8", "10"],
    answer: "6",
    reference: "Seerah"
  },
  {
    question: "What was the name of the Prophet’s (ﷺ) first wife?",
    options: ["Aisha", "Khadijah", "Hafsa", "Sauda"],
    answer: "Khadijah",
    reference: "Seerah"
  },
  {
    question: "How many years did the Prophet (ﷺ) live in Makkah after Prophethood?",
    options: ["10", "13", "20", "23"],
    answer: "13",
    reference: "Seerah"
  },
  {
    question: "How many total years was the Prophethood of Muhammad (ﷺ)?",
    options: ["10", "13", "20", "23"],
    answer: "23",
    reference: "Seerah"
  },
  {
    question: "What is the Arabic word for charity?",
    options: ["Salah", "Sadaqah", "Zakat", "Hajj"],
    answer: "Sadaqah",
    reference: "Qur’an 9:60"
  },
  {
    question: "Who was the Prophet’s (ﷺ) closest companion?",
    options: ["Umar", "Uthman", "Abu Bakr", "Ali"],
    answer: "Abu Bakr",
    reference: "Hadith Bukhari"
  },
  {
    question: "Which Surah was revealed completely at once?",
    options: ["Al-Fatiha", "Al-Ikhlas", "Al-Ma’idah", "Al-Kawthar"],
    answer: "Al-Kawthar",
    reference: "Tafsir Ibn Kathir"
  }
];

async function seedQuiz() {
  try {
    await Hadith.deleteMany({});
    await Hadith.insertMany(quizData);
    console.log("✅ Islamic Quiz Questions inserted successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error inserting data:", err);
    mongoose.connection.close();
  }
}

seedQuiz();
