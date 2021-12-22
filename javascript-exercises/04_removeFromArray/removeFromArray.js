const removeFromArray = function(arr, ...toBeRemoved) {
  for (let index = 0; index < arr.length; index++) {
    let currentElement = arr[index];

    if (checkMatch(currentElement, toBeRemoved)) {
      arr.splice(index, 1);
      index--;
    }
  }

  return arr;
};

function checkMatch(currentElement, arrayToCheckFrom) {
  let result;
  arrayToCheckFrom.forEach(toBeRemovedElement => {
    if (currentElement === toBeRemovedElement) {
      result = true;
    }
  });

  return result;
}

// Do not edit below this line
module.exports = removeFromArray;
