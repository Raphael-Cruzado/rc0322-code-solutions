/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 !== 0) {
    return false;
  } else {
    return true;
  }
}

function startsWithJ(string) {
  var firstChar = string.split('');
  if (firstChar[0] !== 'J') {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrink(person) {
  var age = person.age;
  if (age < 21 || person < 21) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  var age = person.age;
  if (age < 16 || person < 16) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH < 7 && pH > 0) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute";
  } else {
    return 'Goodnight everybody!';
  }
}
