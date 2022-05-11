const { pool } = require('../utils/db');


const getAllActivities = (limit, page, callback) => {
  pool.query(`(
      SELECT A.id, A.name As type, exercise.id AS activity_id, exercise.exercise_name AS activity,
	exercise.gif_url AS thumbnail_url, ARRAY[exercise.body_category, exercise.equipment, exercise.target_muscle] as tags,
  coalesce((select DISTINCT(f.activitytype_id) from favorites AS f WHERE exercise.activitytype_id = f.activitytype_id),  0) AS favorited
	FROM exercise
      INNER JOIN activitytype as A ON A.id = exercise.activitytype_id
      AND A.id = exercise.activitytype_id
	group by A.id, exercise.id OFFSET ${page - 1} limit ${limit / 2}
      )
      UNION
      (
        SELECT C.id, C.name As type, A.id As activity_id, A.name AS activity, A.image AS thumbnail_url,
        ARRAY[A.dietlabel, A.healthlabel] as tags,
        coalesce((select DISTINCT(f.activitytype_id) from favorites AS f WHERE A.activitytype_id = f.activitytype_id),  0) AS favorited
        FROM food as A
        INNER JOIN activitytype as C ON C.id = A.activitytype_id
        AND C.id = A.activitytype_id
        group by C.id, A.id OFFSET ${page - 1} limit ${limit / 2}
      )
      UNION
	  (
        SELECT C.id, C.name As type, S.id As activity_id, S.name AS activity, S.image AS thumbnail_url,
        ARRAY[S.category] as tags,
        coalesce((select DISTINCT(f.activitytype_id) from favorites AS f WHERE S.activitytype_id = f.activitytype_id),  0) AS favorited
        FROM classes as S
        INNER JOIN activitytype as C ON C.id = S.activitytype_id
        group by C.id, S.id OFFSET ${page - 1} limit ${limit / 2}
      )
    `)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const getallrecipes = (callback) => {
  pool.query(`select id, name, image, uri, dietlabel, healthlabel, url,
  calories, protein, fat, carbs, fiber, ingredients from food`)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const getrecipes = (foodid, callback) => {
  pool.query(`select id, name, image, uri, dietlabel, healthlabel, url, calories,
  protein, fat, carbs, fiber, ingredients from food
    where id = ${foodid}`)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const getcompetitions = (callback) => {
  pool.query('')
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const getquotes = (callback) => {
  pool.query(`select id, quote
    from quotes ORDER BY random() limit 1`)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const getfavor = (userid, callback) => {
  pool.query(`select DISTINCT(f.id), name, image, dietlabels, healthlabels, url, calories, protein, fat, carbs, fiber
    from food as f
    JOIN food_favorites ON food_favorites.food_id = f.id
    WHERE food_favorites.user_id = ${userid}`)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const postfavor = (activity_id, user_id, callback) => {
  pool.query(`insert into favorites(user_id, activitytype_id)
    values (${user_id}, ${activity_id})`)
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

const deleteFavor = (user_id, activity_id, callback) => {
  pool.query('DELETE FROM favorites WHERE user_id = $1 AND activitytype_id = $2', [user_id, activity_id])
    .then((res) => callback(null, res))
    .catch((err) => callback(err));
};

module.exports = {
  getAllActivities,
  getallrecipes,
  getrecipes,
  getcompetitions,
  getquotes,
  getfavor,
  postfavor,
  deleteFavor
};