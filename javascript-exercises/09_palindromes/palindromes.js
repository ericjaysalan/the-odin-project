const palindromes = function (str) {
  let lettersOnlyStr = str.replace(/\W/g, '').toLowerCase();
  const reverseString = str => str.split('').reverse().join('');

  return lettersOnlyStr === reverseString(lettersOnlyStr) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
