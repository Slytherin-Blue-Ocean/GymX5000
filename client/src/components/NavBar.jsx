import React from 'react';
import { Navbar, NavDropdown, Container, FormControl, Form, Nav, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({logout}) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">GymX5000</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/explore">Explore</Link>
          <Link className="nav-link" to="/profile">My Profile <Badge bg="secondary">9</Badge></Link>
        </Nav>
        <Button onClick={logout} >Log out</Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
