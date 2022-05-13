import React from 'react';
import Activities from '../routes/Activities.jsx';
import Ox from '../threejs/Ox.js';

const SingleChallenge = () => {
  const noQuote = true;
  return (
    <div className="chal">
      <h1 className="welcome">I'm Not Sleeping Next To You</h1>
      <h3 className="welcome">Requirements: Eat 6 high-protein meals before May 20, 2022</h3>
      <div className="chal-bad"><Ox /></div>
      <h3 className="high-protein">
        The benefits of a high protein diet are: more satisfying than other weight-loss plans,
        helps build and maintain muscle, wide variety of healthy food options
        Most people can follow a high-protein diet by eating meat,
        fish, dairy products, beans and legumes, eggs,
        and vegetables that are relatively rich in protein,
        such as asparagus and spinach.
      </h3>
      <h4 className="welcome">Try These High-Protein Recipes</h4>
      <div className="chal-related">
        <Activities noQuote={noQuote}/>
      </div>
    </div>
  );
};

export default SingleChallenge;
