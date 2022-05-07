import React from 'react';
import { Badge } from 'react-bootstrap';

const UserImg = () => {
  return (
    <div className="temp-card">
      <div>User Image</div>
      <div>
        <div>Username<Badge bg="secondary">9</Badge></div>
      </div>
    </div>
  );
};

export default UserImg;
