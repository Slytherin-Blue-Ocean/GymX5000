import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useAuth} from '../context/Auth.jsx';
import styled from 'styled-components';

import TempCard from '../subcomponents/TempCard.jsx';

const Divider = styled.div`
  padding: 75px;
`;

const Exercise = ({ activity }) => {
  const { token } = useAuth();
  const [exercise, setExercise] = useState(null);

  let name, gif, tags, body, related;

  const workoutId = 16;
  useEffect(() => {
    if (token) {
      axios.get(`http://localhost:3001/api/v1/workout/${workoutId}`, {
        headers: {'Authorization': token}
      })
        .then((response) => {
          console.log(response.data);
          const result = response.data[0];
          setExercise({
            category: result.body_category,
            equipment: result.equipment,
            gif_url: result.gif_url,
            exercise_name: result.exercise_name,
            target_muscle: result.target_muscle,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  if (!exercise) {
    return null;
  }

  name = exercise.exercise_name;
  gif = <img src={exercise.gif_url} alt={exercise.exercise_name} />;
  body = (
    <div style={{ display: 'flex', direction: 'row', gap: '20%' }}>
      <Divider>
        <div>Category: {exercise.category}</div>
        <div>Target Muscle: {exercise.target_muscle}</div>
        <div>Required Equipment: {exercise.equipment}</div>
      </Divider>
    </div>
  );

  return (
    <div className="home">
      <h1 className="welcome">{name}</h1>
      <div></div>
      <div className="description" style={{ display: 'flex', direction: 'row' }}>
        {body}
        {gif}
      </div>
      <h4 className="welcome">Similar Exercises to Try</h4>
      <div className="card-container">
        <TempCard />
        <TempCard />
        <TempCard />
      </div>
    </div>
  );
};

export default Exercise;