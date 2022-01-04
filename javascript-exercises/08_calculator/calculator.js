const add = (operand1, operand2) => operand1 + operand2;

const subtract = (operand1, operand2) => operand1 - operand2;

const sum = arr => arr.reduce((sum, currentValue) => (sum += currentValue), 0);

const multiply = arr =>
  arr.reduce((product, currentValue) => (product *= currentValue), 1);

const power = (base, exponent) => Math.pow(base, exponent);

const factorial = function (int) {
  // create an array starting from int up to 1
  // multiply the elements of the array
  const factorial = [];
  for (let num = int; num >= 1; num--) {
    factorial.push(num);
  }

  return multiply(factorial);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
