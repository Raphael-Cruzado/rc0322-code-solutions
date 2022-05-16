const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use('/api/grades', express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: `${gradeId} must be a positive integer` });
  }

  const sql = `
  select "gradeId",
        "name",
        "course",
        "score",
        "createdAt"
  from "grades"
  where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId": ${gradeId}` });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.post('/api/grades', (req, res) => {
  const content = req.body;
  if (!content.name || !content.course) {
    res.status(400).json({ error: 'name and course are required fields' });
    return;
  }
  const score = Number(content.score);
  if (isNaN(score) || !Number.isInteger(score)) {
    res.status(400).json({});
  } else if (content.score < 1 || content.score > 100) {
    res.status(400).json({ error: '"score" must be 1 - 100' });
  }

  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;
  const params = [content.name, content.course, content.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (isNaN(gradeId) || !Number.isInteger(gradeId)) {
    res.status(400).json({ error: '"gradeId" must be an integer' });
  }
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;
  `;

  // create statuses
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      res.status(200).json(result.rows[0]);
    })
    .catch(err => {
      // eslint-disable-next-line
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to PORT: 3000');
});
