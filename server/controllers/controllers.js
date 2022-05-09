const model = require('../models/model');

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
  getallrecipes: (req, res) => {
    model.getallrecipes((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
  getrecipes: (req, res) => {
    let foodid = req.params.foodId;
    model.getrecipes(foodid, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
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