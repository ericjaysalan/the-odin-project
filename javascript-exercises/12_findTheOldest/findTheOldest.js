const findTheOldest = function (arrOfObj) {
  let oldestObj = {};
  let oldest = 0;

  arrOfObj.forEach((obj) => {
    let death = (obj) => {
      if ('yearOfDeath' in obj) return obj.yearOfDeath;
      else return new Date().getFullYear();
    };

    let birthYear = obj.yearOfBirth;
    let deathYear = death(obj);

    if (deathYear - birthYear > oldest) {
      oldestObj = obj;
      oldest = deathYear - birthYear;
    }
  });

  return oldestObj;
};

// Do not edit below this line
module.exports = findTheOldest;
