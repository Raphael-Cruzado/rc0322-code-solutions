const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', (err, text) => {
  if (err) {
    console.log(err);
  } else {
    console.log(text);
  }
});
