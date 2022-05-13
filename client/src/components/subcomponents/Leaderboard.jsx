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
          <th>Total Badges</th>
          <th>Badges This Month</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>The Arnold</td>
          <td>AB Ripper GymX5000</td>
          <td>110</td>
          <td>8</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Chad</td>
          <td>I'm Not Sleeping Next To You</td>
          <td>6</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Walter</td>
          <td>My Eyes Are Up Here</td>
          <td>3</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Leaderboard;
