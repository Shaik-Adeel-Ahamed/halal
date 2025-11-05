// utils/normalizeText.js
function normalizeText(str) {
  if (!str) return '';
  return str
    .normalize('NFD') // separate accent marks
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[\u2010-\u2015\u2212\u00AD]/g, '-') // normalize different dashes
    .replace(/ʿ/g, '') // remove Arabic modifier mark
    .toLowerCase()
    .trim();
}

module.exports = normalizeText;
