import React, { useState, useEffect } from 'react';
import ActivityCard from './ActivityCard.jsx';
import {useAuth} from '../context/Auth.jsx';

const axios = require('axios');

const FavoritesList = (props) => {
  const { token } = useAuth();
  const [activities, setActivites] = useState([]);

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:3001/api/v1/favorite', {
        headers: {'Authorization': token}
      })
        .then(({ data }) => {
          setActivites(data);
        })
        .catch((err) => console.error(err));
    }
  }, [token]);

  if (activities.length < 1) {
    return <div style={{ fontSize: '2em' }}>Add favorites to view them here!</div>;
  }
  return (
    <div>
      {activities.map((activity) =>
        <ActivityCard key={activity.id} activity={activity}/>
      )}
    </div>
  );
};

export default FavoritesList;