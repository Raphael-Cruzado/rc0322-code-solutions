/* exported tail */
function tail(array) {
  var newIndex = [];
  for (let i = 1; i < (array.length); i++) {
    newIndex.push(array[i]);
  }
  return newIndex;
}
