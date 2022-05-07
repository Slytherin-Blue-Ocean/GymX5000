require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const controller = require('./controllers');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = process.env.PORT || 3000;


//-------------------routes here
app.get('/activities', (req, res) => {
  // pass req.query to controller
  controller.getAllActivities(req, res);
});


app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`);
});