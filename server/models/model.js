const { pool } = require('../utils/db');

module.exports = {
  getAllActivities: (limit, page, callback) => {
    pool.query(`select a.id, a.name as type, e.exercise_name as activity, e.gif_url as thumbnail_url, a.tags
    from activitytype as a JOIN exercise as e on a.id = e.activitytype_id
    ORDER BY a.id asc
    OFFSET ${page - 1} limit ${limit};`)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getrecipes: (callback) => {
    pool.query(``)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getworkout: (workoutid, callback) => {
    pool.query(`select id, body_category, equipment, gif_url, exercise_name, target_muscle
    From exercise
    WHERE id = ${workoutid};`)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getcompetitions: (callback) => {
    pool.query(``)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getquotes: (callback) => {
    pool.query(`select id, quote
    from quotes ORDER BY random() limit 1`)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },
};
