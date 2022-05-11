import React from 'react';
import TempCard from '../subcomponents/TempCard.jsx';

const SingleActivity = () => {
  return (
    <div className="home">
      <h1 className="welcome">Activity Name</h1>
      <div className="act-cont">
        <div className="act-img">IMAGE</div>
        <div className="act-tags">TAGS</div>
      </div>
      <div className="description">DESCRIPTION / INFO / RECIPE INSTRUCTIONS</div>
      <h4 className="welcome">Try these similar activities</h4>
      <div className="card-container">
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
        <TempCard />
      </div>
    </div>
  );
};

export default SingleActivity;