import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, yellow } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import {useAuth} from '../context/Auth.jsx';
import { useNavigate } from 'react-router-dom';

const cardCss = {
  backgroundColor: '#1c1c1c',
  color: '#f8eeec',
  margin: '1vw',
  height: '22em'
};

const activityTags = {
  color: '#f8eeec'
};

const setIcon = (activityType) => {
  switch (activityType) {
  case 'workout':
    return <FitnessCenterIcon />;
    break;
  case 'recipe':
    return <LocalDiningIcon />;
    break;
  case 'class':
    return <SelfImprovementIcon />;
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
  const [favorited, setFavorated] = useState(activity.favorited);
  const title = formatTitle(activity.activity);
  const navigate = useNavigate();

  const handleFavorited = (e) => {
    if (!favorited) {
      axios.post('http://localhost:3001/api/v1/favorite', { id: activity.id }, {
        headers: {'Authorization': token} // add this for authentication
      })
        .then((res) => undefined)
        .catch((err) => console.error(err));
    } else {
      axios.delete(`http://localhost:3001/api/v1/favorites/${activity.id}`, {
        headers: {'Authorization': token} // add this for authentication
      })
        .then((res) => undefined)
        .catch((err) => console.error(err));
    }

    setFavorated(favorited ? 0 : activity.id);
  };

  console.log(activity);

  return (
    <Card style={cardCss} sx={{ width: '22vw' }}>
      <CardHeader
        style={activityTags}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label={activity.activity}>
            {setIcon(activity.type)}
          </Avatar>
        }
        action={
          <CardActions disableSpacing>
            <IconButton onClick={handleFavorited} aria-label="add to favorites">
              { !favorited ? <StarBorderIcon sx={{color: '#aa9208'}} /> : <StarIcon sx={{color: '#aa9208'}} /> }
            </IconButton>
          </CardActions>
        }
        title={title}
        onClick={() => navigate('/singleactivity', { state: {activity: activity} })}
        subheader={ <Typography variant="p:2" >{activity.type}</Typography>}
      />
      <CardMedia
        component="img"
        height="194"
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

export default ActivityCard;
