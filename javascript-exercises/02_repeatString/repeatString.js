const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  }

  let resultString = "";
  for (let counter = 0; counter < num; counter++) {
    resultString += string;
  }

  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
