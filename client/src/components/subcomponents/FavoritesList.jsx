import React, { useState, useEffect } from 'react';
import ActivityCard from './ActivityCard.jsx';

const axios = require('axios');

const FavoritesList = (props) => {
// props should contain user id, but server auth router should handle that already
  // make request to favorites for current user id
  // update state with list of favorites
  // return state mapped into cards
  const [activities, setActivites] = useState([]);

  useEffect(() => {
    axios.get('/favorites')
      .then(({ data }) => {
        console.log(data);
        // setActivites(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (activities.length < 1) {
    return <div style={{ fontSize: '2em' }}>Add favorites to view them here!</div>;
  }
  return (
    <div>
      {activities.map((activity) =>
        <ActivityCard activity={activity}/>
      )}
    </div>
  );
};

export default FavoritesList;