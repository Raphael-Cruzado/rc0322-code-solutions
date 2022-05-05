const fs = require('fs');

let note = process.argv[2];

fs.writeFile('note.txt', note, err => {
  if (err) {
    throw err;
  } else {
    note = `${note}\n`;
  }
});
