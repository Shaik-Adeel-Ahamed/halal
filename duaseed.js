require('dotenv').config();
const mongoose = require('mongoose');
const Dua = require('./models/Dua'); // adjust path if needed

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/islamic_site';

const duasData = [
  // 1
  {
    title: "Dua for Forgiveness (short)",
    arabic: "رَبِّ اغْفِرْ لِي",
    transliteration: "Rabbi ighfir lī",
    translation: "My Lord, forgive me.",
    tags: ["forgiveness", "short", "repentance"]
  },
  // 2
  {
    title: "Dua: In the name of Allah",
    arabic: "بِسْمِ اللَّٰهِ الرَّحْمَـٰنِ الرَّحِيمِ",
    transliteration: "Bismillāh ar-Raḥmān ar-Raḥīm",
    translation: "In the name of Allah, the Most Merciful, the Most Compassionate.",
    tags: ["opening", "daily", "blessing"]
  },
  // 3
  {
    title: "Dua for Guidance (short)",
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Ihdinā aṣ-ṣirāṭ al-mustaqīm",
    translation: "Guide us to the Straight Path.",
    tags: ["guidance", "quran", "short"]
  },
  // 4
  {
    title: "Dua for Reliance",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Hasbunallāhu wa niʿmal wakeel",
    translation: "Allah is sufficient for us, and He is the best Disposer of affairs.",
    tags: ["reliance", "trust", "comfort"]
  },
  // 5
  {
    title: "Dua for Strength",
    arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ",
    transliteration: "Allāhumma anta as-Salām",
    translation: "O Allah, You are Peace (and from You comes peace).",
    tags: ["peace", "names-of-allah"]
  },
  // 6
  {
    title: "Dua for Anxiety & Sorrow",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
    transliteration: "Allāhumma innī aʿūdhu bika mina al-hammi wa al-ḥazan",
    translation: "O Allah, I seek refuge in You from anxiety and sorrow.",
    tags: ["anxiety", "sorrow", "protection"]
  },
  // 7
  {
    title: "Short Praise",
    arabic: "الْحَمْدُ لِلَّهِ",
    transliteration: "Al-ḥamdu lillāh",
    translation: "All praise is due to Allah.",
    tags: ["praise", "gratitude", "remembrance"]
  },
  // 8
  {
    title: "Glorification",
    arabic: "سُبْحَانَ اللَّهِ",
    transliteration: "Subḥānallāh",
    translation: "Glory be to Allah.",
    tags: ["praise", "remembrance"]
  },
  // 9
  {
    title: "Seeking Good in This Life & Next",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
    transliteration: "Rabbana ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan",
    translation: "Our Lord, give us good in this world and good in the Hereafter.",
    tags: ["general", "wellbeing", "quran"]
  },
  // 10
  {
    title: "Repentance & Mercy",
    arabic: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي",
    transliteration: "Allāhumma ighfir lī warḥamnī",
    translation: "O Allah, forgive me and have mercy on me.",
    tags: ["forgiveness", "mercy", "repentance"]
  },
  // 11
  {
    title: "Dua for Parents",
    arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ",
    transliteration: "Rabbi ighfir lī wa liwālidayya",
    translation: "My Lord, forgive me and my parents.",
    tags: ["parents", "forgiveness"]
  },
  // 12
  {
    title: "Dua for Steadfastness",
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
    transliteration: "Rabbana afrigh ʿalayna ṣabran",
    translation: "Our Lord, pour upon us patience.",
    tags: ["patience", "difficulty"]
  },
  // 13
  
  // 14
  {
    title: "Seeking Good Provision",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا طَيِّبًا",
    transliteration: "Allāhumma innī as'aluka rizqan ṭayyiban",
    translation: "O Allah, I ask You for good and pure provision.",
    tags: ["provision", "sustenance"]
  },
  // 15
  {
    title: "Refuge from Evil",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    transliteration: "Aʿūdhu billāhi min ash-shayṭān ir-rajīm",
    translation: "I seek refuge in Allah from the accursed Satan.",
    tags: ["protection", "satan"]
  },
  // 16
  {
    title: "Dua Before Sleep",
    arabic: "بِاسْمِكَ رَبِّ وَضَعْتُ جَنْبِي",
    transliteration: "Bismika rabbi wa ḍaʿtu janbī",
    translation: "In Your name, my Lord, I lie down (sleep).",
    tags: ["sleep", "protection"]
  },
  // 17
  {
    title: "Dua for Entering Home",
    arabic: "اللَّهُمَّ بِاسْمِكَ أَدْخُلُ",
    transliteration: "Allāhumma bismika adkhul",
    translation: "O Allah, in Your name I enter (the house).",
    tags: ["home", "blessing"]
  },
  // 18
  {
    title: "Dua on Leaving Home",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
    transliteration: "Bismillāh tawakkaltu ʿalallāh",
    translation: "In the name of Allah; I put my trust in Allah.",
    tags: ["travel", "reliance"]
  },
  // 19
  {
    title: "Dua for Protection of Family",
    arabic: "اللَّهُمَّ احْفَظْ أَهْلِي",
    transliteration: "Allāhumma iḥfaẓ ahlī",
    translation: "O Allah, protect my family.",
    tags: ["family", "protection"]
  },
  // 20
  {
    title: "Dua for Entering the Mosque",
    arabic: "اللَّهُ أَكْبَرُ، سُبْحَانَ اللَّهِ",
    transliteration: "Allāhu akbar, subḥānallāh",
    translation: "Allah is the Greatest, Glory be to Allah. (remembrance when entering mosque)",
    tags: ["mosque", "remembrance"]
  },
  // 21
  {
    title: "Dua for Ending the Prayer",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    transliteration: "Astaghfirullāh",
    translation: "I ask Allah for forgiveness.",
    tags: ["forgiveness", "salah"]
  },
  // 22
  {
    title: "Dua for Relief from Debt",
    arabic: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ",
    transliteration: "Allāhumma ikfinī biḥalālika ʿan ḥarāmika",
    translation: "O Allah, suffice me with what is lawful instead of what is unlawful.",
    tags: ["provision", "debt", "livelihood"]
  },
  // 23
  {
    title: "Dua for Ease in Task",
    arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلاً",
    transliteration: "Allāhumma lā sahlā illā mā jaʿaltahu sahlā",
    translation: "O Allah, there is no ease except what You make easy.",
    tags: ["ease", "task"]
  },
  // 24
  {
    title: "Dua for Healing (short)",
    arabic: "أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ",
    transliteration: "Adhhibil-ba'sa rabban-nās",
    translation: "Remove the harm, O Lord of the people.",
    tags: ["healing", "sickness"]
  },
  // 25
  {
    title: "Dua for Children",
    arabic: "رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً",
    transliteration: "Rabbi hab lī min ladunka dhurriyyatan ṭayyibatan",
    translation: "My Lord, grant me from Yourself righteous offspring.",
    tags: ["children", "family", "prayer"]
  },
  // 26
  {
    title: "Dua When in Difficulty",
    arabic: "لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration: "Lā ilāha illā anta subḥānaka innī kuntu mina ẓ-ẓālimīn",
    translation: "There is no god but You; glory be to You, I was indeed among the wrongdoers.",
    tags: ["distress", "repentance"]
  },
  // 27
  {
    title: "Dua for Travel",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
    transliteration: "Subḥānalla dhī sakhkhara lanā hādhā",
    translation: "Glory be to the One Who has subjected this (means of travel) to us.",
    tags: ["travel", "gratitude"]
  },
  // 28
  {
    title: "Dua for Gratitude",
    arabic: "اللَّهُمَّ لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ",
    transliteration: "Allāhumma laka al-ḥamdu kamā yanbaghī lijalāli wajhika",
    translation: "O Allah, to You is due all praise as befits Your Majesty.",
    tags: ["gratitude", "praise"]
  },
  // 29
  {
    title: "Dua for Protection from Evil Eye",
    arabic: "أَعُوذُ بِعَوْنِ اللَّهِ",
    transliteration: "Aʿūdhu biʿawni llāh",
    translation: "I seek refuge in the help of Allah.",
    tags: ["protection", "evil-eye"]
  },
  // 30
  {
    title: "Dua for Beginning Work",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
    transliteration: "Bismillāh tawakkaltu ʿalallāh",
    translation: "In the name of Allah; I put my trust in Allah.",
    tags: ["begin", "work", "reliance"]
  },
  // 31
  {
    title: "Dua for Parents (comprehensive)",
    arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ",
    transliteration: "Rabbi ighfir lī wa liwālidayya wa lilmu’minīn",
    translation: "My Lord, forgive me and my parents and the believers.",
    tags: ["parents", "forgiveness"]
  },
  // 32
  {
    title: "Dua for Mercy",
    arabic: "رَبِّ ارْحَمْنِي",
    transliteration: "Rabbi irḥamnī",
    translation: "My Lord, have mercy on me.",
    tags: ["mercy", "short"]
  },
  // 33
  {
    title: "Dua for Humility",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ التَّوْفِيقَ",
    transliteration: "Allāhumma innī as'aluka at-tawfīq",
    translation: "O Allah, I ask You for success (right guidance and opening).",
    tags: ["guidance", "success"]
  },
  // 34
  {
    title: "Dua for Safety",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ البَلَاءِ",
    transliteration: "Allāhumma innī aʿūdhu bika min jahdi al-balā'",
    translation: "O Allah, I seek refuge in You from the hardship of trial.",
    tags: ["protection", "trials"]
  },
  // 35
  {
    title: "Dua at Time of Need",
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي",
    transliteration: "Yā muqallib al-qulūbi thabbit qalbī",
    translation: "O Controller of the hearts, make my heart firm.",
    tags: ["steadfastness", "heart"]
  },
  // 36
  {
    title: "Dua for Courage",
    arabic: "اللَّهُمَّ أَلْهِمْنِي الصَّبْرَ",
    transliteration: "Allāhumma alhimnī aṣ-ṣabr",
    translation: "O Allah, inspire me with patience.",
    tags: ["patience", "courage"]
  },
  // 37
  {
    title: "Dua for Forgiveness (prophetic)",
    arabic: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ",
    transliteration: "Allāhumma ighfir lī dhanbī kullahu",
    translation: "O Allah, forgive all my sins.",
    tags: ["forgiveness", "prophetic"]
  },
  // 38
  {
    title: "Dua for Steadfast Faith",
    arabic: "رَبَّنَا ءَامَنَّا",
    transliteration: "Rabbana āmannā",
    translation: "Our Lord, we have believed.",
    tags: ["faith", "collective"]
  },
  // 39
  {
    title: "Dua for Guidance & Mercy",
    arabic: "رَبَّنَا تَقَبَّلْ مِنَّا",
    transliteration: "Rabbana taqabbal minnā",
    translation: "Our Lord, accept [this] from us.",
    tags: ["acceptance", "worship"]
  },
  // 40
  {
    title: "Dua for Prevention of Sin",
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ",
    transliteration: "Allāhumma ijʿalnī min at-tawwābīn",
    translation: "O Allah, make me among those who repent.",
    tags: ["repentance", "purity"]
  },
  // 41
  {
    title: "Dua for Safe Return",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ سَلامَةً فِي رِحْلَتِي",
    transliteration: "Allāhumma innī as'aluka salāmatan fī riḥlatī",
    translation: "O Allah, I ask You for safety on my journey.",
    tags: ["travel", "safety"]
  },
  // 42
  {
    title: "Dua for Ease in Memorization",
    arabic: "اللَّهُمَّ يَسِّرْ لِي وَأَلْهِمْنِي",
    transliteration: "Allāhumma yassir lī wa alhimnī",
    translation: "O Allah, make it easy for me and inspire me.",
    tags: ["study", "memorization"]
  },
  // 43
  {
    title: "Dua for Removing Fear",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخَوْفِ",
    transliteration: "Allāhumma innī aʿūdhu bika min al-khawf",
    translation: "O Allah, I seek refuge in You from fear.",
    tags: ["fear", "protection"]
  },
  // 44
  {
    title: "Dua for Asking Good from Allah",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْآنِ وَالْآخِرَةِ",
    transliteration: "Allāhumma innī as'aluka khayra al-ān wa al-ākhirah",
    translation: "O Allah, I ask You for the good of this world and the Hereafter.",
    tags: ["general", "wellbeing"]
  },
  // 45
  {
    title: "Dua for Protection of Wealth",
    arabic: "اللَّهُمَّ احْفَظْ مَالِي",
    transliteration: "Allāhumma iḥfaẓ mālī",
    translation: "O Allah, protect my wealth.",
    tags: ["wealth", "protection"]
  },
  // 46
  {
    title: "Dua for Asking Allah's Pleasure",
    arabic: "اللَّهُمَّ رِضَاكَ مَا أَطْلُبُ",
    transliteration: "Allāhumma riḍāka mā aṭlub",
    translation: "O Allah, Your pleasure is what I seek.",
    tags: ["intention", "sincerity"]
  },
  // 47
  {
    title: "Dua in the Morning",
    arabic: "اللَّهُمَّ أَنْتَ خَيْرُ الْحَافِظِينَ",
    transliteration: "Allāhumma anta khayru al-ḥāfiẓīn",
    translation: "O Allah, You are the best Protector.",
    tags: ["morning", "protection"]
  },
  // 48
  {
    title: "Dua for Avoiding Pride",
    arabic: "اللَّهُمَّ اجْعَلْنِي مُتَوَاضِعًا",
    transliteration: "Allāhumma ijʿalnī mutawāḍiʿan",
    translation: "O Allah, make me humble.",
    tags: ["humility", "character"]
  },
  // 49
  {
    title: "Dua for Good End (Husn al-Khatimah)",
    arabic: "اللَّهُمَّ أَحْسِنْ خَتَمَتِي",
    transliteration: "Allāhumma aḥsin khaṭimatī",
    translation: "O Allah, make my ending good.",
    tags: ["end", "afterlife"]
  },
  // 50
  {
    title: "Dua for Protection of Tongue",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ لِسَانٍ مَكْرُوهٍ",
    transliteration: "Allāhumma innī aʿūdhu bika min lisānin makrūhin",
    translation: "O Allah, I seek refuge in You from an unpleasant tongue (speech).",
    tags: ["speech", "character"]
  },
  // 51
  {
    title: "Dua for Removing Hardship",
    arabic: "رَبِّ يَسِّرْ وَلَا تُعَسِّرْ",
    transliteration: "Rabbi yassir wa lā tuʿassir",
    translation: "My Lord, make it easy and do not make it difficult.",
    tags: ["ease", "difficulty"]
  },
  // 52
  {
    title: "Dua for Seeking Forgiveness After Sin",
    arabic: "اللَّهُمَّ إنِّي تَائِبٌ إِلَيْكَ",
    transliteration: "Allāhumma innī tā ibun ilayk",
    translation: "O Allah, I repent to You.",
    tags: ["repentance", "forgiveness"]
  },
  // 53
  {
    title: "Dua for Righteousness",
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الصَّالِحِينَ",
    transliteration: "Allāhumma ijʿalnī mina aṣ-ṣāliḥīn",
    translation: "O Allah, make me among the righteous.",
    tags: ["righteousness", "character"]
  },
  // 54
  {
    title: "Dua for Family Unity",
    arabic: "اللَّهُمَّ وَفِّقْ بَيْنَنَا بِالْخَيْرِ",
    transliteration: "Allāhumma waffiq baynanā bil-khayr",
    translation: "O Allah, unite us in goodness.",
    tags: ["family", "unity"]
  },
  // 55
  {
    title: "Dua Before Eating",
    arabic: "بِسْمِ اللَّهِ",
    transliteration: "Bismillāh",
    translation: "In the name of Allah (before eating).",
    tags: ["food", "blessing"]
  },
  // 56
  {
    title: "Dua After Eating",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا",
    transliteration: "Al-ḥamdu lillāh allathee aṭʿamanā",
    translation: "All praise is due to Allah Who fed us.",
    tags: ["food", "gratitude"]
  },
  // 57
  {
    title: "Dua for Repelling Harm",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ",
    transliteration: "Aʿūdhu bikalimāti Allāhi tammah",
    translation: "I seek refuge in the perfect words of Allah.",
    tags: ["protection", "healing"]
  },
  // 58
  {
    title: "Short Morning Remembrance",
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
    transliteration: "Aṣbaḥnā wa aṣbaḥal-mulku lillāh",
    translation: "We have entered the morning and the dominion belongs to Allah.",
    tags: ["morning", "remembrance"]
  },
  // 59
  {
    title: "Dua for Protection from Calamity",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا أَجِدُ",
    transliteration: "Allāhumma innī aʿūdhu bika min sharri mā ajid",
    translation: "O Allah, I seek refuge in You from the evil I find.",
    tags: ["protection", "calamity"]
  },
  // 60
  {
    title: "Dua for Seeking Allah's Help",
    arabic: "اللَّهُمَّ إِنِّي أَسْتَغِيثُ بِكَ",
    transliteration: "Allāhumma innī astaghīthu bika",
    translation: "O Allah, I seek help from You.",
    tags: ["help", "dependence"]
  },
  // 61
  {
    title: "Dua When Feeling Weak",
    arabic: "اللَّهُمَّ قَوِّنِي",
    transliteration: "Allāhumma qawwinī",
    translation: "O Allah, strengthen me.",
    tags: ["strength", "support"]
  },
  // 62
  {
    title: "Dua for Steadfastness in Faith",
    arabic: "اللَّهُمَّ ثَبِّتْ دِينِي",
    transliteration: "Allāhumma thabbit dīnī",
    translation: "O Allah, make my religion firm.",
    tags: ["faith", "steadfastness"]
  },
  // 63
  {
    title: "Dua for Protection of Heart",
    arabic: "اللَّهُمَّ طَهِّرْ قَلْبِي",
    transliteration: "Allāhumma ṭahhir qalbī",
    translation: "O Allah, purify my heart.",
    tags: ["heart", "purity"]
  },
  // 64
  {
    title: "Dua for Forgiving Parents",
    arabic: "رَبِّ اغْفِرْ لِوَالِدَيَّ وَارْحَمْهُمَا",
    transliteration: "Rabbi ighfir liwālidayya warḥamhumā",
    translation: "My Lord, forgive my parents and have mercy on them.",
    tags: ["parents", "mercy"]
  },
  // 65
  {
    title: "Dua for Keeping Away from Sin",
    arabic: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي",
    transliteration: "Allāhumma ihdinī wa saddidnī",
    translation: "O Allah, guide me and make me upright.",
    tags: ["guidance", "uprightness"]
  },
  // 66
  {
    title: "Dua for Protection from Poverty",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ",
    transliteration: "Allāhumma innī aʿūdhu bika min al-faqr",
    translation: "O Allah, I seek refuge in You from poverty.",
    tags: ["provision", "poverty"]
  },
  // 67
  {
    title: "Dua for Protection from Sins",
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    transliteration: "Allāhumma ijʿalnī mina al-mutatahhirīn",
    translation: "O Allah, make me among those who are purified.",
    tags: ["purity", "repentance"]
  },
  // 68
  {
    title: "Dua for Contentment",
    arabic: "اللَّهُمَّ اجْعَلْنِي قَنِيعًا",
    transliteration: "Allāhumma ijʿalnī qanīʿan",
    translation: "O Allah, make me content.",
    tags: ["contentment", "character"]
  },
  // 69
  {
    title: "Dua for Light in Heart",
    arabic: "اللَّهُمَّ نَوِّرْ قَلْبِي",
    transliteration: "Allāhumma nawwir qalbī",
    translation: "O Allah, illuminate my heart.",
    tags: ["guidance", "spirituality"]
  },
  // 70
  {
    title: "Dua for Avoiding Hastiness",
    arabic: "اللَّهُمَّ اجْعَلْنِي صَبُورًا",
    transliteration: "Allāhumma ijʿalnī ṣabūran",
    translation: "O Allah, make me patient.",
    tags: ["patience", "discipline"]
  },
  // 71
  {
    title: "Dua for Mercy on the Deceased",
    arabic: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ",
    transliteration: "Allāhumma ighfir lahu warḥamhu",
    translation: "O Allah, forgive him and have mercy on him.",
    tags: ["deceased", "mercy"]
  },
  // 72
  {
    title: "Dua for Acceptance of Good Deeds",
    arabic: "اللَّهُمَّ تَقَبَّلْ مِنِّي",
    transliteration: "Allāhumma taqabbal minnī",
    translation: "O Allah, accept from me.",
    tags: ["acceptance", "worship"]
  },
  // 73
  {
    title: "Dua for Removal of Trials",
    arabic: "اللَّهُمَّ أَجِرْنِي مِنْ فِتْنَةِ الدُّنْيَا",
    transliteration: "Allāhumma ajirnī min fitnati ad-dunyā",
    translation: "O Allah, protect me from the trial of this world.",
    tags: ["trial", "protection"]
  },
  // 74
  {
    title: "Dua for Blessing in Time",
    arabic: "اللَّهُمَّ بَارِكْ لِي فِي وَقْتِي",
    transliteration: "Allāhumma bārik lī fī waqtī",
    translation: "O Allah, bless my time.",
    tags: ["time", "barakah"]
  },
  // 75
  {
    title: "Dua for Repelling Evil",
    arabic: "اللَّهُمَّ احْفَظْنِي مِنْ كُلِّ شَرٍّ",
    transliteration: "Allāhumma iḥfaẓnī min kulli sharr",
    translation: "O Allah, protect me from every evil.",
    tags: ["protection", "evil"]
  },
  // 76
  {
    title: "Dua Before Exam / Test",
    arabic: "اللَّهُمَّ يَسِّرْ عَلَيَّ وَافْهَمْنِي",
    transliteration: "Allāhumma yassir ʿalayya wafhamnī",
    translation: "O Allah, make things easy for me and grant me understanding.",
    tags: ["study", "exam"]
  },
  // 77
  {
    title: "Dua for Sound Sleep",
    arabic: "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
    transliteration: "Allāhumma bismika amūtu wa aḥyā",
    translation: "O Allah, in Your name I die and I live (sleep & wake).",
    tags: ["sleep", "protection"]
  },
  // 78
  {
    title: "Dua for Avoiding Bad Company",
    arabic: "اللَّهُمَّ أَنْقِذْنِي مِنَ السُّوءَ",
    transliteration: "Allāhumma anqiḏnī mina as-sū'",
    translation: "O Allah, deliver me from evil (bad company).",
    tags: ["company", "protection"]
  },
  // 79
  {
    title: "Dua of the Traveler",
    arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
    transliteration: "Subḥānalla dhī sakhkhara lanā hādhā",
    translation: "Glory be to the One Who subjected this for us (traveler's praise).",
    tags: ["travel", "gratitude"]
  },
  // 80
  {
    title: "Dua for All Matters",
    arabic: "رَبِّ يَسِّرْ أَمْرِي",
    transliteration: "Rabbi yassir amrī",
    translation: "My Lord, make my matter easy.",
    tags: ["ease", "general"]
  },
  // 81
  {
    title: "Dua for Sincerity",
    arabic: "اللَّهُمَّ اجْعَلْ خَالِصًا لِوَجْهِكَ",
    transliteration: "Allāhumma ijʿal khāliṣan liwajhika",
    translation: "O Allah, make it sincere for Your sake alone.",
    tags: ["sincerity", "intention"]
  },
  // 82
  {
    title: "Dua for Protection from Hypocrisy",
    arabic: "اللَّهُمَّ لاَ تُرِينِي نَفْسِي سُوءًا",
    transliteration: "Allāhumma lā turīnī nafsī su'a",
    translation: "O Allah, do not show me my own badness.",
    tags: ["self-awareness", "protection"]
  },
  // 83
  {
    title: "Dua for Loving Good People",
    arabic: "اللَّهُمَّ أَلْهِمْنِي مَحَبَّتَهُمْ",
    transliteration: "Allāhumma alhimnī maḥabbatahum",
    translation: "O Allah, inspire in me love for them (the righteous).",
    tags: ["love", "companions"]
  },
  // 84
  {
    title: "Dua for Noticing Blessings",
    arabic: "اللَّهُمَّ اعْلَمْنِي نِعَمَكَ",
    transliteration: "Allāhumma aʿlimnī niʿamaka",
    translation: "O Allah, make me aware of Your blessings.",
    tags: ["gratitude", "awareness"]
  },
  // 85
  {
    title: "Dua for Mercy in the Grave",
    arabic: "اللَّهُمَّ اجْعَلْ قَبْرِي رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ",
    transliteration: "Allāhumma ijʿal qabri rawḍatan min riyāḍ al-jannah",
    translation: "O Allah, make my grave a garden from the gardens of Paradise.",
    tags: ["afterlife", "mercy"]
  },
  // 86
  {
    title: "Dua for Steady Steps",
    arabic: "اللَّهُمَّ ثَبِّتْ قَدَمِي",
    transliteration: "Allāhumma thabbit qadami",
    translation: "O Allah, make my steps firm.",
    tags: ["steadfastness", "action"]
  },
  // 87
  {
    title: "Dua for Avoiding Arrogance",
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الْمُتَوَاضِعِينَ",
    transliteration: "Allāhumma ijʿalnī mina al-mutawāḍiʿīn",
    translation: "O Allah, make me among the humble.",
    tags: ["humility", "character"]
  },
  // 88
  {
    title: "Dua for Rightly Guided Speech",
    arabic: "اللَّهُمَّ اجْعَلْ كَلاَمِي طَيِّبًا",
    transliteration: "Allāhumma ijʿal kalāmī ṭayyiban",
    translation: "O Allah, make my speech good.",
    tags: ["speech", "character"]
  },
  // 89
  {
    title: "Dua for Good Company",
    arabic: "اللَّهُمَّ أَدِرْ عَلَيْنَا مَا يُحِبُّكَ",
    transliteration: "Allāhumma adir ʿalaynā mā yuḥibbuka",
    translation: "O Allah, bring to us that which You love.",
    tags: ["guidance", "companionship"]
  },
  // 90
  {
    title: "Dua for Being Among the Grateful",
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الشَّاكِرِينَ",
    transliteration: "Allāhumma ijʿalnī mina ash-shākirīn",
    translation: "O Allah, make me among the grateful.",
    tags: ["gratitude", "character"]
  },
  // 91
  {
    title: "Dua for Upright Provision",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْحَلَالَ",
    transliteration: "Allāhumma innī as'aluka al-ḥalāl",
    translation: "O Allah, I ask You for what is lawful (pure provision).",
    tags: ["provision", "halal"]
  },
  // 92
  {
    title: "Dua for Forgiveness for the Ummah",
    arabic: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا",
    transliteration: "Rabbana ighfir lanā wa li ikhwaninā",
    translation: "Our Lord, forgive us and our brothers.",
    tags: ["ummah", "forgiveness"]
  },
  // 93
  {
    title: "Dua for Not Being a Burden",
    arabic: "اللَّهُمَّ لَا تَجْعَلْنِي عُقْبَى لِلنَّاسِ",
    transliteration: "Allāhumma lā tajʿalnī ʿuqbā linnās",
    translation: "O Allah, do not make me a burden to people.",
    tags: ["humility", "community"]
  },
  // 94
  {
    title: "Dua for Returning to Allah",
    arabic: "اللَّهُمَّ اجْعَلْنِي لَكَ شَكَّارًا",
    transliteration: "Allāhumma ijʿalnī laka shakkāran",
    translation: "O Allah, make me ever grateful to You.",
    tags: ["gratitude", "remembrance"]
  },
  // 95
  {
    title: "Dua for Joy After Hardship",
    arabic: "اللَّهُمَّ بَاشِرْنِي بِخَيْرٍ بَعْدَ الْكَأْبَةِ",
    transliteration: "Allāhumma bāshirnī bikhayr baʿda al-ka'aba",
    translation: "O Allah, grant me good after distress.",
    tags: ["comfort", "relief"]
  },
  // 96
  {
    title: "Dua for Endeavor Acceptance",
    arabic: "اللَّهُمَّ اجْعَلْ عَمَلِي خَالِصًا لَكَ",
    transliteration: "Allāhumma ijʿal ʿamalī khāliṣan laka",
    translation: "O Allah, make my deed sincere for You.",
    tags: ["sincerity", "work"]
  },
  // 97
  {
    title: "Dua for Being Among the Patient",
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الصَّابِرِينَ",
    transliteration: "Allāhumma ijʿalnī mina aṣ-ṣābirīn",
    translation: "O Allah, make me among the patient.",
    tags: ["patience", "steadfastness"]
  },
  // 98
  {
    title: "Dua for Avoiding Despair",
    arabic: "اللَّهُمَّ لَا تُيْأَسْنِي",
    transliteration: "Allāhumma lā tu'yasnī",
    translation: "O Allah, do not let me despair.",
    tags: ["hope", "comfort"]
  },
  // 99
  {
    title: "Dua for Keeping Good Intentions",
    arabic: "اللَّهُمَّ اجْعَلْ قَلْبِي نَقِيًّا",
    transliteration: "Allāhumma ijʿal qalbī naqiyyan",
    translation: "O Allah, make my heart pure.",
    tags: ["intention", "heart"]
  },
  // 100
  {
    title: "Short Dua of Praise",
    arabic: "سُبْحَانَ وَالْحَمْدُ لِلَّهِ",
    transliteration: "Subḥān wa al-ḥamdu lillāh",
    translation: "Glory and praise be to Allah.",
    tags: ["praise", "remembrance"]
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB ✅');

    // Insert many; ordered:false allows continuing on individual errors (e.g., duplicates)
    const res = await Dua.insertMany(duasData, { ordered: false });
    console.log(`Inserted ${res.length} duas ✅`);
  } catch (err) {
    console.error("Error seeding duas ❌", err);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed 🔒");
  }
}

seed();
