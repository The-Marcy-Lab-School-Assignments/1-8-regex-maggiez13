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

const hasPunctuationEnd = (str) => {};

const hasNothingOrDigits = (str) => {};

const hasNoFlippers = (str) => {};

const isValidEmail = (str) => {};

const isValidPhoneNumber = (str) => {};

const matchAllNumbers = (str) => {};

const matchAllNumbersAsNumbers = (str) => {};

const matchAllWords = (str) => {};

const replaceAllNumbers = (str) => {};

const fixFileName = (str) => {};

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
