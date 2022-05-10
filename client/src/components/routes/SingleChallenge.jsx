import React from 'react';
import TempCard from '../subcomponents/TempCard.jsx';

const SingleChallenge = () => {
  return (
    <div className="chal">
      <h1 className="welcome">Challenge Name</h1>
      <h4 className="welcome">Expiration date or timer</h4>
      <div className="chal-mid">
        <div className="chal-mid-sub">Awarded Badge</div>
        <div className="chal-mid-sub">Detailed Challenge Description (maybe also reasons to do it? e.g. yoga benefits, muscle group benefitc, etc?)</div>
      </div>
      <h4 className="welcome">Complete The Challenge With These Activities</h4>
      <div className="chal-related">
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

export default SingleChallenge;
