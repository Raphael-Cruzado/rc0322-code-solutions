const express = require('express');
const app = express();
const data = require('./data.json');

const dataNotes = data.notes;
let dataNextId = data.nextId;

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const id in dataNotes) {
    dataArray.push(dataNotes[id]);
  }
  res.json(dataArray);
});

app.get('/api/notes/:id/', (req, res) => {
  const id = Number(req.params.id);
  if (!dataNotes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(dataNotes[id]);
  }
});

app.post('/api/notes/', (req, res, err) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a redquired field' });
  } else if (req.body.content !== null) {
    const newData = req.body;
    const id = dataNextId++;
    newData.id = id;
    dataNotes[id] = newData;
    res.status(201).json(newData);
  } else {
    res.status(500).json({ error: 'An unexpected error occured' });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to Port: 3000');
});
