import React from 'react';
import Search from '../subcomponents/Search.jsx';
import TempCard from '../subcomponents/TempCard.jsx';
import UserImg from '../subcomponents/UserImg.jsx';
import ActivityCard from '../subcomponents/ActivityCard.jsx';
import Quotes from '../subcomponents/Quotes.jsx';

const Home = () => {
  return (
    <div className="home">
      <h1 className="welcome">
        <Quotes />
      </h1>
      <div className="search">
        <Search />
      </div>
      <div className="card-container">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
};

export default Home;
