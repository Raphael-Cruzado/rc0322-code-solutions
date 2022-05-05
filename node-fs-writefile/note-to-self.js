const fs = require('fs');

let note = process.argv[2];

fs.writeFile('note.txt', note, err => {
  if (err) {
    console.log(err);
  } else {
    note = `${note}\n`;
  }
});
