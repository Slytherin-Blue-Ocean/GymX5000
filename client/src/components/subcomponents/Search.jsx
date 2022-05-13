import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

const Search = ({handleFilter, currentFilter}) => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Filter">
      <Dropdown.Item onClick={handleFilter}><ClearIcon />Clear</Dropdown.Item>
      <Dropdown.Item onClick={handleFilter}><FitnessCenterIcon />Workout</Dropdown.Item>
      <Dropdown.Item onClick={handleFilter}><LocalDiningIcon />Recipe</Dropdown.Item>
      <Dropdown.Item onClick={handleFilter}><SelfImprovementIcon />Class</Dropdown.Item>
    </DropdownButton>
  );
};

export default Search;
