import React from 'react';
import styled from 'styled-components';
import { yellow } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const fakeProps = {
  id: 1,
  activity: 'Fruit Smoothie',
  type: 'Recipe',
  thumbnail_url: 'https://www.pic.com/',
  tags: ['tag', 'low carb', 'keto']
};

const cardColor = (type) => {
  switch (type) {
  case 'Recipe':
    return '#0E92DD';
  case 'Workout':
    return '#EE5454';
  case 'poop':
    return '#964B00';
  default:
    return 'lightgrey';
  }
};

const CardContainer = styled.div`
  width: 11.063rem;
  height: 6.438rem;
  background-color: ${ props => cardColor(props.type) };
`;

const ActivityCard = (props) => {

  const handleCardClick = (e) => {
    console.log('You Clicked the card');
  };

  const handleFavoriteClick = (e) => {
    console.log('The Star Has Been Clicked');
  };

  return (
    <CardContainer onClick={handleCardClick} type={fakeProps.type} background={fakeProps.background}>
      <div>{fakeProps.activity}</div>
      <div>
        {fakeProps.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <StarOutlineIcon sx={{ color: yellow[500] }} />
    </CardContainer>
  );
};

export default ActivityCard;
