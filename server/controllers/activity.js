const model = require('../models/activity');

const getAllActivities = (req, res) => {
  let limit = req.query.limit || 80;
  let page = req.query.page || 1;

  model.getAllActivities(limit, page, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

const getallrecipes = (req, res) => {
  model.getallrecipes((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

const getrecipes = (req, res) => {
  let foodid = req.params.foodId;
  model.getrecipes(foodid, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

const getcompetitions = (req, res) => {
  model.getcompetitions((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const getquotes = (req, res) => {
  model.getquotes((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

const getfavor = (req, res) => {
  let userid = req.userId;
  model.getfavor(userid, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data.rows);
    }
  });
};

const postfavor = (req, res) => {
  let activity_id = req.query.id;
  let user_id = req.userId;
  model.postfavor(activity_id, user_id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};


module.exports = {
  getAllActivities,
  getallrecipes,
  getrecipes,
  getcompetitions,
  getquotes,
  getfavor,
  postfavor
};

