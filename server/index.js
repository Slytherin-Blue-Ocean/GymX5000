require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const controller = require('./controllers');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = process.env.PORT || 3001;


//-------------------routes here
app.get('/activities', (req, res) => {
  // pass req.query to controller
  controller.getAllActivities(req, res);
});

app.get('/recipes', (req, res) => {
  // pass req.query to controller
  controller.getrecipes(req, res);
});

app.get('/workout/:workoutId', (req, res) => {
  // pass req.query to controller
  controller.getworkout(req, res);
});

app.get('/competition', (req, res) => {
  // pass req.query to controller
  controller.getcompetitions(req, res);
});

app.get('/quotes', (req, res) => {
  // pass req.query to controller
  controller.getquotes(req, res);
});


app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`);
});