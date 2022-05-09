const fs = require('fs');
const data = require('./data.json');
const input = process.argv[2];

if (input === 'read') {
  console.log(data.notes);
}
