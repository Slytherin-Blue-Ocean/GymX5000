const model = require('./model');

module.exports = {
  getAllActivities: (req, res) => {
    model.getAllActivities((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
};