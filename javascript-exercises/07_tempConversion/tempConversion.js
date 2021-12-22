const ftoc = function(fahrenheit) {
  const celsius = (fahrenheit  - 32) / 1.8;
  const rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const ctof = function(celsius) {
  const fahrenheit = (celsius * 1.8) + 32;
  const rounded = Math.round(fahrenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
