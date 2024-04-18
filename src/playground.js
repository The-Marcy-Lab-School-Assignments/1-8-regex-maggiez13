const helloWorldRegex = (str) => {
    return /hello world/i.test(str) 
  };
  
//   let str = "Hello world"
//   console.log(helloWorldRegex(str));
  
const hasAVowel = (str) => {
    return /[aeiou]/gi.test(str);
};
// let str = "y"
// console.log(hasAVowel(str));
  
const hasCatsOrDogs = (str) => {
    return /cats|dogs/i.test(str);
};
// str = "I do not care for that dog."
// console.log(hasCatsOrDogs(str));
  
const hasVowelStart = (str) => {
    return /^a|e|i|o|u/i.test(str);
};
// console.log(hasVowelStart("ba"))
  
const hasPunctuationEnd = (str) => {
    // negating word characters and space characters 
    return /[^\w\s]$/.test(str);
};

// console.log(hasPunctuationEnd("a."))
  
const hasNothingOrDigits = (str) => {
    return /^(\s*|\d+)$/.test(str);
    // 
};

console.log(hasNothingOrDigits("abc"))
  
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
  