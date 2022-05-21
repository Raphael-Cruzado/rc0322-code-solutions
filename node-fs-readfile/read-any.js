const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, text) => {
  if (err) {
    console.log(err);
  } else {
    console.log(text);
  }
});
