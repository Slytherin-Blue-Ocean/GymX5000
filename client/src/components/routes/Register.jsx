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

const Register = ({setIsAuthenticated}) => {
  const [values, setValues] = useState({email: '', password: '', first_name: '', last_name: '', address: ''});

  const handleChange = e => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const {email, password, first_name, last_name, address} = values;

    if (
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
      password.length > 6 &&
      first_name !== '' &&
      last_name !== ''
    ) {
      const res = await axios.post('http://localhost:3001/api/signup', values);
      if (res.data) {
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        setIsAuthenticated(true);
      }
    }

    setValues({email: '', password: '', first_name: '', last_name: '', address: ''});
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
          Register
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            label="first_name"
            type="first_name"
            id="first_name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            label="last_name"
            type="last_name"
            id="last_name"
          />
          <TextField
            margin="normal"
            fullWidth
            name="address"
            value={values.address}
            onChange={handleChange}
            label="address"
            type="address"
            id="address"
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
          Already have an account? {' '}
          <Link href="/login" variant="body2">
            {'Login'}
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;