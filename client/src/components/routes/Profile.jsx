import React from 'react';
import UserImg from '../subcomponents/UserImg.jsx';
import Leaderboard from '../subcomponents/Leaderboard.jsx';
import TempCard from '../subcomponents/TempCard.jsx';
import FavoritesList from '../subcomponents/FavoritesList.jsx';

const cardContainerStyle = {
  height: '200em'
};

const Profile = ({activities}) => {

  return (
    <div className="home">
      <div className="profile-top">
        <UserImg />
        <Leaderboard />
      </div>
      <h2 className="welcome">The Arnold's Recent Activities</h2>
      <div className="card-container">
        <FavoritesList />
      </div>
    </div>
  );
};

export default Profile;
