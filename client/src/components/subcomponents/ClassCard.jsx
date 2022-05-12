import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Button} from 'react-bootstrap';
import { red, yellow } from '@mui/material/colors';
import {useAuth} from '../context/Auth.jsx';


const cardCss = {
  backgroundColor: '#1c1c1c',
  color: '#f8eeec',
  margin: '1vw',
};

const activityTags = {
  height: '100px',
  color: '#f8eeec',
  fontSize: '15px'
};


const formatTitle = (title) => {
  if (title.length <= 17) {
    return title;
  } else {
    return title.slice(0, 17) + '...';
  }
};

const ClassCard = ({activity}) => {
  const { token } = useAuth();
  console.log('ac', activity);
  console.log('t',token);
  const title = formatTitle(activity.activity);

  const bookclass = (e) => {
    if (activity.favorited === 0) {
      axios.post('http://localhost:3001/api/v1/bookclass', { id: activity.activity_id }, {
        headers: {'Authorization': token}
      })
        .then((res) => {
          alert('Successfully booked!');
          location.reload();
        })
        .catch((err) => console.error(err));
    } else { //cancel
      axios.post('http://localhost:3001/api/v1/cancelclass', { id: activity.activity_id }, {
        headers: {'Authorization': token}
      })
        .then((res) => {
          alert('successfully cancelled');
          location.reload();
        })
        .catch((err) => console.error(err));
    }

  };

  return (
    <Card style={cardCss}>
      <CardHeader
        style={activityTags}
        action={
          <CardActions style={{ padding: '0px' }} disableSpacing>
            <IconButton onClick={bookclass} aria-label="book classes">
              {activity.favorited === 0 ? <Button style={{padding: '0px', marginTop: '10px'}}>Book</Button> :
                <Button style={{padding: '0px', marginTop: '10px'}}>Booked</Button>
              }

            </IconButton>
          </CardActions>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="194px"
        image={activity.thumbnail_url}
        alt="Oops Sorry no Pic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          { activity.tags ? activity.tags.map((tag, index) => <span style={activityTags} key={index}>{`#${tag} `}</span>) : null}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClassCard;
