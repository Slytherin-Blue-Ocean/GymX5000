import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
const axios = require('axios');

const Divider = styled.div`
  padding: 2em 0;
`;

const RecipeContent = ({ recipeId }) => {
  const currentId = useRef(null);

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${recipeId}`)
      .then(({ data }) => {
        currentId.current = recipeId;
        setRecipe(data[0]);
      })
      .catch((err) => console.error(err));
  }, [recipeId]);

  if (!recipe) {
    return null;
  }

  let ingredients = recipe.ingredients.split('+').map((ingredient) =>
    <div key={ingredient} >{ingredient}</div>
  );
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title className="modal-name">
          <div className="modal-top">
            <div className="modal-top-sub">
              <div className="modal-title">Recipe: {recipe.name}</div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img style={{ height: '30%', width: 'auto', position: 'relative'}}src={recipe.image} alt={recipe.name} />
        <Divider>
          <div>Calories: {recipe.calories} kCal for whole meal</div>
        </Divider>
        <div>{recipe.fat}</div>
        <div>{recipe.carbs}</div>
        <div>{recipe.protein}</div>
        <div>{recipe.fiber}</div>
        <Divider>
          <div>Here's what you need:</div>
          <div>{ingredients}</div>
        </Divider>
        <div>For instructions, <a href={recipe.url}>click here!</a></div>
        <Divider>
          <div>Tags: {recipe.dietlabel}, {recipe.healthlabel}</div>
        </Divider>
      </Modal.Body>
    </div>
  );
};

export default RecipeContent;

