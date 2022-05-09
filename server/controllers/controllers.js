const { pool } = require('../utils/db');

module.exports = {
  getAllActivities: (limit, page, callback) => {
    pool.query(`(
      SELECT A.id As activity_id, A.name As type, exercise.id AS reference_id, exercise.exercise_name AS name, exercise.gif_url AS thumbnail_url, A.tags FROM exercise
      INNER JOIN activitytype as A ON A.id = exercise.activitytype_id
      AND A.id = exercise.activitytype_id OFFSET ${page - 1} limit ${limit / 2}
      )
      UNION
      (
      SELECT C.id As activity_id, C.name As type, A.ID AS reference_id, A.name AS name, A.image AS thumbnail_url, C.tags FROM food as A
      INNER JOIN activitytype as C ON C.id = A.activitytype_id
      AND C.id = A.activitytype_id OFFSET ${page - 1} limit ${limit / 2}
      );
    `)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getallrecipes: (callback) => {
    pool.query('select id, name, image, dietlabels, healthlabels, url, calories, protein, fat, carbs, fiber from food')
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getrecipes: (foodid, callback) => {
    pool.query(`select id, name, image, dietlabels, healthlabels, url, calories, protein, fat, carbs, fiber
    from food
    where id = ${foodid}`)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getallworkout: (callback) => {
    pool.query(`select id, body_category, equipment, gif_url, exercise_name, target_muscle from exercise`)
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
    pool.query('')
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
