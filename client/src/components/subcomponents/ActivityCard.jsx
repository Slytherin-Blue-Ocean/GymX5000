import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { yellow } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Modal, Button } from 'react-bootstrap';
import ActivityModal from './ActivityModal.jsx';

const fakeProps = {
  id: 1,
  activity: 'Fruit Smoothie',
  type: 'Recipe',
  thumbnail_url: 'https://st2.depositphotos.com/2444995/6950/i/600/depositphotos_69500983-stock-photo-fresh-smoothies.jpg',
  tags: ['healthy', 'fruity', 'poop'],
  favorited: false
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
  display: flex;
  flex-direction: column;
  gap: .7em;
  width: 30%;
  height: 25vh;
  background-color: ${ props => cardColor(props.type) };
  border-radius: 1em;
`;

const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  font-weight: 500;
  margin-left: .4em;
  font-weight: 500;
  cursor: pointer;
  &:hover { color: darkgrey };
`;

const IconStyle = {
  marginRight: '5px',
  cursor: 'pointer'
};

const CardThumbnail = styled.img`
  height: auto;
  width: 4em;
  margin: 0 auto;
`;

const CardTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: .4em;
  justify-content: flex-end;
  &:last-child { margin-right: .7em };
`;

const CardTag = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const ModalDisplay = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-name">
          <div className="modal-top">
            <div className="modal-top-sub">
              <div className="modal-title">Activity Name</div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-image">Activity Image</div>
      </Modal.Body>
      <Modal.Footer>
        <p className="modal-description">
          Description of activity?
        </p>
      </Modal.Footer>
    </Modal>
  );
};

const ActivityCard = (props) => {
  const [favorated, setFavorated] = useState(fakeProps.favorated);
  const [modalShow, setModalShow] = useState(false);

  const handleCardClick = (e) => {
    console.log('You clicked it');
  };

  const handleFavoriteClick = (e) => {
    setFavorated(!favorated);
  };

  return (
    <CardContainer className="temp-card" onClick={handleCardClick} type={fakeProps.type} background={fakeProps.background}>
      <CardHeaderContainer onClick={e => e.stopPropagation()}>
        <CardTitle onClick={ () => setModalShow(true) }>{fakeProps.activity}</CardTitle>
        { !favorated ? <StarOutlineIcon onClick={handleFavoriteClick} style={IconStyle} sx={{ color: yellow[500] }} /> :
          <StarIcon onClick={handleFavoriteClick} style={IconStyle} sx={{ color: yellow[500] }}/>}
      </CardHeaderContainer>
      <CardThumbnail src={fakeProps.thumbnail_url}></CardThumbnail>
      <CardTagsContainer>
        {fakeProps.tags.map((tag) => <CardTag key={tag}>{'#' + tag}</CardTag>)}
      </CardTagsContainer>
      <ModalDisplay show={modalShow} onHide={() => setModalShow(false)}/>
    </CardContainer>
  );
};

export default ActivityCard;
