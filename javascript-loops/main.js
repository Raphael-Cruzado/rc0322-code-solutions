/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count < times) {
    repeated += word;
    count += 1;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
    doubled.push(numbers[i]);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  // eslint-disable-next-line no-unreachable-loop
  for (const prop in object) {
    keys.push(prop);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  // eslint-disable-next-line no-unreachable-loop
  for (const prop in object) {
    values.push(object[prop]);
  }
  return values;
}
