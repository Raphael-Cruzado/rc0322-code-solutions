const express = require('express');
const app = express();

app.listen(3000, () => {
  'Express server is listening on port 3000';
});

app.use((req, res, next) => {
  res.send('Hello World');
});
