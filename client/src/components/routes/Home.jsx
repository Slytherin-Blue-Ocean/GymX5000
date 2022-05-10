import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Search from '../subcomponents/Search.jsx';
import TempCard from '../subcomponents/TempCard.jsx';
import UserImg from '../subcomponents/UserImg.jsx';
import ActivityCard from '../subcomponents/ActivityCard.jsx';
import Quotes from '../subcomponents/Quotes.jsx';

import Exercise from '../workoutsDisplay/exercises.jsx';

const filterActivities = (filter, allActivities) => {
  let activityType = (filter === 'Weight-lifting') ? 'workout' : filter.toLowerCase();
  return allActivities.filter((activity) => activity.type === activityType);
};

const createKey = (activity) => {
  return activity.reference_id + activity.name.slice(0, 5);
};

const Home = () => {
  const allActivities = useRef([]);
  const [activities, setActivities] = useState([]);

  const handleFilter = (e) => {
    let newActivities = filterActivities(e.target.innerText, allActivities.current);
    setActivities(newActivities);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/activities')
      .then((res) => {
        allActivities.current = res.data;
        setActivities(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      <h1 className="welcome">
        <Quotes />
      </h1>
      <div className="search">
        <Search handleFilter={handleFilter}/>
      </div>
      <div className="card-container">
        { activities.length ? activities.map((activity) => <ActivityCard key={createKey(activity)} activity={activity}/>) : null }
      </div>
    </div>
  );
};

export default Home;
