const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const a = parseInt(process.argv[2]);
const expression = process.argv[3];
const b = parseInt(process.argv[4]);

if (expression === 'plus') {
  console.log(add(a, b));
} else if (expression === 'minus') {
  console.log(subtract(a, b));
} else if (expression === 'times') {
  console.log(multiply(a, b));
} else if (expression === 'over') {
  console.log(divide(a, b));
}
