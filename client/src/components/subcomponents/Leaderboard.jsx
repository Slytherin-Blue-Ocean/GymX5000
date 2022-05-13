import React from 'react';
import { Table } from 'react-bootstrap';

const Leaderboard = () => {
  return (
    <Table className="leaderboard table-board" striped bordered hover variant="dark">
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
          <td>Meat Smoothie</td>
          <td>110</td>
          <td>8</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Chad</td>
          <td>Gym Selfie</td>
          <td>6</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Ben</td>
          <td>Bench And Leave</td>
          <td>3</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Leaderboard;
