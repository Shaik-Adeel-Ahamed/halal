require('dotenv').config();
const mongoose = require('mongoose');
const Dua = require('./models/Dua');
const Sunnah = require('./models/Sunnah');
const Emotional = require('./models/Emotional');
const Sura = require('./models/Sura');
const Hadith = require('./models/Hadith');


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/islamic_site';


async function seeds(){


try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB ✅');
    const surasData = [
  {
    number: 1,
    name: 'Al‑Fatiha',
    uses: [
      {
        when: 'In every rak‘ah of Salah',
        benefit: 'Essential for prayer; without it prayer is invalid', 
        times: 'Every rak‘ah'  // it must be recited each rak‘ah
      },
      {
        when: 'As ruqyah / for healing',
        benefit: 'Used as a cure; spiritual healing', 
        times: 'As needed'
      }
    ],
    shortDescription: 'The Opening. Summary of praise, supplication, and guidance.'
  },
  {
    number: 2,
    name: 'Al‑Baqarah',
    uses: [
      {
        when: 'Daily / regular recitation',
        benefit: 'Protection; intercession; wards off Shaytan (especially reciting Āyat al-Kursī, last two verses)', 
        times: 'Any amount (preferably regularly)'
      },
      {
        when: 'Night recitation / before sleep',
        benefit: 'Blessings and mercy', 
        times: 'Whatever one can'
      }
    ],
    shortDescription: 'The Cow. Includes laws, stories, guidance; “the two bright ones” with Āl-‘Imrān in a hadith. :contentReference[oaicite:0]{index=0}'
  },
  {
    number: 3,
    name: 'Aal‑Imran',
    uses: [
      {
        when: 'Daily / regular recitation',
        benefit: 'Intercession along with Al‑Baqarah on Day of Judgment (in hadith)', 
        times: 'Any amount'
      }
    ],
    shortDescription: 'The Family of Imran. Emphasis on steadfastness, trials, battles.'
  },
  {
    number: 18,
    name: 'Al‑Kahf',
    uses: [
      {
        when: 'Friday (Jumu‘ah day)',
        benefit: 'Light between him and the Ka‘bah until the next Friday; forgiveness of sins', 
        times: 'Once weekly'
      }
    ],
    shortDescription: 'The Cave. Stories of the People of the Cave and trials of faith. :contentReference[oaicite:1]{index=1}'
  },
  {
    number: 67,
    name: 'Al‑Mulk',
    uses: [
      {
        when: 'At night before sleep',
        benefit: 'Protection from the punishment of the grave; intercession for the reciter', 
        times: 'Once every night'
      }
    ],
    shortDescription: 'The Sovereignty. 30 verses; intercedes for one who recites it nightly. :contentReference[oaicite:2]{index=2}'
  },
  {
    number: 36,
    name: 'Ya‑Sin',
    uses: [
      {
        when: 'Night / when seeking ease',
        benefit: 'Forgiveness of sins; ease at time of death', 
        times: 'Once (traditionally)'
      }
    ],
    shortDescription: 'Called “heart of the Quran.” Emphasizes resurrection, signs, mercy.'
  },
  {
    number: 112,
    name: 'Al‑Ikhlas',
    uses: [
      {
        when: 'Any time / daily recitation',
        benefit: 'Equivalent to one‑third of the Quran in reward', 
        times: 'Whenever recited (per recitation)'
      }
    ],
    shortDescription: 'The Sincerity. Affirms oneness of Allah.'
  },
  // The rest of the 114 surahs with empty uses for you to fill in:
  { number: 4, name: 'An‑Nisa', uses: [{
        when: "When studying family and social law",
        benefit: "Source for guidance on family rights, inheritance, and social ethics",
        times: "During study or legal reflection"
      }], shortDescription: 'Addresses family law, social justice, and protection of rights in the Muslim community.' },
  { number: 5, name: 'Al‑Maʾidah', uses: [{
        when: "When learning about covenants and community law",
        benefit: "Highlights obligations, dietary guidelines, and fulfilling covenants",
        times: "During study or teaching"
      },
      {
        when: "When reflecting on moral responsibilities",
        benefit: "Encourages uprightness and trustworthiness",
        times: "When preparing sermons or lessons"
      }
], shortDescription: 'Focuses on covenants, lawful and unlawful acts, and community ethics.' },
  { number: 6, name: 'Al‑Anʿām', uses: [{
        when: "When reflecting on signs in creation",
        benefit: "Used to contemplate God’s guidance through nature and blessings",
        times: "During study or retreats"
      },
      {
        when: "When seeking arguments for faith",
        benefit: "Provides themes for apologetics and personal conviction",
        times: "As needed in discussion"
      }
], shortDescription: 'Affirms God’s oneness, signs in creation, and rejects idolatry.' },
  { number: 7, name: 'Al‑Aʿrāf', uses: [{
        when: "When studying prophetic stories",
        benefit: "Lessons from earlier communities and their responses to prophets",
        times: "During study or reflection"
      },
      {
        when: "When seeking moral warnings",
        benefit: "Reminds readers of consequences of turning away from guidance",
        times: "Occasionally in sermons"
      }], shortDescription: 'Recounts prophetic stories to warn against arrogance and disobedience.' },
  { number: 8, name: 'Al‑Anfāl', uses: [{
        when: "When studying early Muslim community and battles",
        benefit: "Legal and ethical guidance relating to spoils, peace, and conflict",
        times: "In study circles or classes"
      },
      {
        when: "When reflecting on collective responsibility",
        benefit: "Promotes unity and correct conduct in communal matters",
        times: "As part of thematic study"
      }], shortDescription: 'Deals with battle ethics, unity, and trust in divine guidance.' },
  { number: 9, name: 'At‑Tawbah', uses: [{
        when: "When studying repentance and accountability",
        benefit: "Teaches about repentance, treaties, and sincere commitment",
        times: "During lessons or personal reflection"
      },
      {
        when: "When reviewing leadership responsibilities",
        benefit: "Guides rulers and communities in ethical conduct",
        times: "As required in study"
      }], shortDescription: 'Calls for sincere repentance, accountability, and fulfilling treaties.' },
  { number: 10, name: 'Yūnus', uses: [{
        when: "When reflecting on prophethood and mercy",
        benefit: "Assists in contemplating patience and God’s mercy",
        times: "During study or moments of need"
      },
      {
        when: "When teaching about personal reform",
        benefit: "Encourages turning back to God in hardship",
        times: "In lessons or counseling"
      }], shortDescription: 'Highlights faith, patience, and the mercy of God shown through prophets.' },
  { number: 11, name: 'Hūd', uses: [{
        when: "When studying prophetic patience",
        benefit: "Examples of patience in the face of rejection",
        times: "During study or reflection"
      },
      {
        when: "When preparing sermons about perseverance",
        benefit: "Provides stories and moral lessons",
        times: "As needed"
      }], shortDescription: 'Emphasizes perseverance and divine justice through prophetic examples.' },
  { number: 12, name: 'Yūsuf', uses: [{
        when: "When exploring narrative lessons",
        benefit: "Teaches about patience, trust, and moral integrity",
        times: "During study or storytelling"
      },
      {
        when: "When guiding youth",
        benefit: "Model of moral uprightness and reliance on God",
        times: "In counseling or teaching"

      }], shortDescription: 'Narrates the story of Prophet Yusuf as a lesson in patience and integrity.' },
  { number: 13, name: 'Ar‑Raʿd', uses: [{
        when: "When reflecting on divine signs and storms",
        benefit: "Highlights God’s power and the warning to heed revelation",
        times: "During study"
      },
      {
        when: "When drawing parallels with natural phenomena",
        benefit: "Useful for sermons linking creation and revelation",
        times: "Occasionally"

      }], shortDescription: 'Reflects on natural signs as proofs of divine power and guidance.' },
  { number: 14, name: 'Ibrāhīm', uses: [{
        when: "When remembering prophets and gratitude",
        benefit: "Reminds of Abraham’s prayer and gratitude for provision",
        times: "During reflection and lessons"
      },
      {
        when: "When discussing faith and sacrifice",
        benefit: "Inspires trust and submission to God",
        times: "In sermons or study"
      }], shortDescription: 'Centers on gratitude, prophetic prayer, and steadfast faith.' },
  { number: 15, name: 'Al‑Ḥijr', uses: [{
        when: "When reflecting on past communities",
        benefit: "Warning about arrogance and rejecting guidance",
        times: "During study"
      },
      {
        when: "When seeking reassurance in trials",
        benefit: "Encourages humility and reliance on God",
        times: "When needed"
      }], shortDescription: 'Warns of the fate of past nations and affirms the preservation of revelation.' },
  { number: 16, name: 'An‑Naḥl', uses: [{
        when: "When studying signs in creation",
        benefit: "Highlights blessings and encourages gratitude",
        times: "During study sessions"
      },
      {
        when: "When teaching about providence",
        benefit: "Useful for lessons on sustenance and divine care",
        times: "As needed"

      }], shortDescription: 'Enumerates God’s blessings and calls for gratitude and submission.' },
  { number: 17, name: 'Al‑Isrāʾ', uses: [{
        when: "When reflecting on the Night Journey and moral duties",
        benefit: "Lessons on responsibility toward parents and society",
        times: "During study or sermons"
      },
      {
        when: "When seeking guidance on ethical behavior",
        benefit: "Practical moral guidance for personal conduct",
        times: "As needed"
      }], shortDescription: 'Teaches moral discipline, social duty, and the significance of revelation.' },
  { number: 19, name: 'Maryam', uses: [{
        when: "When reflecting on Mary and prophetic families",
        benefit: "Provides solace and models purity and trust",
        times: "During study or inspiration"
      },
      {
        when: "When seeking comfort for family matters",
        benefit: "Encourages humility and trust in God’s plan",
        times: "As needed"
      }], shortDescription: 'Relates the stories of Mary and prophets, emphasizing faith and purity.' },
  { number: 20, name: 'Ṭā‑Hā', uses: [{
        when: "When studying the story of Moses",
        benefit: "Lessons about mission, compassion, and trust",
        times: "During study"
      },
      {
        when: "When seeking courage to speak truth",
        benefit: "Inspires reliance on God in difficult tasks",
        times: "As needed"

      }], shortDescription: 'Narrates Moses’s mission and offers comfort to the Prophet ﷺ.' },
  { number: 21, name: 'Al‑Anbiyāʾ', uses: [{
        when: "When reflecting on prophets’ lives",
        benefit: "Provides models of patience and prophetic example",
        times: "During study or devotion"
      },
      {
        when: "When teaching about continuity of revelation",
        benefit: "Useful for lectures and comparative reflection",
        times: "As needed"
      
      }], shortDescription: 'Summarizes prophets’ missions and God’s justice in history.' },
  { number: 22, name: 'Al‑Ḥajj', uses: [{
        when: "When learning about pilgrimage and rites",
        benefit: "Guidance about Hajj, communal worship, and humility",
        times: "During study and Hajj preparation"
      },
      {
        when: "When reflecting on sacrifice and submission",
        benefit: "Encourages spiritual readiness for major rites",
        times: "As needed"

      }], shortDescription: 'Discusses pilgrimage, faith, and the unity of worship.' },
  { number: 23, name: 'Al‑Mu’minūn', uses: [{
        when: "When studying characteristics of believers",
        benefit: "Highlights qualities like humility, prayer, and chastity",
        times: "During study or self-assessment"
      },
      {
        when: "When encouraging spiritual discipline",
        benefit: "Used to inspire personal improvement",
        times: "As needed"
      }], shortDescription: 'Describes traits of true believers and the path to success.' },
  { number: 24, name: 'An‑Nūr', uses: [{
        when: "When reflecting on social ethics and modesty",
        benefit: "Guidance on interpersonal conduct and privacy",
        times: "During study or counseling"
      },
      {
        when: "When teaching about moral clarity",
        benefit: "Used in lessons about social justice and chastity",
        times: "As needed"
      }], shortDescription: 'Regulates moral conduct, modesty, and social interactions.' },
  { number: 25, name: 'Al‑Furqān', uses: [{
       when: "When studying guidance between truth and falsehood",
        benefit: "Clarifies criteria for moral discernment",
        times: "During study or reflection"
      },
      {
        when: "When seeking reinforcement of ethical standards",
        benefit: "Reminds of consequences of choices",
        times: "As needed"

      }], shortDescription: 'Defines the Qur’an as the criterion between truth and falsehood.' },
  { number: 26, name: 'Ash‑Shuʿarāʾ', uses: [{
        when: "When reflecting on prophetic narratives",
        benefit: "Lessons from stories of warning and mercy",
        times: "During study"
      },
      {
        when: "When teaching rhetoric and persuasion",
        benefit: "Demonstrates effective communication in conveying truth",
        times: "As appropriate"

      }], shortDescription: 'Recounts prophetic stories highlighting divine mercy and warning.' },
  { number: 27, name: 'An‑Naml', uses: [{
        when: "When reflecting on wisdom and signs",
        benefit: "Focus on miracles and wise leadership",
        times: "During study"
      },
      {
        when: "When exploring themes of gratitude",
        benefit: "Encourages appreciation of blessings",
        times: "As needed"
      }], shortDescription: 'Relates the wisdom of Solomon and other prophets as moral lessons.' },
  { number: 28, name: 'Al‑Qaṣaṣ', uses: [{
        when: "When studying Moses’ life and deliverance",
        benefit: "Stories of resilience and divine assistance",
        times: "During study"
      },
      {
        when: "When seeking inspiration to overcome hardship",
        benefit: "Provides hope and practical patience",
        times: "When needed"
      }], shortDescription: 'Centers on the life of Moses and God’s care for the oppressed.' },
  { number: 29, name: 'Al‑‘Ankabūt', uses: [{
        when: "When reflecting on tests of faith",
        benefit: "Encourages steadfastness and self-examination",
        times: "During study or reflection"
      },
      {
        when: "When counseling others in difficulty",
        benefit: "Helps frame trials as growth opportunities",
        times: "As needed"
      }], shortDescription: 'Encourages perseverance and faith through life’s trials.' },
  { number: 30, name: 'Ar‑Rūm', uses: [{
        when: "When reflecting on historical rise and fall of nations",
        benefit: "Lessons on humility, signs, and the temporary nature of power",
        times: "During study"
      },
      {
        when: "When preparing reflections on current events",
        benefit: "Provides perspective on historical cycles",
        times: "Occasionally"
      }], shortDescription: 'Reflects on the rise and fall of nations as signs of God’s power.' },
      // START FROM HERE
  { number: 31, name: 'Lūqmān', uses: [{
        when: "When teaching about wise counsel",
        benefit: "Contains advice from Luqman on ethics and upbringing",
        times: "During lessons for families"
      },
      {
        when: "When guiding young people",
        benefit: "Practical moral counsel for character building",
        times: "As needed"
      }], shortDescription: 'Features Luqman’s counsel on wisdom, ethics, and gratitude.' },
  { number: 32, name: 'As‑Ṣajdah', uses: [{
        when: "When reflecting on prostration and humility",
        benefit: "Encourages heart-based submission and reflection on resurrection",
        times: "During study or worship"
      },
      {
        when: "When seeking deeper humility in prayer",
        benefit: "Inspires sincere devotion",
        times: "As needed"

      }], shortDescription: 'Encourages reflection, humility, and belief in resurrection.' },
  { number: 33, name: 'Al‑Aḥzāb', uses: [{
        when: "When studying community leadership and family law",
        benefit: "Guidance on social relationships and public conduct",
        times: "During lessons"
      },
      {
        when: "When reflecting on resilience under siege",
        benefit: "Lessons on patience and community solidarity",
        times: "As needed"

      }], shortDescription: 'Outlines community conduct, family rules, and the Prophet’s example.' },
  { number: 34, name: 'Sābah', uses: [{
        when: "When reflecting on gratitude and ingratitude",
        benefit: "Contrasts thankfulness with heedlessness of blessings",
        times: "During study"
      },
      {
        when: "When preparing moral exhortation",
        benefit: "Useful for sermons on gratitude",
        times: "Occasionally"
      }], shortDescription: 'Contrasts gratitude and ingratitude using the story of the people of Sabaʾ.' },
  { number: 35, name: 'Fāṭir', uses: [{
        when: "When reflecting on God as Originator",
        benefit: "Encourages awe and recognition of divine creativity",
        times: "During reflection"
      },
      {
        when: "When discussing providence and gratitude",
        benefit: "Strengthens trust in divine provision",
        times: "As needed"

      }], shortDescription: 'Affirms God as the Creator and sustainer, urging thankfulness.' },
  { number: 37, name: 'As‑Ṣāffāt', uses: [{
        when: "When reflecting on angels and divine order",
        benefit: "Reinforces belief in the unseen and order of creation",
        times: "During study"
      },
      {
        when: "When teaching about prophetic histories",
        benefit: "Stories that comfort and instruct the faithful",
        times: "As needed"
      }], shortDescription: 'Describes ranks of angels and prophetic examples of devotion.' },
  { number: 38, name: 'Ṣād', uses: [{
        when: "When studying prophetic struggles",
        benefit: "Lessons on sincerity, warning, and reform",
        times: "During study"
      },
      {
        when: "When seeking reminders on accountability",
        benefit: "Encourages inner reform",
        times: "As needed"
      }], shortDescription: 'Highlights the trials of prophets and calls for sincere repentance.' },
  { number: 39, name: 'Az‑Zumar', uses: [{
        when: "When reflecting on sincere worship",
        benefit: "Encourages pure devotion and turning wholly to God",
        times: "During study or prayer"
      },
      {
        when: "When seeking reassurance about mercy",
        benefit: "Highlights God’s forgiveness for sincere repenters",
        times: "As needed"
      }], shortDescription: 'Emphasizes pure worship and hope in divine mercy.' },
  { number: 40, name: 'Ghāfir', uses: [{
        when: "When seeking forgiveness",
        benefit: "Themes of divine pardon and mercy",
        times: "During repentance"
      },
      {
        when: "When teaching about humility",
        benefit: "Encourages turning back from pride",
        times: "As needed"

      }], shortDescription: 'Centers on God’s forgiveness and warns against pride.' },
  { number: 41, name: 'Fuṣṣilat', uses: [{
        when: "When reflecting on clear signs",
        benefit: "Emphasizes clarity of revelation and guidance",
        times: "During study"
      },
      {
        when: "When seeking clarity in belief",
        benefit: "Helps resolve doubts and encourage conviction",
        times: "As needed"

      }], shortDescription: 'Presents the clarity of revelation and its impact on hearts.' },
  { number: 42, name: 'Ash‑Shūrā', uses: [{
        when: "When studying counsel and community decision-making",
        benefit: "Encourages consultation and balanced judgment",
        times: "During study or leadership training"
      },
      {
        when: "When reflecting on revelation’s role in society",
        benefit: "Shows how guidance relates to community life",
        times: "As needed"
      }], shortDescription: 'Encourages consultation, unity, and divine justice in leadership.' },
  { number: 43, name: 'Az‑Zukhruf', uses: [{
        when: "When reflecting on worldly adornments",
        benefit: "Warns against being deceived by worldly luxury",
        times: "During study"
      },
      {
        when: "When teaching about priorities",
        benefit: "Emphasizes the value of the Hereafter over transient wealth",
        times: "As needed"

      }], shortDescription: 'Warns against worldly pride and reminds of the eternal truth.' },
  { number: 44, name: 'Adh‑Dhukhan', uses: [{
        when: "When reflecting on warnings and signs",
        benefit: "Encourages readiness and sober reflection",
        times: "During study"
      },
      {
        when: "When teaching about accountability",
        benefit: "Reminds the faithful of consequences of denial",
        times: "Occasionally"

      }], shortDescription: 'Warns of divine punishment and calls to heed revelation.' },
  { number: 45, name: 'Al‑Jāthiyah', uses: [{
        when: "When reflecting on signs and revelation",
        benefit: "Encourages recognition of divine evidence",
        times: "During study"
      },
      {
        when: "When preparing reflective talks",
        benefit: "Material for discussing human response to signs",
        times: "As needed"

      }], shortDescription: 'Highlights God’s signs and human accountability.' },
  { number: 46, name: 'Al‑Aḥqāf', uses: [{
        when: "When reflecting on ancient communities",
        benefit: "Lessons on heedlessness and divine consequence",
        times: "During study"
      },
      {
        when: "When encouraging humility",
        benefit: "Warns against arrogance and disbelief",
        times: "As appropriate"

      }], shortDescription: 'Warns the heedless through examples of past communities.' },
  { number: 47, name: 'Muḥammad', uses: [{
        when: "When studying prophetic leadership",
        benefit: "Guidance on following prophetic example in struggle",
        times: "During lessons"
      },
      {
        when: "When reflecting on truth and accountability",
        benefit: "Reminds of the consequences of accepting or rejecting guidance",
        times: "As needed"
      }], shortDescription: 'Urges steadfastness in faith and following the Prophet’s path.' },
  { number: 48, name: 'Al‑Faṭḥ', uses: [{
        when: "When commemorating treaties and peace",
        benefit: "Reflect on reconciliation and divine facilitation",
        times: "During study or reflection"
      },
      {
        when: "When seeking unity in community",
        benefit: "Used to teach about genuine reconciliation and trust",
        times: "As needed"

      }], shortDescription: 'Celebrates the Treaty of Hudaybiyyah as a victory of peace and faith.' },
  { number: 49, name: 'Al‑Ḥujurāt', uses: [{
        when: "When studying etiquette and social manners",
        benefit: "Instructions for proper behavior among believers",
        times: "In classes or counseling"
      },
      {
        when: "When resolving disputes",
        benefit: "Provides practical ethical guidance for reconciliation",
        times: "As needed"

      }], shortDescription: 'Teaches manners, respect, and unity among believers.' },
  { number: 50, name: 'Qāf', uses: [{
        when: "When reflecting on resurrection themes",
        benefit: "Emphasizes certainty of the afterlife and accountability",
        times: "During study or reminders"
      },
      {
        when: "When seeking to inspire reverence",
        benefit: "Encourages humility before divine majesty",
        times: "Occasionally"
      }], shortDescription: 'Reminds of the resurrection and the certainty of God’s word.' },
  { number: 51, name: 'Aḍh‑Dhāriyāt', uses: [{
        when: "When studying signs in nature",
        benefit: "Use to reflect on God’s provision and the universe",
        times: "During study"
      },
      {
        when: "When teaching about accountability",
        benefit: "Encourages moral responsibility and reflection",
        times: "As appropriate"
      }], shortDescription: 'Reflects on creation, divine purpose, and human accountability.' },
  { number: 52, name: 'Aṭ‑Ṭūr', uses: [{
        when: "When reflecting on signs of the mountain and revelation",
        benefit: "Encourages awe and attentiveness to revelation",
        times: "During reflection"
      },
      {
        when: "When preparing reflections on power and warning",
        benefit: "Use in sermons on accountability",
        times: "Occasionally"

      }], shortDescription: 'Depicts the awe of revelation and consequences of disbelief.' },
  { number: 53, name: 'An‑Najm', uses: [{
        when: "When studying revelation and celestial signs",
        benefit: "Contemplates the relationship between heaven and divine message",
        times: "During study"
      },
      {
        when: "When seeking humility before the divine",
        benefit: "Reminds of human limitations before revelation",
        times: "As needed"

      }], shortDescription: 'Affirms the authenticity of revelation and warns against arrogance.' },
  { number: 54, name: 'Al‑Qamar', uses: [{
        when: "When reflecting on warnings and signs",
        benefit: "Reminds of consequences of ignoring revelation",
        times: "During lessons"
      },
      {
        when: "When teaching about clarity of signs",
        benefit: "Useful for illustrating the manifest nature of divine messages",
        times: "As needed"

      }], shortDescription: 'Warns through past nations’ destruction and calls for reflection.' },
  { number: 55, name: 'Ar‑Raḥmān', uses: [{
        when: "When reflecting on mercy and blessings",
        benefit: "Emphasizes God’s mercy and many favors",
        times: "During study and gratitude practice"
      },
      {
        when: "When teaching about balance between mercy and justice",
        benefit: "Useful for spiritual lessons on compassion",
        times: "Occasionally"

      }], shortDescription: 'Glorifies God’s mercy and blessings, calling for gratitude.' },
  { number: 56, name: 'Al‑Wāqi‘ah', uses: [{
        when: "When reflecting on the Day of Resurrection",
        benefit: "Reminds of eventual accountability and sorting of people",
        times: "During study and reminders"
      },
      {
        when: "When seeking to strengthen awareness of the hereafter",
        benefit: "Encourages good deeds and preparation",
        times: "As needed"
      }], shortDescription: 'Describes the resurrection and ranks of people in the afterlife.' },
  { number: 57, name: 'Al‑Ḥadīd', uses: [{
        when: "When reflecting on faith, charity, and priorities",
        benefit: "Encourages spending in God’s way and prioritizing faith",
        times: "During study or sermons"
      },
      {
        when: "When seeking balance between material and spiritual",
        benefit: "Teaches moderation and detachment",
        times: "As needed"
      }], shortDescription: 'Urges faith, charity, and balance between world and hereafter.' },
  { number: 58, name: 'Al‑Mujādilah', uses: [{
        when: "When studying social disputes and rights",
        benefit: "Guidance on arbitration, rights, and speech",
        times: "During study or counseling"
      },
      {
        when: "When resolving interpersonal conflicts",
        benefit: "Encourages just solutions and fairness",
        times: "As used in mediation"

      }], shortDescription: 'Addresses social disputes, justice, and speech ethics.' },
  { number: 59, name: 'Al‑Hashr', uses: [{
        when: "When reflecting on community and exile",
        benefit: "Lessons from history and reminders to rely on God",
        times: "During study"
      },
      {
        when: "When seeking practical lessons on unity",
        benefit: "Encourages mutual support and accountability",
        times: "As needed"
      }], shortDescription: 'Recounts historical events and emphasizes unity and obedience.' },
  { number: 60, name: 'Al‑Mumtaḥanah', uses: [{
        when: "When studying relations with non-Muslim communities",
        benefit: "Guidance on testing loyalties and maintaining principles",
        times: "During study and guidance sessions"
      },
      {
        when: "When advising on ethical limits",
        benefit: "Clarifies boundaries in social interactions",
        times: "As needed"
      }], shortDescription: 'Guides interactions with non-Muslims and tests of loyalty.' },
  { number: 61, name: 'As‑Ṣaff', uses: [{
        when: "When reflecting on unity and consistent action",
        benefit: "Encourages cohesiveness and sincere action",
        times: "During study or organizational guidance"
      },
      {
        when: "When motivating collective effort",
        benefit: "Used to inspire dedicated action for beneficial causes",
        times: "As needed"

      }], shortDescription: 'Calls for unity, sincerity, and steadfast action in faith.' },
  { number: 62, name: 'Al‑Jumu‘ah', uses: [{
        when: "On Friday (Jumu‘ah) during khutbah and congregation",
        benefit: "Central themes for communal worship and reminder",
        times: "Weekly on Friday"
      },
      {
        when: "When emphasizing the importance of community worship",
        benefit: "Useful for sermons and community guidance",
        times: "Weekly or as needed"

      }], shortDescription: 'Stresses communal worship and Friday remembrance.' },
  { number: 63, name: 'Al‑Munāfiqūn', uses: [{
        when: "When warning about hypocrisy",
        benefit: "Helps identify signs of double-speech and internal reform",
        times: "During study or moral reflection"
      },
      {
        when: "When encouraging sincerity",
        benefit: "Promotes inner-consistency between belief and action",
        times: "As needed"

      }], shortDescription: 'Warns against hypocrisy and calls for sincerity.' },
  { number: 64, name: 'Aṭ‑Taghābun', uses: [{
        when: "When reflecting on loss and gain",
        benefit: "Reminds that true loss is spiritual, encouraging good deeds",
        times: "During study and reflection"
      },
      {
        when: "When teaching about priorities",
        benefit: "Encourages focus on actions that benefit in the hereafter",
        times: "As needed"
      }], shortDescription: 'Explains loss and gain in faith and the afterlife.' },
  { number: 65, name: 'Aṭ‑Ṭalāq', uses: [{
        when: "When studying family law and separation",
        benefit: "Provides guidance on divorce procedures and ethics",
        times: "During legal study and counseling"
      },
      {
        when: "When advising on responsible separation",
        benefit: "Encourages fair treatment and provision during separation",
        times: "As needed in mediation"
      }], shortDescription: 'Provides guidance on divorce and ethical responsibility.' },
  { number: 66, name: 'Aṭ‑Taḥrīm', uses: [{
        when: "When reflecting on family boundaries",
        benefit: "Guidance on household relations and maintaining proper limits",
        times: "During family counseling or study"
      },
      {
        when: "When teaching about repentance and correction",
        benefit: "Encourages making amends where mistakes were made",
        times: "As needed"

      }], shortDescription: 'Advises correction of family matters and repentance.' },
  { number: 68, name: 'Al‑Qalam', uses: [{
       when: "When reflecting on character and moral integrity",
        benefit: "Encourages uprightness and warns against corruption",
        times: "During study"
      },
      {
        when: "When teaching about patience under slander",
        benefit: "Provides consolation for those wronged by falsehood",
        times: "As needed"

      }], shortDescription: 'Defends the Prophet’s character and promotes moral integrity.' },
  { number: 69, name: 'Al‑Ḥāqqah', uses: [{
        when: "When reflecting on the reality of the Hereafter",
        benefit: "Reinforces certainty of the final reality and its consequences",
        times: "During study and reflection"
      },
      {
        when: "When warning against heedlessness",
        benefit: "Encourages immediate moral action",
        times: "As needed"

      }], shortDescription: 'Describes the reality of the Last Day and divine justice.' },
  { number: 70, name: 'Al‑Ma‘ārij', uses: [{
        when: "When reflecting on patience and ultimate reward",
        benefit: "Encourages perseverance and correct attitude toward trials",
        times: "During study"
      },
      {
        when: "When teaching about spiritual discipline",
        benefit: "Useful in lessons on endurance and worship",
        times: "As appropriate"
      }], shortDescription: 'Portrays human impatience and the path of patient endurance.' },
  { number: 71, name: 'Nūḥ', uses: [{
        when: "When reflecting on prophetic perseverance",
        benefit: "Model of dedication to conveying truth despite opposition",
        times: "During study or sermons"
      },
      {
        when: "When seeking inspiration to persist",
        benefit: "Encourages tenacity and reliance on God",
        times: "As needed"
      }], shortDescription: 'Tells of Noah’s perseverance and call to repentance.' },
  { number: 72, name: 'Al‑Jinn', uses: [{
        when: "When reflecting on unseen beings and free will",
        benefit: "Highlights accountability across unseen creation",
        times: "During study"
      },
      {
        when: "When teaching about spiritual vigilance",
        benefit: "Promotes protective practices and awareness",
        times: "As needed"

      }], shortDescription: 'Discusses the jinn and accountability among all beings.' },
  { number: 73, name: 'Al‑Muzzammil', uses: [{
        when: "When emphasizing night worship and devotion",
        benefit: "Encourages night prayer and spiritual discipline",
        times: "During study and practice"
      },
      {
        when: "When seeking to structure devotional routines",
        benefit: "Model for disciplined spiritual practice",
        times: "As part of routine"

      }], shortDescription: 'Encourages night prayer and spiritual preparation.' },
  { number: 74, name: 'Al‑Muddaththir', uses: [{
        when: "When reflecting on prophetic calling",
        benefit: "Encourages urgency in conveying message and moral seriousness",
        times: "During study"
      },
      {
        when: "When seeking reminders of responsibility",
        benefit: "Calls to heed warning and correct course",
        times: "As needed"

      }], shortDescription: 'Calls the Prophet ﷺ to rise and warn with sincerity.' },
  { number: 75, name: 'Al‑Qiyāmah', uses: [{
        when: "When contemplating resurrection and the final hour",
        benefit: "Reinforces urgency of righteous actions",
        times: "During study and reminders"
      },
      {
        when: "When seeking to awaken spiritual seriousness",
        benefit: "Used in exhortation and personal reflection",
        times: "As needed"
      }], shortDescription: 'Describes resurrection and human accountability.' },
  { number: 76, name: 'Al‑Insān', uses: [{
        when: "When reflecting on human nature and gratitude",
        benefit: "Encourages empathy and remembering God’s favors",
        times: "During study or contemplation"
      },
      {
        when: "When discussing charity and care for the needy",
        benefit: "Inspires generosity and compassion",
        times: "As appropriate"
      }], shortDescription: 'Reflects on human creation, gratitude, and charity.' },
  { number: 77, name: 'Al‑Mursalāt', uses: [{
        when: "When reflecting on divine messages and signs",
        benefit: "Emphasizes certainty of revelation and accountability",
        times: "During study"
      },
      {
        when: "When teaching on certainty and warnings",
        benefit: "Useful in sermons on the Day of Reckoning",
        times: "Occasionally"

      }], shortDescription: 'Warns of the Day of Judgment and divine justice.' },
  { number: 78, name: 'An‑Nabaʾ', uses: [{
        when: "When reflecting on the great news (the Resurrection)",
        benefit: "Reinforces awareness of the Hereafter",
        times: "During study and reminders"
      },
      {
        when: "When seeking to motivate ethical action",
        benefit: "Provides impetus to act rightly in light of final accountability",
        times: "As needed"
      }], shortDescription: 'Reminds of the Great News — resurrection and recompense.' },
  { number: 79, name: 'An‑Nāzi‘āt', uses: [{
        when: "When reflecting on dramatic scenes of judgment",
        benefit: "Promotes humility and awareness of divine justice",
        times: "During study and reflection"
      },
      {
        when: "When seeking to shake complacency",
        benefit: "Used to remind of seriousness of the afterlife",
        times: "Occasionally"
      }], shortDescription: 'Depicts judgment scenes and resurrection as certainty.' },
  { number: 80, name: '‘Abasa', uses: [{
        when: "When reflecting on humility and manners",
        benefit: "Teaches correct conduct toward others and humility",
        times: "During study or moral instruction"
      },
      {
        when: "When teaching compassion toward the disadvantaged",
        benefit: "Emphasizes care for all members of society",
        times: "As needed"
      }], shortDescription: 'Teaches humility and compassion toward the weak.' },
  { number: 81, name: 'At‑Takwīr', uses: [{
        when: "When reflecting on cosmic signs",
        benefit: "Reminds of the cataclysmic nature of the end times",
        times: "During study and reminders"
      },
      {
        when: "When seeking to encourage serious reflection",
        benefit: "Helps refocus priorities in life",
        times: "As necessary"
      }], shortDescription: 'Describes cosmic events preceding the end of the world.' },
  { number: 82, name: 'Al‑Infiṭār', uses: [{
        when: "When reflecting on the end timess",
        benefit: "Encourages reflection on death and accountability",
        times: "During study and reminders"
      },
      {
        when: "When teaching about moral urgency",
        benefit: "Motivates corrective action",
        times: "Occasionally"
      }], shortDescription: 'Warns of cosmic upheaval and personal accountability.' },
  { number: 83, name: 'Al‑Muṭaffifīn', uses: [{
        when: "When reflecting on honesty in trade",
        benefit: "Warns against cheating and emphasizes justice",
        times: "In commercial ethics lessons"
      },
      {
        when: "When encouraging integrity",
        benefit: "Useful as a moral reminder for fair dealings",
        times: "As required"
      }], shortDescription: 'Condemns dishonesty in trade and calls for justice.' },
  { number: 84, name: 'Al‑Inshiqāq', uses: [{
        when: "When reflecting on cosmic upheaval",
        benefit: "Prompts humility and readiness for the Last Day",
        times: "During study and reflection"
      },
      {
        when: "When seeking to awaken seriousness",
        benefit: "Encourages immediate moral reflection",
        times: "Occasionally"
      }], shortDescription: 'Depicts the final reckoning and consequences of deeds.' },
  { number: 85, name: 'Al‑Burūj', uses: [{
        when: "When reflecting on witnesses and trials",
        benefit: "Strengthens resolve in persecution and injustice",
        times: "During study or support contexts"
      },
      {
        when: "When honoring perseverance",
        benefit: "Used to encourage patience under hardship",
        times: "As needed"
      }], shortDescription: 'Praises steadfast believers and warns oppressors of judgment.' },


//from here


  { number: 86, name: 'Aṭ‑Ṭāriq', uses: [{
        when: 'Any time / daily recitation',
        benefit: 'It is said that reciting it yields great rewards; some report “for every verse he recites, he will receive the reward of the one who enjoins good and forbids evil.”',
        times: 'Whenever recited'
      }], shortDescription: 'A Meccan surah emphasizing resurrection, the recording of deeds, and the power of Allah’s creation.' },
  { number: 87, name: 'Al‑Aʿlā', uses: [{
        when: 'Witr or in prayer',
        benefit: 'Reported that the Prophet ﷺ used to recite it in Witr. :contentReference[oaicite:1]{index=1}',
        times: 'In the first rakʿah of witr, then other short surahs'
      }], shortDescription: 'A short Surah extolling the glorification of the Most High and reminding of the Hereafter.' },
  { number: 88, name: 'Al‑Ghāshiyah', uses: [{
        when: 'Any time / daily recitation',
        benefit: 'It is narrated that reciting it helps one not face difficulty in accounting of deeds on the Day of Judgment. :contentReference[oaicite:2]{index=2}',
        times: 'Whenever recited'
      }], shortDescription: 'Describes the Day of Recompense and warns disbelievers of its severity.' },
  { number: 89, name: 'Al‑Fajr', uses: [{
        when: 'At dawn / Fajr time',
        benefit: 'Recited especially during Fajr and to remind of trials and resurrection.',
        times: 'During dawn, or as remembered'
      }], shortDescription: 'Named after dawn, it reminds of the trials of past peoples and of Allah’s favors.' },
  { number: 90, name: 'Al‑Balad', uses: [{
        when: 'Any time / daily recitation',
        benefit: 'It is said that one who recites it is safe from the wrath on the Day of Judgment. :contentReference[oaicite:3]{index=3}',
        times: 'Whenever recited'
      }], shortDescription: 'Affirms human struggle, the value of good deeds, and the mercy of Allah.' },
  { number: 91, name: 'Ash‑Shams', uses: [{
        when: 'Any time / reflection recitation',
      benefit: 'Encourages purification of the soul and self-accountability.',
      times: 'Whenever recited'
      }], shortDescription: 'Swears by natural signs to emphasize the success of those who purify their souls.' },
  { number: 92, name: 'Al‑Layl', uses: [{
        when: 'Any time / reflection recitation',
      benefit: 'Reminds believers that their efforts and choices lead to different outcomes.',
      times: 'Whenever recited'
      }], shortDescription: 'Contrasts the generous and the miserly, guiding to righteousness and charity.' },
  { number: 93, name: 'Adh‑Duḥā', uses: [{
        when: 'Times of distress or sadness',
      benefit: 'Brings comfort and reassurance; the Prophet ﷺ was consoled with this surah.',
      times: 'Whenever seeking hope or comfort'
      }], shortDescription: 'Consoles the Prophet ﷺ and assures that Allah has not forsaken him.' },
  { number: 94, name: 'Ash‑Sharḥ', uses: [{
        when: 'During difficulty or stress',
      benefit: 'Reminds that with hardship comes ease.',
      times: 'Whenever seeking encouragement'
      }], shortDescription: 'Encourages patience and hope, promising relief after hardship.' },
  { number: 95, name: 'At‑Ṭīn', uses: [{
        when: 'Any time',
      benefit: 'Highlights the excellence of human creation and the consequences of disbelief.',
      times: 'Whenever recited'
      }], shortDescription: 'Reflects on human creation, moral responsibility, and divine judgment.' },
  { number: 96, name: 'Al‑‘Alaq', uses: [{
        when: 'Any time / reflection',
      benefit: 'The first revelation; encourages reading, knowledge, and humility.',
      times: 'Whenever recited'
      }], shortDescription: 'The first revealed verses, urging reading in the name of Allah, the Creator.' },
  { number: 97, name: 'Al‑Qadr', uses: [{
        when: 'During the last ten nights of Ramadan',
      benefit: 'Reciting it brings immense reward; it speaks about Laylat al-Qadr, better than a thousand months.',
      times: 'Especially in Ramadan nights'
      }], shortDescription: 'Revealed about the Night of Decree, which is better than a thousand months.' },
  { number: 98, name: 'Al‑Bayyinah', uses: [{
        when: 'Any time / reflection recitation',
      benefit: 'Clarifies the message of truth and the difference between believers and disbelievers.',
      times: 'Whenever recited'
      }], shortDescription: 'Explains that a clear proof (the Prophet ﷺ) came to distinguish truth from falsehood.' },
  { number: 99, name: 'Az‑Zalzalah', uses: [{
        when: 'Any time / reflection',
      benefit: 'Reminds of accountability; whoever recites it gains reward of reciting half the Qur’an (per hadith with acceptable strength).',
      times: 'Whenever recited'
      }], shortDescription: 'Describes the final earthquake and the weighing of every deed, small or great.' },
  { number: 100, name: 'Al‑‘Ādiyāt', uses: [{
        when: 'Any time / reflection recitation',
      benefit: 'Warns against ingratitude and attachment to worldly gains.',
      times: 'Whenever recited'
      }], shortDescription: 'Depicts the power and speed of warhorses to highlight human heedlessness.' },
  { number: 101, name: 'Al‑Qāriʿah', uses: [{
        when: 'Any time / reflection on the Day of Judgment',
      benefit: 'Reminds of the great calamity of the Last Day.',
      times: 'Whenever recited'
      }], shortDescription: 'Describes the suddenness and gravity of the Day of Judgment.' },
  { number: 102, name: 'At‑Takāthur', uses: [{
        when: 'Any time',
      benefit: 'Warns against greed and excessive pursuit of worldly possessions.',
      times: 'Whenever recited'
      }], shortDescription: 'Cautions humans about competing for worldly increase until the grave.' },
  { number: 103, name: 'Al‑‘Aṣr', uses: [{
        when: 'Any time / reminder',
      benefit: 'Summarizes the path to salvation: faith, good deeds, truth, and patience.',
      times: 'Whenever recited'
      }], shortDescription: 'Concise surah emphasizing the importance of time, faith, good deeds, and patience.' },
  { number: 104, name: 'Al‑Humazah', uses: [{
        when: 'Any time / reminder',
      benefit: 'Warns against slander, gossip, and hoarding wealth.',
      times: 'Whenever recited'
      }], shortDescription: 'Condemns backbiters and misers, warning them of punishment.' },
  { number: 105, name: 'Al‑Fīl', uses: [{
        when: 'Any time / reflection',
      benefit: 'Reminds of Allah’s protection of the Ka‘bah and His power over aggressors.',
      times: 'Whenever recited'
      }], shortDescription: 'Narrates the story of the People of the Elephant and Allah’s destruction of their army.' },
  { number: 106, name: 'Qurayš', uses: [{
        when: 'Any time / reflection',
      benefit: 'Encourages gratitude for safety, provision, and the blessings of the Ka‘bah.',
      times: 'Whenever recited'
      }], shortDescription: 'Reminds Quraysh to worship the Lord of the Ka‘bah who provides them safety and sustenance.' },
  { number: 107, name: 'Al‑Ma‘ūn', uses: [{
        when: 'Any time',
      benefit: 'Warns against hypocrisy and neglecting the needy.',
      times: 'Whenever recited'
      }], shortDescription: 'Condemns those who neglect prayer and refuse small acts of kindness.' },
  { number: 108, name: 'Al‑Kawthar', uses: [{
        when: 'Any time / in prayer',
      benefit: 'Encourages gratitude; Prophet ﷺ said it refers to a river granted to him in Paradise.',
      times: 'Whenever recited'
      }], shortDescription: 'The shortest surah, promising abundant goodness to the Prophet ﷺ.' },
  { number: 109, name: 'Al‑Kāfirūn', uses: [{
        when: 'Before sleep / in prayer',
      benefit: 'Declares separation from disbelief; Prophet ﷺ recited it before sleeping.',
      times: 'Before sleep or during prayers like Sunnah of Fajr'
      }], shortDescription: 'A declaration of disassociation from disbelief and polytheism.' },
  { number: 110, name: 'An‑Naṣr', uses: [{
        when: 'After victory / reflection',
      benefit: 'Encourages glorifying and seeking forgiveness when success comes.',
      times: 'Whenever reflecting on success'
      }], shortDescription: 'Revealed near the end of the Prophet’s mission, signaling completion and humility.' },
  { number: 111, name: 'Al‑Laḥab', uses: [{
        when: 'Any time / reflection',
      benefit: 'Warns against arrogance and enmity towards the truth.',
      times: 'Whenever recited'
      }], shortDescription: 'Condemns Abu Lahab and his wife for their hostility towards the Prophet ﷺ.' },
  { number: 113, name: 'Al‑Falaq', uses: [{
        when: 'Morning and evening',
      benefit: 'Protection from all forms of external evil.',
      times: 'Recited in morning, evening, and before sleep'
      }], shortDescription: 'Seeks Allah’s protection from the evil of creation, darkness, and envy.' },
  { number: 114, name: 'An‑Nāṣ', uses: [{
        when: 'Morning and evening',
      benefit: 'Protection from internal and unseen evils, especially whispers of Shaytan.',
      times: 'Recited in morning, evening, and before sleep'
      }], shortDescription: 'Seeks refuge in Allah, Lord of mankind, from the whisperings of devils and jinn.' },
];

for (const s of surasData) {
      await Sura.updateOne(
        { number: s.number },
        {
          $set: {
            name: s.name,
            uses: s.uses,
            shortDescription: s.shortDescription
          }
        },
        { upsert: true }
      );
    }

    console.log('All suras seeded/updated.');

  } catch (err) {
    console.error("Error seeding data ❌", err);
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed 🔒");
  }
}

seeds();

