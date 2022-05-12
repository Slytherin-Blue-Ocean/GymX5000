import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import Search from '../subcomponents/Search.jsx';
import TempCard from '../subcomponents/TempCard.jsx';
import UserImg from '../subcomponents/UserImg.jsx';
import ActivityCard from '../subcomponents/ActivityCard.jsx';
import Quotes from '../subcomponents/Quotes.jsx';
import {useAuth} from '../context/Auth.jsx';

const filterActivities = (filter, allActivities) => {
  let activityType = (filter === 'Weight-lifting') ? 'workout' : filter.toLowerCase();
  return allActivities.filter((activity) => activity.type === activityType);
};

const createKey = (activity) => {
  return activity.id + activity.activity.slice(0, 5);
};

const Activities = () => {
  const allActivities = useRef([]);
  const [activities, setActivities] = useState([]);
  const { token } = useAuth();
  const handleFilter = (e) => {
    if (e.target.innerText === 'Clear') {
      return getAll();
    }

    let newActivities = filterActivities(e.target.innerText, allActivities.current);
    setActivities(newActivities);
  };

  const getAll = () => {
    if (token) {
      console.log(token);
      axios.get('http://localhost:3001/api/v1/activities', {
        headers: {'Authorization': token}
      })
        .then((res) => {
          allActivities.current = res.data;
          setActivities(res.data);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="home">
      <h1 className="welcome">
        <Quotes />
      </h1>
      <div className="search">
        <Search handleFilter={handleFilter}/>
        <input className="tag-search" placeholder="Search..." />
      </div>
      <div className="card-container">
        { activities.length ? activities.map((activity) => <ActivityCard key={createKey(activity)} activity={activity}/>) : null }
      </div>
    </div>
  );
};

export default Activities;
