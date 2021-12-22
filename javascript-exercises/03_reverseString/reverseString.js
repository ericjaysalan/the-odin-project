const reverseString = function(str) {
  const stringArray = str.split("");
  const arrayLength = stringArray.length;
  const reverseArray = [];
  let lastIndex = arrayLength - 1;
  let reverseString = "";

  for (let index = 0; index < stringArray.length; index++) {
    reverseArray.push(stringArray[lastIndex]);
    lastIndex--;
  }

  reverseArray.forEach(char => reverseString += char);
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
