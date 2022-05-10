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

  getfoodfavor: (req, res) => {
    let userid = req.params.userid;
    model.getfoodfavor(userid, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },

  getworkoutfavor: (req, res) => {
    let userid = req.params.userid;
    model.getworkoutfavor(userid, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },

  postfavor: (req, res) => {
    let typeid = req.query.typeid;
    let referenceid = req.query.referenceid;
    let userid = req.query.userid;
    if (typeid === '1') {
      model.postfavorworkout(referenceid, userid, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      });
    } else {
      model.postfavorrecipe(referenceid, userid, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      });
    }
  },
};