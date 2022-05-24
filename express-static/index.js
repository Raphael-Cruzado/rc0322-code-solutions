const express = require('express');
const path = require('path');
const app = express();

const join = path.join(__dirname, '/public');
const expressStatic = express.static(join);
app.use(expressStatic);

app.listen(3000, () => {
  console.log('listening to Port: 3000');
});
