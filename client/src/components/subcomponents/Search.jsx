import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import styled from 'styled-components';

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

const selectDropDown = (currentFilter, handleFilter) => {
  switch (currentFilter) {
  case 'recipes':
    return (
      <DropdownButton id="dropdown-basic-button" title="Select">
        <Dropdown.Item onClick={handleFilter}>Paleo</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Low-Fat</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Vegan</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>High Protein</Dropdown.Item>
      </DropdownButton>
    );
  case 'workouts':
    return (
      <DropdownButton id="dropdown-basic-button" title="Select">
        <Dropdown.Item onClick={handleFilter}>Body</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Waist</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Cable</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Abs</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Medicine Ball</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Lats</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Back</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Assisted</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Adductors</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Abductors</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}>Upper Back</Dropdown.Item>
      </DropdownButton>
    );
  default:
    return null;
  }
};

const Search = ({handleFilter, currentFilter}) => {

  return (
    <DropDownContainer>
      <DropdownButton id="dropdown-basic-button" title="Filter">
        <Dropdown.Item onClick={handleFilter}><FitnessCenterIcon />Weight-lifting</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}><LocalDiningIcon />Recipe</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}><SelfImprovementIcon />Yoga</Dropdown.Item>
        <Dropdown.Item onClick={handleFilter}><AutoGraphIcon />Motivation</Dropdown.Item>
      </DropdownButton>
    </DropDownContainer>
  );
};

export default Search;
