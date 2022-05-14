import React from 'react';
import { Navbar, NavDropdown, Container, FormControl, Form, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuth} from './context/Auth.jsx';
import {Stack, Button} from '@mui/material';

const NavBar = () => {
  const { logout, isAuth } = useAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className="nav-link text-danger h3 p-0" to="/">GymX5000</Link></Navbar.Brand>
        {
          isAuth ?
            <>
              <Nav className="me-auto">
                <Link className="nav-link" to="/activity">Activities</Link>
                <Link className="nav-link" to="/classes">Class</Link>
                <Link className="nav-link" to="/challenges">Challenges</Link>
                <Link className="nav-link" to="/singlechallenge">Placeholder</Link>
                <Link className="nav-link" to="/profile">My Profile</Link>
              </Nav>
              <Button onClick={logout} variant="outlined" size="large" color="error" >Log out</Button>
            </>
            :
            <>
              <div className="me-auto">
              </div>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" color="error" href="/login">
                  Login
                </Button>
                <Button variant="outlined" color="error" href="/register">
                  Register
                </Button>
              </Stack>
            </>
        }
      </Container>
    </Navbar>
  );
};

export default NavBar;
