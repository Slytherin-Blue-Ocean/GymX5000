import React from 'react';
import Leaderboard from '../subcomponents/Leaderboard.jsx';
import ChallengeCard from '../subcomponents/ChallengeCard.jsx';

const Challenges = () => {
  return (
    <div className="chal">
      <div className="chal-top">
        <div className="chal-sub">
          <h3 className="chal-titles">
            1. Complete Challenges
          </h3>
          <div className="blurb">
            Challenges Paragraph
          </div>
        </div>
        <div className="chal-sub">
          <h3 className="chal-titles">
            2. Win Badges
          </h3>
          <div className="badge-container">
            Badges Display
          </div>
        </div>
        <div className="chal-sub">
          <h3 className="chal-titles">
            3. Conquer The Leaderboard
          </h3>
          <Leaderboard />
        </div>
      </div>
      <h1 className="welcome">This Month's Challenges</h1>
      <div className="chal-container">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </div>
  );
};

export default Challenges;
