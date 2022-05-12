import React from 'react';
import Leaderboard from '../subcomponents/Leaderboard.jsx';
import ChallengeCard from '../subcomponents/ChallengeCard.jsx';
import Kettlebell from '../threejs/Kettlebell.js';
import Fruitbowl from '../threejs/Fruitbowl.js';

const Challenges = () => {

  const challengeArray = [
    {tag: 'pectorals', title: "My Eyes Are Up Here", blurb: 'Let\'s face it, you\'re only going to workout your upper body anyway. You think leg day is Sunday\'s BBQ. You might as well collect a badge for it.', badge: <Kettlebell />},
    {tag: 'body weight', title: 'Gym Rat Dodgin\'', blurb: 'No time for the gym? Sick of all of the gym rats? Gas prices got you living like a hermit? Us too. Good thing your body doubles as a gym.', badge: <Kettlebell />},
    {tag: 'high-protein', title: 'I\'m Not Sleeping Next To You', blurb: 'Most people can follow a high-protein diet by eating meat, fish, dairy products, beans and legumes, eggs, and vegetables that are relatively rich in protein, such as asparagus and spinach.', badge: <Kettlebell />},
    {tag: 'vegetarian', title: 'You Look Radishing', blurb: 'Sorry about the corny title. I don\'t carrot all for puns. Give me some thyme, I\'ll find who wrote this, and get to the the root of the problem. Maybe then we will have some peas and quiet.', badge: <Kettlebell />},
    {tag: 'abs', title: 'Ab Ripper GymX5000', blurb: 'You see this webpage\'s background? By the time you\'re done with this, you\'ll blend in with it. Brick House by The Commodores will be your theme song. Yes, the badge is a brick. Like your abs.\nP.s. P90x, please don\'t sue us.', badge: <Kettlebell />},
    {tag: 'legs', title: 'Your Poor, Neglected Legs ☹️', blurb: 'Tired of people calling you chicken legs? toothpick? stilts? Let\'s fix that. You, me, and a squat rack.\nSide Effects: People may pour water on you, because your legs will look like tree trunks. ', badge: <Kettlebell />},
    {tag: 'keto', title: 'Key-toe-sis', blurb: 'In general, a low carbohydrate diet restricts carbohydrate intake to 130 grams or fewer each day. Carb restriction can cause your body to break fat down into ketones for energy. This is called ketosis.', badge: <Kettlebell />}
  ];

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
        <div className="chal-badges">
          <h3 className="chal-titles">
            2. Collect Badges
          </h3>
          <div className="badge-container">
            <div className="single-badge"><Kettlebell /></div>
            <div className="single-badge"><Fruitbowl /></div>
            <div className="single-badge"><Kettlebell /></div>
            <div className="single-badge"><Kettlebell /></div>
            <div className="single-badge"><Kettlebell /></div>
            <div className="single-badge"><Kettlebell /></div>
            <div className="single-badge"><Kettlebell /></div>
            <div className="single-badge"><Kettlebell /></div>
            <div className="single-badge"><Kettlebell /></div>
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
        {challengeArray.map((item, index) => {
          return <ChallengeCard item={item} key={index} />
        })}
      </div>
    </div>
  );
};

export default Challenges;
