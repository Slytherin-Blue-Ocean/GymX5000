import React from 'react';
import { Table } from 'react-bootstrap';

const Leaderboard = () => {
  return (
    <Table className="leaderboard" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Recent Activity</th>
          <th>Total Points</th>
          <th>Weekly Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>The Arnold</td>
          <td>Meat Smoothie</td>
          <td>9001</td>
          <td>808</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Chad</td>
          <td>Gym Selfie</td>
          <td>653</td>
          <td>222</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ben</td>
          <td>Bench And Leave</td>
          <td>46</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Leaderboard;
