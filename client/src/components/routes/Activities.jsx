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
  let activityType = (filter === 'Workout') ? 'workout' : filter.toLowerCase();
  return allActivities.filter((activity) => activity.type === activityType);
};

const createKey = (activity) => {
  return activity.id + activity.activity.slice(0, 5);
};

const Activities = ({ noQuote }) => {
  const allActivities = useRef([]);
  const filteredActivities = useRef([]);
  const searchBox = useRef(null);
  const quote = useRef(<Quotes />);
  const [activities, setActivities] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('default');
  const { token } = useAuth();

  const handleFilter = (e) => {
    searchBox.current.value = '';
    if (e.target.innerText === 'Clear') {
      filteredActivities.current = allActivities.current;
      return setActivities(allActivities.current);
    }
    let newActivities = filterActivities(e.target.innerText, allActivities.current);
    filteredActivities.current = newActivities;
    setActivities(newActivities);
  };

  const handleSearch = (e) => {
    let searchedActivities = filteredActivities.current.filter((activity) => {
      return activity.tags.toString().toLowerCase().includes(e.target.value);
    });
    setActivities(searchedActivities);
  };

  const getAll = () => {
    axios.get('http://localhost:3001/api/v1/activities', {
      headers: {'Authorization': token}
    })
      .then((res) => {
        allActivities.current = res.data;
        filteredActivities.current = res.data;
        setActivities(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (token) {
      getAll();
    }
  }, [token]);

  return (
    <div className="home">
      {!noQuote && (
        <h1 className="welcome">
          {quote.current}
        </h1>
      )}
      <div className="search">
        <Search handleFilter={handleFilter}/>
        <input ref={searchBox} onChange={handleSearch} className="tag-search" placeholder="Search..." />
      </div>
      <div className="card-container">
        { activities.length ? activities.map((activity) => <ActivityCard key={createKey(activity)} activity={activity} allActivities={allActivities}/>) : null }
      </div>
    </div>
  );
};

export default Activities;
