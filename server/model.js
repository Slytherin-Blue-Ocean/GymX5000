// DB Connection here
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log(result.rows);
  });
});

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
    From exercise
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
