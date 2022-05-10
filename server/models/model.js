const { pool } = require('../utils/db');

module.exports = {
  getAllActivities: (limit, page, callback) => {
    pool.query(`(
      SELECT A.id, A.name As type, exercise.id As activity_id, exercise.exercise_name AS activity,
	exercise.gif_url AS thumbnail_url, ARRAY[exercise.body_category, exercise.equipment, exercise.target_muscle] as tags
	FROM exercise
      INNER JOIN activitytype as A ON A.id = exercise.activitytype_id
      AND A.id = exercise.activitytype_id
	group by A.id, exercise.id OFFSET ${page - 1} limit ${limit / 2}
      )
      UNION
      (
        SELECT C.id, C.name As type, A.id  As activity_id, A.name AS activity, A.image AS thumbnail_url,
        ARRAY[A.dietlabel, A.healthlabel] as tags
        FROM food as A
        INNER JOIN activitytype as C ON C.id = A.activitytype_id
        AND C.id = A.activitytype_id
        group by C.id, A.id OFFSET ${page - 1} limit ${limit / 2}
      );
    `)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getallrecipes: (callback) => {
    pool.query('select id,name,image,uri,dietlabel,healthlabel,url,calories,protein,fat,carbs,fiber,ingredients from food')
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getrecipes: (foodid, callback) => {
    pool.query(`select id,name,image,uri,dietlabel,healthlabel,url,calories,protein,fat,carbs,fiber,ingredients
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

  getfoodfavor: (userid, callback) => {
    pool.query(`select DISTINCT(f.id), name, image, dietlabels, healthlabels, url, calories, protein, fat, carbs, fiber
    from food as f
    JOIN food_favorites ON food_favorites.food_id = f.id
    WHERE food_favorites.user_id = ${userid}`)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  getworkoutfavor: (userid, callback) => {
    pool.query(`select DISTINCT(e.id), body_category, equipment, gif_url, exercise_name, target_muscle
    from exercise as e
        JOIN exercise_favorites ON exercise_favorites.exercise_id = e.id
      WHERE exercise_favorites.user_id =  ${userid}`)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  postfavorworkout: (referenceid, userid, callback) => {
    pool.query(`insert into exercise_favorites(user_id, exercise_id)
    values (${userid}, ${referenceid})`)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },

  postfavorrecipe: (referenceid, userid, callback) => {
    pool.query(`insert into food_favorites(user_id, food_id)
    values (${userid}, ${referenceid})`)
      .then((res) => callback(null, res))
      .catch((err) => callback(err));
  },


};
