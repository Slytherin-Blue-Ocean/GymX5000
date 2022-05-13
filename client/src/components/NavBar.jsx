import React from 'react';
import { Navbar, NavDropdown, Container, FormControl, Form, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuth} from './context/Auth.jsx';

const NavBar = () => {
  const { logout, isAuth } = useAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className="nav-link" to="/activity">GymX5000</Link></Navbar.Brand>
        {
          isAuth &&
          <>
            <Nav className="me-auto">
              <Link className="nav-link" to="/activity">Activities</Link>
              <Link className="nav-link" to="/classes">Class</Link>
              <Link className="nav-link" to="/challenges">Challenges</Link>
              <Link className="nav-link" to="/singlechallenge">Placeholder</Link>
              <Link className="nav-link" to="/profile">My Profile</Link>
            </Nav>
            <Button onClick={logout}>Log out</Button>
          </>
        }
      </Container>
    </Navbar>
  );
};

export default NavBar;
