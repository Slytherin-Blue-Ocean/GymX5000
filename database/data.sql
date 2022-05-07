DROP DATABASE IF EXISTS gymx5000;
-- create db
CREATE DATABASE gymx5000;

-- use database command
\c gymx5000;

DROP TABLE IF EXISTS user, competition_record, competition, activitytype, exercise, exercise_favorites, food, food_favorites;


-- create tables
CREATE TABLE user (
   user_id SERIAL PRIMARY KEY NOT NULL,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   address TEXT NOT NULL,
);


CREATE TABLE activitytype (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50)  NOT NULL,
  tags TEXT
);

INSERT INTO activitytype VALUES (1, 'workout');
INSERT INTO activitytype VALUES (2, 'recipe');


CREATE TABLE competition (
 competition_id SERIAL PRIMARY KEY NOT NULL,
 competition_name VARCHAR(50) NOT NULL,
 category VARCHAR(50) NOT NULL,
 start_date VARCHAR(50) NOT NULL,
 end_date VARCHAR(50) NOT NULL,
 activitytype_id INT DEFAULT 3,
 CONSTRAINT fk_activity
    FOREIGN KEY (activitytype_id)
     REFERENCES activitytype(id)
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
   exercise_name TEXT NOT NULL,
   target_muscle VARCHAR(50) NOT NULL,
   activitytype_id INT DEFAULT 1,
   CONSTRAINT fk_activity
    FOREIGN KEY (activitytype_id)
     REFERENCES activitytype(id)
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
   name TEXT NOT NULL,
   image TEXT NOT NULL,
   dietLabels TEXT NOT NULL,
   healthLabels TEXT NOT NULL,
   url TEXT NOT NULL,
   calories TEXT NOT NULL,
   protein TEXT NOT NULL,
   fat TEXT NOT NULL,
   carbs TEXT NOT NULL,
   activitytype_id INT DEFAULT 2,
   CONSTRAINT fk_activity
    FOREIGN KEY (activitytype_id)
     REFERENCES activitytype(id)

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

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY NOT NULL,
  quote TEXT NOT NULL
);



-- CREATE INDEX ON ;




