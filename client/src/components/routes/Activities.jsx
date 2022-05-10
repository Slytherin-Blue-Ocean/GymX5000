import React from 'react';
import Search from '../subcomponents/Search.jsx';
import TempCard from '../subcomponents/TempCard.jsx';
import UserImg from '../subcomponents/UserImg.jsx';
import Quotes from '../subcomponents/Quotes.jsx';


const Activities = () => {
  return (
    <div className="home">
      <h1 className="welcome">
        <Quotes />
      </h1>
      <div className="search">
        <Search />
      </div>
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
        <TempCard />
      </div>
    </div>
  );
};

export default Activities;
