/* exported countdown */
function countdown(number) {
  var count = [];
  for (let i = number; i > -1; i--) {
    count.push(i);
  }
  return count;
}
