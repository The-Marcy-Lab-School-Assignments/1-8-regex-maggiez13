// tai
const helloWorldRegex = (str) => {
  return /hello world/i.test(str); 
};

const hasAVowel = (str) => {
  return /[aeiou]/gi.test(str);
};

const hasCatsOrDogs = (str) => {
  return /cats|dogs/i.test(str);
};

const hasVowelStart = (str) => {
  return /^a|e|i|o|u/i.test(str);
};

const hasPunctuationEnd = (str) => {
  return /[?.!]$/.test(str);
};

const hasNothingOrDigits = (str) => {
  return /^(\s*|\d*)$/.test(str);
};

const hasNoFlippers = (str) => {
  return /^[^BCcDEHIKOoXxl]*$/.test(str);
};

const isValidEmail = (str) => {
  return /^[a-zA-z0-9_.]+@[a-z]+\.[a-z]{2,3}$/.test(str);
};

const isValidPhoneNumber = (str) => {  
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]+[0-9]{3}[-\s\.]+[0-9]{4}$/.test(str);
};

const matchAllNumbers = (str) => {
  return str.match(/\d+/g) || [];
};

const matchAllNumbersAsNumbers = (str) => {
  let arr = str.match(/\d+/g) || [];
  return arr.map(Number);
};

const matchAllWords = (str) => {
  return str.match(/[a-zA-Z']+/g) || [];
};

const replaceAllNumbers = (str) => {
  return str.replace(/\d+/g, "???"); 
};

const fixFileName = (str) => {
  return str.replace(/\s+/g, "_");
};

const nameRedacter = (str) => {};

const camelToSnakeCase = (str) => {};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
