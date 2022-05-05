const fs = require('fs');

const randomNum = Math.random();
let data = randomNum.toString();

fs.writeFile('random.txt', data, err => {
  if (err) {
    throw err;
  } else {
    data = (`${data}\n`);
  }
});
