-- the command for excuting sql file
-- sudo psql -U postgres -d gymx5000 -f database/d2.sql

DROP DATABASE IF EXISTS gymx5000;
-- create db
CREATE DATABASE gymx5000;

-- use database command
\c gymx5000;

DROP TABLE IF EXISTS users, competition_record, competition, activitytype, exercise, exercise_favorites, food, food_favorites,quotes;

CREATE TABLE users (
   id SERIAL PRIMARY KEY NOT NULL,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   email VARCHAR(50) NOT NULL,
   password VARCHAR(256) NOT NULL,
   address TEXT
);

CREATE TABLE activitytype (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50)  NOT NULL,
  tags TEXT
);

CREATE TABLE competition (
 id SERIAL PRIMARY KEY NOT NULL,
 competition_name VARCHAR(50)  NOT NULL,
 category VARCHAR(50)  NOT NULL,
 start_date VARCHAR(50) NOT NULL,
 end_date VARCHAR(50) NOT NULL,
 activitytype_id INT NOT NULL,
 FOREIGN KEY (activitytype_id) REFERENCES activitytype(id)
);

CREATE TABLE competition_record (
  id SERIAL PRIMARY KEY NOT NULL,
  record VARCHAR(50) NOT NULL,
  user_id INT NOT NULL,
  competition_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(competition_id) REFERENCES competition(id)
);

CREATE TABLE exercise (
   id SERIAL PRIMARY KEY NOT NULL,
   body_category VARCHAR(30) NOT NULL,
   equipment VARCHAR(30) NOT NULL,
   gif_url TEXT NOT NULL,
   exercise_name TEXT NOT NULL,
   target_muscle VARCHAR(50) NOT NULL,
   activitytype_id INT NOT NULL,
   FOREIGN KEY (activitytype_id) REFERENCES activitytype(id)
);

CREATE TABLE exercise_favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  exercise_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(exercise_id) REFERENCES exercise(id)
);

CREATE TABLE food (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  image TEXT NOT NULL,
  dietLabels TEXT NOT NULL,
  healthLabels TEXT NOT NULL,
  url TEXT NOT NULL,
  calories TEXT NOT NULL,
  protein TEXT NOT NULL,
  fat TEXT NOT NULL,
  carbs TEXT NOT NULL,
  fiber TEXT NOT NULL,
  ingredients TEXT NOT NULL,
  activitytype_id INT NOT NULL,
  FOREIGN KEY (activitytype_id) REFERENCES activitytype(id)
);

CREATE TABLE food_favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  food_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(food_id) REFERENCES food(id)
);

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY NOT NULL,
  quote TEXT NOT NULL
);
