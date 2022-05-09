require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { midCheckAuth } = require('./utils/auth');
const controller = require('./controllers/controllers');
const { authRouter } = require('./routes/auth-routes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/api/v1', midCheckAuth);

const port = process.env.PORT || 3001;

app.use('/api', authRouter);

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