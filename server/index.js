require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { midCheckAuth } = require('./utils/auth');

//be changed after the route setting?
const exercise = require('./controllers/exercise');
const activity = require('./controllers/activity');

const { authRouter } = require('./routes/auth-routes');
const { router } = require('./routes/routes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use('/api/v1', midCheckAuth);

const port = process.env.PORT || 3001;

app.use('/api', authRouter);
app.use('/api/v1', router);
//-------------------routes here
//---------get
app.get('/activities', (req, res) => {
  activity.getAllActivities(req, res);
});

app.get('/recipes', (req, res) => {
  activity.getallrecipes(req, res);
});

app.get('/recipes/:foodId', (req, res) => {
  activity.getrecipes(req, res);
});

app.get('/workout', (req, res) => {
  exercise.getallworkout(req, res);
});

app.get('/workout/:workoutId', (req, res) => {
  exercise.getworkout(req, res);
});

app.get('/competition', (req, res) => {
  activity.getcompetitions(req, res);
});

app.get('/quotes', (req, res) => {
  activity.getquotes(req, res);
});


//------post
app.post('/favorite', (req, res) => {
  activity.postfavor(req, res);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`);
});