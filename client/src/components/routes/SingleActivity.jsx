import React, { useState, useEffect, useRef } from 'react';
import TempCard from '../subcomponents/TempCard.jsx';
import styled from 'styled-components';
// import ActivityCard from '../subcomponents/ActivityCard.jsx';
const axios = require('axios');
import {useAuth} from '../context/Auth.jsx';

const Divider = styled.div`
  padding: 2em 0;
`;
var test = {
  'id': 1362,
  'type': 'recipe',
  'activity_id': 40,
  'activity': 'Salt-Crusted Beets with Horseradish Crème Fraîche',
  'thumbnail_url': 'http://s3.amazonaws.com/foodpair-2/images/624644/large/241354.jpg?1310569326',
  'tags': [
    'low-fat',
    'paleo'
  ],
  'favorited': 0
};

const SingleActivity = ({ activity }) => {
  const { token } = useAuth();

  let name, image, tags, body, related;
  if (test.type === 'recipe') {
    const currentId = useRef(null);

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
      if (token) {
        axios.get(`http://localhost:3001/api/v1/recipes/${test['activity_id']}`, {
          headers: {'Authorization': token}
        })
          .then(({ data }) => {
            currentId.current = test['activity_id'];
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
  return (
    <div className="home">
      <h1 className="welcome">{name}</h1>
      <div className="act-cont">
        {image}
      </div>
      <div className="description">{body}</div>
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