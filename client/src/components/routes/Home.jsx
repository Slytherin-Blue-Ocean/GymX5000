import React from 'react';
import Search from '../subcomponents/Search.jsx';
import TempCard from '../subcomponents/TempCard.jsx';
import UserImg from '../subcomponents/UserImg.jsx';

import Exercise from '../workoutsDisplay/exercises.jsx';


const Home = () => {
  return (
    <div className="home">
      <h1 className="welcome">Welcome Back, 'username'!</h1>
      <div className="search">
        <Search />
      </div>
      <div className="card-container">
        <Exercise />
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
        <TempCard />
      </div>
    </div>
  );
};

export default Home;
