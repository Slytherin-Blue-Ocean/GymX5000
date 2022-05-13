import React from 'react';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Activities from '../routes/Activities.jsx';
import ActivityCard from '../subcomponents/ActivityCard.jsx';
import Ox from '../threejs/Ox.js';
import {useAuth} from '../context/Auth.jsx';

const getHighProteinCards = (activities) => {
  return activities.filter((activity) => activity.tags.toString().toLowerCase().includes('protein'));
};


const SingleChallenge = () => {
  const noQuote = true;
  const allActivities = useRef([]);
  const [activities, setActivities] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:3001/api/v1/activities', {
        headers: {'Authorization': token}
      })
        .then((res) => {
          allActivities.current = res.data;
          setActivities(getHighProteinCards(res.data));
        })
        .catch((err) => console.error(err));
    }
  });

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
        { activities.length ? activities.map((activity) => <ActivityCard key={activity.id} activity={activity} allActivities={allActivities}/>) : null }
      </div>
    </div>
  );
};

export default SingleChallenge;
