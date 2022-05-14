import React from 'react';
import arnold from '../images/arnold.webp';
import food from '../images/foodpic.jpeg';
import exercise from '../images/exercise-gif.jpeg';
import classEx from '../images/class.jpeg';
import Kettlebell from '../threejs/Kettlebell.js';

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
import {useAuth} from '../context/Auth.jsx';

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
  background: 'rgba(30,33,36,0.8)',
  margin: '0 auto',
  height: '100%',
  width: '100%',
  color: '#FFF'
}));

const Home = () => {
  const { isAuth } = useAuth();

  return (
    <>
      <Grid container>
        <Grid item style={{width: '100vw', height: '80vh'}}>
          <Item elevation={24}>
            <br />
            <h1 style={{marginLeft: '3rem', fontSize: '60px'}}>Welcome To GYMX5000</h1>
          </Item>
        </Grid>
      </Grid>
      <Grid container direction={'row'} justifyContent="center" spacing={5}>
        <Grid item style={{background: '#CCC', margin: '1em', padding: '2rem', borderRadius: '5px', zIndex: 1}}>
          <h2>Classes</h2>
          <img src={classEx} alt="class exercises" height="250" width="250" style={{borderRadius: '5px'}}/>
        </Grid>
        <Grid item style={{background: '#CCC', margin: '1em', padding: '2rem', borderRadius: '5px', zIndex: 1}}>
          <h2>Exercises</h2>
          <img src={exercise} alt="exercise" height="250" width="200" style={{borderRadius: '5px'}}/>
        </Grid>
        <Grid item style={{background: '#CCC', margin: '1em', padding: '2rem', borderRadius: '5px', zIndex: 1}}>
          <h2>Nutrition</h2>
          <img src={food} alt="Stew Picture" height="250" width="250" style={{borderRadius: '5px'}}/>
        </Grid>
        <Grid item style={{background: '#CCC', margin: '1em', padding: '2rem', borderRadius: '5px', zIndex: 1}}>
          <h2>Challenges</h2>
          <div className="single-badge" style={{ width: '250px', borderRadius: '5px'}}><Kettlebell /></div>
        </Grid>
      </Grid>
      <Grid container style={{marginTop: '-3em'}}>
        <Grid item style={{ margin: '0 auto', width: '100vw', height: 'fit-content'}}>
          <Item2>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{textAlign: 'center'}}>
              <Grid item style={{marginTop: '4em'}}>
                <Typography variant="h2" gutterBottom>
                  Healthy Habits Made Simple
                </Typography>
              </Grid>
              <Grid item style={{margin: '0 5rem'}}>
                <Typography variant="h3">
                  Our Mission
                </Typography>
                <Typography variant="subtitle1" style={{width: '50%', margin: '0 auto'}}>Your transformation is our passion. We are your personal trainer, your nutritionist, your supplement expert, your lifting partner, your support group. We provide the technology, tools, and products you need to burn fat, build muscle, and become your best self.</Typography>
              </Grid>
              <Grid item style={{margin: '1rem'}}>
                {
                  !isAuth &&
                  <>
                    <Button variant="outlined" size="large" color="error" style={{margin: '1rem'}} href="/login">
                      Login
                    </Button>
                    <Button variant="outlined" size="large" color="error" style={{margin: '1rem'}} href="/register">
                      Register
                    </Button>
                  </>
                }
              </Grid>
            </Grid>
          </Item2>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;