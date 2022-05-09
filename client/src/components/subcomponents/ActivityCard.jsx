import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
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

const cardCss = {
  backgroundColor: '#1c1c1c',
  color: '#f8eeec',
  margin: '1vw'
};

const activityTags = {
  color: '#f8eeec'
};

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

const ActivityCard = function() {
  const [modalShow, setModalShow] = useState(false);
  const [favorated, setFavorated] = useState(fakeProps.favorated);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={cardCss} sx={{ maxWidth: 345 }}>
      <CardHeader
        style={activityTags}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label={fakeProps.activity}>
            <LocalDiningIcon />
          </Avatar>
        }
        action={
          <CardActions disableSpacing>
            <IconButton onClick={() => setFavorated(!favorated)} aria-label="add to favorites">
              { !favorated ? <StarBorderIcon /> : <StarIcon /> }
            </IconButton>
          </CardActions>
        }
        title={fakeProps.activity}
        subheader={ <Typography variant="p:2" >Recipe</Typography>}
      />
      <CardMedia
        component="img"
        height="194"
        image={fakeProps.thumbnail_url}
        alt="Picture"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          { fakeProps.tags.map((tag) => <span style={activityTags} key={fakeProps.id}>{`#${tag} `}</span>)}
        </Typography>
        <ModalDisplay show={modalShow} onHide={() => setModalShow(false)}/>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
