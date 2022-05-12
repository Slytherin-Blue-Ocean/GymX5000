import React from 'react';
import { Card, ListGroup, ListGroupItem, List, Button } from 'react-bootstrap';

const UserImg = () => {
  return (
    <Card  className="profile-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.cheatsheet.com/wp-content/uploads/2021/05/arnold-2.jpg" />
      <Card.Body>
        <Card.Title>The Arnold</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Who is your daddy and what does he do</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <button className="follow">Add Friend</button>
        <button className="follow">Message</button>
      </Card.Body>
    </Card>
  );
};

export default UserImg;
