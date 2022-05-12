import React from 'react';
import Kettlebell from '../threejs/Kettlebell.js';

const ChallengeCard = ({ item }) => {

  return (
    <div className="chal-card">
      <h2 className="chal-name">{item.title}</h2>
      <div className="chal-head">
        <div className="prize">{item.badge}</div>
        <h4 className="chal-desc">{item.blurb}</h4>
      </div>
      <h5 className="chal-footer">Category: {item.tag}</h5>
    </div>
  );
};

export default ChallengeCard;
