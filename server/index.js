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

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`);
});