import React from 'react';
import { Navbar, NavDropdown, Container, FormControl, Form, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">GymX5000</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/profile">My Profile</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
