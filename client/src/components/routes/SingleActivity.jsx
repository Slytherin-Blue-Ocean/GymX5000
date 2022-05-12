import React, { useState, useEffect, useRef } from 'react';
import TempCard from '../subcomponents/TempCard.jsx';
import styled from 'styled-components';
// import ActivityCard from '../subcomponents/ActivityCard.jsx';
const axios = require('axios');
import {useAuth} from '../context/Auth.jsx';
import { useLocation } from 'react-router-dom';

const Divider = styled.div`
  padding: 2em 0;
`;

const SingleActivity = (props) => {
  const { state } = useLocation();
  const { activity } = state;
  const { token } = useAuth();

  let name, image, tags, body, related;
  if (activity.type === 'recipe') {
    const currentId = useRef(null);

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
      if (token) {
        axios.get(`http://localhost:3001/api/v1/recipes/${activity['activity_id']}`, {
          headers: {'Authorization': token}
        })
          .then(({ data }) => {
            currentId.current = activity['activity_id'];
            setRecipe(data[0]);
          })
          .catch((err) => console.error(err));
      }
    }, [token]);

    if (!recipe) {
      return null;
    }

    let ingredients = recipe.ingredients.split('+').map((ingredient) =>
      <div key={ingredient} >{ingredient}</div>
    );
    name = recipe.name;
    image = <img src={recipe.image} alt={recipe.name} />;
    tags = `${recipe.dietlabel}, ${recipe.healthlabel}`;
    body = (
      <div style={{ display: 'flex', direction: 'row', gap: '20%' }}>
        <div>
          <div>Calories: {recipe.calories} kCal for whole meal</div>
          <Divider>
            <div>Nutrition</div>
            <div>{recipe.fat}</div>
            <div>{recipe.carbs}</div>
            <div>{recipe.protein}</div>
            <div>{recipe.fiber}</div>
          </Divider>
        </div>
        <div>
          <div>Here's what you need:</div>
          <div>{ingredients}</div>
          <Divider>
            <div>For instructions, <a href={recipe.url}>click here!</a></div>
          </Divider>
        </div>
      </div>
    );
  }
  if (activity.type === 'class') {
    const currentId = useRef(null);

    const [class_act, setClass] = useState(null);

    // useEffect(() => {
    //   if (token) {
    //     axios.get(`http://localhost:3001/api/v1/classes/${activity['activity_id']}`, {
    //       headers: {'Authorization': token}
    //     })
    //       .then(({ data }) => {
    //         currentId.current = activity['activity_id'];
    //         setClass(data[0]);
    //       })
    //       .catch((err) => console.error(err));
    //   }
    // }, [token]);

    if (!class_act) {
      return null;
    }

    name = class_act.name;
    image = class_act.name;
  }

  return (
    <div className="home">
      <h1 className="welcome">{name}</h1>
      <div className="act-cont">
        {image}
      </div>
      <div className="description">{body}</div>
      <div className="act-tags">Tags: {tags}</div>
      <h4 className="welcome">Similar Activities to Try</h4>
      <div className="card-container">
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
      </div>
    </div>
  );
};

export default SingleActivity;