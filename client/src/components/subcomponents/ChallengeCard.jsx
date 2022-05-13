import React from 'react';
import Kettlebell from '../threejs/Kettlebell.js';
import { useNavigate } from 'react-router-dom';

const ChallengeCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="chal-card" onClick={() => navigate('/singlechallenge')}>
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
