import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ActivityModal from '../subcomponents/ActivityModal.jsx';

const Exercise = () => {
  const [exercise, setExercise] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/workout/1')
      .then((response) => {
        console.log(response.data);
        const result = response.data[0];
        setExercise({
          category: result.bodyCategory,
          equipment: result.equipment,
          gif_url: result.gif_url.slice(0, result.gif_url.length - 1),
          exercise_name: result.exercise_name,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>Temp Activity Card</div>
      <h2>{exercise.exercise_name}</h2>
      <div>{exercise.category}</div>
      <div>{exercise.equipment}</div>

      <img src={exercise.gif_url} alt={exercise.gif_url} />
      {/* <ActivityModal /> */}
    </div>
  );
};

export default Exercise;
