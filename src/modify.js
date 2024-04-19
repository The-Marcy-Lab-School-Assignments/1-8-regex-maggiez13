const swapAllCases = (str) => {
  callback = ((letter) => `${letter.toLowerCase()}` ? `${letter.toUpperCase()}`: letter);
  return str.replaceAll(/[a-zA-Z]/g, callback);
};

module.exports = {
  swapAllCases,
};
