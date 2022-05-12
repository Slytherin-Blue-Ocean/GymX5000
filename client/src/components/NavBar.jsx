import React from 'react';
import { Navbar, NavDropdown, Container, FormControl, Form, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuth} from './context/Auth.jsx';

const NavBar = () => {
  const { logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className="nav-link" to="/">GymX5000</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Activities</Link>
          <Link className="nav-link" to="/classes">Class</Link>
          <Link className="nav-link" to="/challenges">Challenges</Link>
          <Link className="nav-link" to="/singlechallenge">Single Challenge Temp</Link>
          <Link className="nav-link" to="/profile">My Profile</Link>
        </Nav>
        <Button onClick={logout}>Log out</Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
