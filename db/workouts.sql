CREATE TABLE IF NOT EXISTS workouts (
  id INT PRIMARY KEY NOT NULL UNIQUE,
  name TEXT,
  equipment TEXT,
  gifUrl TEXT,
  target TEXT
);

--etl script
COPY workouts FROM './home/brc/GymX5000/dbsource/workouts.csv' DELIMITER ',' CSV HEADER;