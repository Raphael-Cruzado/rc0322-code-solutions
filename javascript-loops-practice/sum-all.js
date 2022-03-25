/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  var addAll = [];
  for (let i = 0; i < numbers.length; i++) {
    addAll.push(numbers[i]);
  }
  sum = addAll.reduce((a, b) => a + b, 0);
  return sum;
}
