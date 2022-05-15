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
  const sql = `
  select *
  from "grades"
  returning *
  `;
  const newGrade = req.body;
  db.query(newGrade)
    .then(result => {
      const grade = result.rows;
      grade.push(newGrade);
      console.log(grade);
      res.status(201).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line
      // res.status(400).json({ error: 'invalid input'});
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to PORT: 3000');
});
