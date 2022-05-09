-- ELT ---
\copy exercise FROM './Data/workout.csv' delimiter ',' csv header;
\copy quotes FROM './Data/arnoldquotes.csv' delimiter ',' csv header;