import React from 'react';
import UserImg from '../subcomponents/UserImg.jsx';
import Leaderboard from '../subcomponents/Leaderboard.jsx';
import TempCard from '../subcomponents/TempCard.jsx';


const Profile = () => {
  return (
    <div className="home">
      <div className="profile-top">
        <UserImg />
        <Leaderboard />
      </div>
      <h2 className="welcome">The Arnold's Recent Activities</h2>
      <div className="card-container">
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
      </div>
    </div>
  );
};

export default Profile;
