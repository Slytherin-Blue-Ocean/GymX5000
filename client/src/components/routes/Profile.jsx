import React from 'react';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import UserImg from '../subcomponents/UserImg.jsx';
import Leaderboard from '../subcomponents/Leaderboard.jsx';
import FavoritesList from '../subcomponents/FavoritesList.jsx';
import ActivityCard from '../subcomponents/ActivityCard.jsx';
import Kettlebell from '../threejs/Kettlebell.js';
import Broccoli from '../threejs/Broccoli.js';
import WireYoga from '../threejs/WireYoga.js';
import Ox from '../threejs/Ox.js';
import Avocado from '../threejs/Avocado.js';
import Brick from '../threejs/Brick.js';
import Feet from '../threejs/Feet.js';

const cardContainerStyle = {
  height: '200em'
};

const Profile = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/activities')
      .then((res) => setActivities(res.data))
      .catch(((err) => console.error(err)));
  }, []);

  return (
    <div className="home">
      <div className="profile-top">
        <UserImg />
        <div className="profile-sub">
          <Leaderboard className="profile-board"/>
          <div className="prof-badges">
            <Kettlebell />
            <Broccoli />
            <WireYoga />
            <Ox />
            <Avocado />
            <Brick />
            <Feet />
          </div>
        </div>
      </div>
      <h2 className="welcome">Arnold's Activities</h2>
      <FavoritesList />
    </div>
  );
};

export default Profile;
