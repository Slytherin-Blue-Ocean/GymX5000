DROP DATABASE IF EXISTS gymx5000;
-- create db
CREATE DATABASE gymx5000;

-- use database command
\c gymx5000;

DROP TABLE IF EXISTS user, competition_record, competition;

-- create tables
CREATE TABLE user(
   user_id SERIAL PRIMARY KEY NOT NULL,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   address TEXT NOT NULL,
);


CREATE TABLE activitytype (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50)  NOT NULL,
);


CREATE TABLE competition (
 competition_id SERIAL PRIMARY KEY NOT NULL,
 competition_name VARCHAR(50)  NOT NULL,
 category VARCHAR(50)  NOT NULL,
 start_date VARCHAR(50) NOT NULL,
 end_date VARCHAR(50) NOT NULL,
);

CREATE TABLE competition_record (
   CONSTRAINT fk_user
    FOREIGN KEY(user_id)
     REFERENCES user(user_id),
   CONSTRAINT fk_competition
    FOREIGN KEY(competition_id)
     REFERENCES competition(id),
   record VARCHAR(50) NOT NULL
);

CREATE TABLE exercise (
   exercise_id SERIAL PRIMARY KEY NOT NULL,
   body_category VARCHAR(30) NOT NULL,
   equipment VARCHAR(30) NOT NULL,
   gif_url TEXT NOT NULL,
   exercise_name VARCHAR(50) NOT NULL,
   target_muscle VARCHAR(50) NOT NULL,
);

CREATE TABLE exercise_favorites (
  exercise_fav_id SERIAL PRIMARY KEY NOT NULL,
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
     REFERENCES user(user_id),
  CONSTRAINT fk_exercise
    FOREIGN KEY(exercise_id)
     REFERENCES exercise(exercise_id)
);

CREATE TABLE food (
   food_id SERIAL PRIMARY KEY NOT NULL,
   name TEXT NOT NULL
);

CREATE TABLE food_favorites (
  food_fav_id SERIAL PRIMARY KEY NOT NULL,
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
     REFERENCES user(user_id),
  CONSTRAINT fk_food
    FOREIGN KEY(food_id)
     REFERENCES food(food_id)
);


-- CREATE INDEX ON ;




