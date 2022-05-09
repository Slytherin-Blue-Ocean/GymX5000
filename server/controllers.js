const model = require('./model');

module.exports = {
  getAllActivities: (req, res) => {
    let limit = req.query.limit || 100;
    let page = req.query.page || 1;

    model.getAllActivities(limit, page, (err, data) => {
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
  getquotes: (req, res) => {
    model.getquotes((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },


};