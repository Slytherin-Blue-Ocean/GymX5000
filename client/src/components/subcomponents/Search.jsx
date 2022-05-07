import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';


const Search = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Filter">
      <Dropdown.Item><FitnessCenterIcon />Weight-lifting</Dropdown.Item>
      <Dropdown.Item><LocalDiningIcon />Recipe</Dropdown.Item>
      <Dropdown.Item><SelfImprovementIcon />Yoga</Dropdown.Item>
      <Dropdown.Item><AutoGraphIcon />Motivation</Dropdown.Item>
    </DropdownButton>
  );
};

export default Search;
