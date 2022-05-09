const model = require('../models/model');

module.exports = {
  getAllActivities: (req, res) => {
    model.getAllActivities((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
  getrecipes: (req, res) => {
    model.getrecipes((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  getworkout: (req, res) => {
    let workoutid = req.params.workoutId;
    console.log(workoutid);
    model.getworkout(workoutid, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
  getcompetitions: (req, res) => {
    model.getcompetitions((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};