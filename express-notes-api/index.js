const express = require('express');
const fs = require('fs');
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
  if (id < 0 || Number.isNaN(id)) {
    res.status(404).json({ error: 'id must be a positive integer' });
  } else if (typeof data.notes[id] === 'undefined') {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(dataNotes[id]);
  }
});

app.post('/api/notes/', (req, res, err) => {
  const content = req.body.content;
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  }

  const newData = {
    id: dataNextId,
    content: content
  };

  dataNotes[newData.id] = newData;
  dataNextId++;

  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occured' });
    } else {
      res.status(201).json(newData);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 1 || Number.isNaN(id)) {
    res.status(404).json({ error: 'id must be a positive integer' });
  } else if (dataNotes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete dataNotes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occured' });
      } else {
        // last part, cannot get HTTPie to output dataNotes[id]
        res.sendStatus(204).json(dataNotes[id]);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res, err) => {
  const id = Number(req.params.id);
  const content = req.body.content;

  if (id < 0 || Number.isNaN(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (content === null) {
    res.status(400).json({ content: 'content is a required field' });
  } else if (!content) {
    res.status(404).json({ error: `cannot find note with id: ${id}` });
  } else {
    dataNotes[id].content = content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'an unexpected error occured' });
      } else {
        res.sendStatus(204).json(dataNotes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to Port: 3000');
});
