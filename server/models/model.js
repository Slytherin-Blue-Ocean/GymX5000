const { pool } = require('../utils/db');

module.exports = {
  getAllActivities: (callback) => {
    pool.query(`select a.id, e.exercise_name, a.name, e.gif_url, a.tags
    From activitytype as a
    JOIN exercise as e ON a.id = e.activitytype_id
    WHERE a.id = 1;`)
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
    FROM exercise
    WHERE id = $1;`, [workoutid])
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getcompetitions: (callback) => {
    pool.query(``)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },
};
