/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];
  // eslint-disable-next-line no-unreachable-loop
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
