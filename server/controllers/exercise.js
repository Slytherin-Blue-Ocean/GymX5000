const model = require('../models/exercise.js');

module.exports = {
  getallworkout: (req, res) => {
    model.getallworkout((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
  getworkout: (req, res) => {
    let workoutid = req.params.workoutId;
    model.getworkout(workoutid, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },

};