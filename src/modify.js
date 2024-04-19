const swapAllCases = (str) => {
  const callback = ((letter) => /[a-z]/.test(letter) ? letter.toUpperCase(): letter.toLowerCase());
  return str.replaceAll(/[a-zA-Z]/g, callback);
};

module.exports = {
  swapAllCases,
};
