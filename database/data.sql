-- the command for excuting sql file
-- sudo psql -U postgres -d gymx5000 -f database/data.sql

DROP DATABASE IF EXISTS gymx5000;
-- create db
CREATE DATABASE gymx5000;

-- use database command
\c gymx5000;

DROP TABLE IF EXISTS users, competition_record, competition, activitytype, exercise, exercise_favorites, food, food_favorites,quotes;


-- create tables
CREATE TABLE users (
   id SERIAL PRIMARY KEY NOT NULL,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL,
   address TEXT NOT NULL
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
 end_date VARCHAR(50) NOT NULL
);


CREATE TABLE competition_related (
 id SERIAL PRIMARY KEY NOT NULL,
 competition_id INT NOT NULL,
 activitytype_id INT NOT NULL,
 FOREIGN KEY(competition_id) REFERENCES competition(id),
 FOREIGN KEY(activitytype_id) REFERENCES activitytype(id)

);

CREATE TABLE competition_record (
  id SERIAL PRIMARY KEY NOT NULL,
  record VARCHAR(50) NOT NULL,
  user_id INT NOT NULL,
  competition_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(competition_id) REFERENCES competition(id)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  activitytype_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(activitytype_id) REFERENCES activitytype(id)
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

CREATE TABLE food (
   id SERIAL PRIMARY KEY NOT NULL,
   name TEXT NOT NULL,
   image TEXT,
   uri TEXT NOT NULL,
   dietLabel TEXT NOT NULL,
   healthLabel TEXT NOT NULL,
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


CREATE TABLE quotes (
  id SERIAL PRIMARY KEY NOT NULL,
  quote TEXT NOT NULL
);

CREATE TABLE friends (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT NOT NULL,
  friends_id INT NOT NULL,
  status VARCHAR(65) NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(friends_id) REFERENCES users(id)
);

CREATE TABLE classes (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NO NULL,
  start_date VARCHAR(50) NOT NULL,
  end_date VARCHAR(50) NOT NULL,
  category TEXT NO NULL,
  status TEXT NO NULL,
  activitytype_id INT NOT NULL,
  FOREIGN KEY (activitytype_id) REFERENCES activitytype(id)
);

CREATE TABLE classes_record(
  id SERIAL PRIMARY KEY NOT NULL,
  class_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(class_id) REFERENCES classes(id),
);

-- CREATE INDEX ON ;




