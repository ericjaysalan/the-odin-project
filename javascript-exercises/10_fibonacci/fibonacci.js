const fibonacci = function (num) {
  num = Number(num);
  if (num <= 0) return 'OOPS';

  const fibonacciArr = createFibonacci(100);

  return fibonacciArr[num - 1];
};

function createFibonacci(num) {
  const fibonacciArr = [1];
  let firstValue = 0;

  for (let i = 0; i < num; i++) {
    if (i === 0) firstValue = 0;
    else firstValue = fibonacciArr[fibonacciArr.length - 2];

    let secondValue = fibonacciArr[fibonacciArr.length - 1];
    let newValue = firstValue + secondValue;
    fibonacciArr.push(newValue);
  }

  return fibonacciArr;
}
// Do not edit below this line
module.exports = fibonacci;
