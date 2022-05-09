import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import ActivityModal from '../subcomponents/ActivityModal.jsx';

const Exercise = () => {
  const [exercise, setExercise] = useState('');
  const [selected, setSelected] = useState(false);

  // useEffect(() => {
  //   axios.get('/bro, i dunno, some endpoint')
  //     .then((response) => {
  //       console.log(response.data);
  //       // set some stats to this data
  //     })
  //     .catch((err) => console.log(err));
  // }, [exercise]);

  return (
    <div>
      <div>Temp Activity Card</div>
      <h2>Name</h2>
      <div>Target</div>
      <div>Required Equipment</div>

      <img src="http://d205bpvrqc9yn1.cloudfront.net/0001.gif" alt="this is a gif, hopefully" />
      {/* <ActivityModal /> */}
    </div>
  );
};

export default Exercise;
