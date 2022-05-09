
import React, {useState} from 'react';
import axios from 'axios';

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link
} from '@mui/material';


const Login = ({setIsAuthenticated}) => {
  const [values, setValues] = useState({email: '', password: ''});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = values;

    if (
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
      password.length > 6
    ) {
      const res = await axios.post('http://localhost:3001/api/signin', values);
      if (res.data) {
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        setIsAuthenticated(true);
      }
    }

    setValues({email: '', password: ''});
  };
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h3">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={values.email}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={values.password}
            onChange={handleChange}
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Typography>
          Dont have an account?
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;