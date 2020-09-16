require('dotenv').config();
const express = require('express');
const db = require('../database/index');

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
// app.use(express.static(__dirname + '/../public/dist'));

app.get('/api/releases', (req, res) => {
  db.getReleases((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/api/raffles', (req, res) => {
  const { sneakerID } = req.body;
  db.getRafflesBySneakerID(sneakerID, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen((port), () => {
  console.log(`Listening on port ${port}`);
});
