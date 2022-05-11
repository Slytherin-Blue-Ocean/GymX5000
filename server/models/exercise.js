const { pool } = require('../utils/db');


const getallworkout = (callback) => {
  pool.query('select id, body_category, equipment, gif_url, exercise_name, target_muscle from exercise')
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const getworkout = (workoutid, callback) => {
  pool.query(`select id, body_category, equipment, gif_url, exercise_name, target_muscle
    From exercise
    WHERE id = ${workoutid};`)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};


module.exports = {
  getallworkout,
  getworkout
};

