import React from 'react';

const ChallengeCard = () => {
  return (
    <div className="chal-card">
      <div className="chal-main">
        <div className="prize">Three.js Badge</div>
        <div className="chal-body">
          <div className="chal-head">
            <div className="chal-name">Name of Challenge</div>
            <div className="chal-name">When Challenge Expires OR Timer</div>
            <div className="chal-name">Friend's who liked OR completed this challenge</div>
          </div>
          <div className="chal-desc">Description about challenge</div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;