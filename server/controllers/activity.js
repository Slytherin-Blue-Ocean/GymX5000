const model = require('../models/activity');

module.exports = {
  getAllActivities: (req, res) => {
    let limit = req.query.limit || 80;
    let page = req.query.page || 1;

    model.getAllActivities(limit, page, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },

  getallrecipes: (req, res) => {
    model.getallrecipes((err, data) => {
      if (err) {
        console.error(err);
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
        console.error(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
  getcompetitions: (req, res) => {
    model.getcompetitions((err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  getquotes: (req, res) => {
    model.getquotes((err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },

  getfavor: (req, res) => {
    let userid = req.userId;
    model.getfavor(userid, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },

  postfavor: (req, res) => {
    let activity_id = req.body.id;
    let user_id = req.userId;

    model.postfavor(activity_id, user_id, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};

