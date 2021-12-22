const sumAll = function(firstNum, lastNum) {
  const ERROR = "ERROR";

  if (firstNum < 0 || lastNum < 0) {
    return ERROR;
  } else if (typeof firstNum != "number" || typeof lastNum != "number") {
    return ERROR;
  }

  if (firstNum > lastNum) {
    let temp = firstNum;
    firstNum = lastNum;
    lastNum = temp;
  }

  let sum = 0;

  for (let currentNum = firstNum; currentNum <= lastNum; currentNum++ ) {
    sum += currentNum;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
