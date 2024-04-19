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
    return /^[aeiou]/i.test(str);
};
// console.log(hasVowelStart("ba"))
  
const hasPunctuationEnd = (str) => {
    // negating word characters and space characters 
    return /[^\w\s]$/.test(str);
};

// console.log(hasPunctuationEnd("a."))
  
const hasNothingOrDigits = (str) => {
    return /^(\s*|\d*)$/.test(str);
    // `^`: start of the string.
    // `(\s*|\d+)`: two alternatives enclosed within parentheses:
        // `\s*`: matches zero or more whitespace characters.
        // `|\d*`: matches zero or more digits.
    // `$`: end of the string.
};

// console.log(hasNothingOrDigits("abc"))
  
const hasNoFlippers = (str) => {
    return /^[^BCcDEHIKOoXxl]*$/.test(str);
};
  
const isValidEmail = (str) => {
    // return /^[a-zA-z0-9_.]+@[a-z]+\.[a-z]{2,3}$/.test(str)
        // `/^`: start of string
        //  `[a-zA-z0-9_.]+`: matches one or more any letter (upper or lowercase), digit, underscore, or dot
        // `@`: matches the "@" symbol
        // `[a-z]+`: matches one or more lowercase letters (domain name)
        // `\.`: matches dot before top level domain
        // `[a-z]{2,3}`: consisting of 2 or 3 lowercase letters 
        // `$`: end of string 
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
        // `/^`: start of string
        // `[\w-\.]+`: matches one or more word characters (letters, digits, underscores), hypens, or dots before the @ symbol
        // `@`: matches the "@" symbol
        // `([\w-]+\.)+`: matches one or more groups of word characters and hypens followed by a period 
        // `[\w-]{2,4}`: matches top level domain part of email address
            // `[\w-]`: matches any word character or hyphen
            // `{2, 4}`: specifies preceding character class appear 2-4 times
                // length of TLD to be 2-4 characters 
    // attemtps 
        // return /^\S+@\S+\.\S+$/.test(str);
        // return /^[^%]\S+@\S+\.\S+$/.test(str);
        // return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
};
  
const isValidPhoneNumber = (str) => {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]+[0-9]{3}[-\s\.]+[0-9]{4}$/.test(str);
        // `/^`: start of string
        // `[\+]?`: matches an optional plus sign 
        // `[(]?`: matches an optional opening parenthesis
        // `[0-9]{3}`: matches exactly three digits
        // `[)]?`: matches an optional closing parenthesis
        // `[-\s\.]+`: matches one or more occurrences of a hyphen, whitespace space character, or dot
        // `[0-9]{3}`: matches exactly three digits
        // `[-\s\.]+`: matches one or more occurrences of a hyphen, whitespace space character, or dot
    // need to fix
        // return /^\d{3}|[()]-?\d{3}|-?\d{4}$/.test(str);

};
  
const matchAllNumbers = (str) => {
    const regexp = (/\d+/g);
    return str.match(regexp)||[];
};
  
const matchAllNumbersAsNumbers = (str) => {
    let arr = str.match(/\d+/g) || [];
    return arr.map(Number);
        // converts element of arr of strings to numbers
        // Number is a built in JS function that converts its argument to a number
};
  
const matchAllWords = (str) => {
    return str.match(/[a-zA-Z']+/g) || [];
};
  
const replaceAllNumbers = (str) => {
    let regex = /\d+/g;
    return str.replace(regex, "???"); 
};
  
const fixFileName = (str) => {
    let regex = /\s+/g;
    return str.replace(regex, "_");
};
  
const nameRedacter = (str) => {
    return str.replace(/w+[B-Z^IA]+/g, "REDACTED");
        // `\w+`: matches one or more word characters
        // `[B-Z^IA]+`: matches one or more characters that are either uppercase or not the letters I and A
};
  
const camelToSnakeCase = (str) => {
    callback = ((letter) => `_${letter.toLowerCase()}`);
    return str.replaceAll(/[A-Z]/g, callback);
};
  
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
  