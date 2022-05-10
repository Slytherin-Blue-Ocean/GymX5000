import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const fakeProps = {
  id: 1,
  activity: 'Fruit Smoothie',
  activity_id: 2,
  type: 'Recipe',
  thumbnail_url: 'https://st2.depositphotos.com/2444995/6950/i/600/depositphotos_69500983-stock-photo-fresh-smoothies.jpg',
  tags: ['healthy', 'fruity', 'poop'],
  favorited: false
};

const cardCss = {
  backgroundColor: '#1c1c1c',
  color: '#f8eeec',
  margin: '1vw',
};

const activityTags = {
  color: '#f8eeec'
};

const setIcon = (ActivityId) => {
  switch (ActivityId) {
  case 1:
    return <FitnessCenterIcon />;
    break;
  case 2:
    return <LocalDiningIcon />;
    break;
  default:
    return '?';
  }
};

const formatTitle = (title) => {
  if (title.length <= 17) {
    return title;
  } else {
    return title.slice(0, 17) + '...';
  }
};

const ActivityCard = function({activity}) {
  const [favorated, setFavorated] = useState(false);
  const title = formatTitle(activity.name);

  return (
    <Card style={cardCss} sx={{ width: '22vw' }}>
      <CardHeader
        style={activityTags}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label={activity.activity}>
            {setIcon(activity.activity_id)}
          </Avatar>
        }
        action={
          <CardActions disableSpacing>
            <IconButton onClick={() => setFavorated(!favorated)} aria-label="add to favorites">
              { !favorated ? <StarBorderIcon /> : <StarIcon /> }
            </IconButton>
          </CardActions>
        }
        title={title}
        subheader={ <Typography variant="p:2" >{activity.type}</Typography>}
      />
      <CardMedia
        component="img"
        height="194"
        image={fakeProps.thumbnail_url}
        alt="Oops Sorry no Pic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          { fakeProps.tags.map((tag, index) => <span style={activityTags} key={index}>{`#${tag} `}</span>)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
