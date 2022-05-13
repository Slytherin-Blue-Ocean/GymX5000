import React from 'react';
import arnold from '../images/arnold.webp';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(() => ({
  backgroundImage: `url(${arnold})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  margin: '1em',
  height: '100%',
  width: '100%',
  color: '#ccc'
}));

const Item2 = styled(Paper)(() => ({
  margin: '1em',
  height: '100%',
  width: '100%',
  color: '#ccc'
}));

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid item style={{width: '100vw', height: '80vh'}}>
          <Item elevation={24}>
            <br />
            <h1 style={{marginLeft: '2rem'}}>Welcome To GYMX5000</h1>
          </Item>
        </Grid>
      </Grid>
      <Grid container direction={'row'} justifyContent="center" spacing={5}>
        <Grid item style={{background: '#CCC', margin: '1em', padding: '2rem', borderRadius: '5px'}}>
          <h2>Classes</h2>
        </Grid>
        <Grid item style={{background: '#CCC', margin: '1em', padding: '2rem', borderRadius: '5px'}}>
          <h2>Exercises</h2>
        </Grid>
        <Grid item style={{background: '#CCC', margin: '1em', padding: '2rem', borderRadius: '5px'}}>
          <h2>Nutrition</h2>
        </Grid>
        <Grid item style={{background: '#CCC', margin: '1em', padding: '2rem', borderRadius: '5px'}}>
          <h2>Challenges</h2>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item>
          <h3>
            Healthy Habits Made Simple
          </h3>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;