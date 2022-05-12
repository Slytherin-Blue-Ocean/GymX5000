/// <reference types="cypress" />
/* global cy */
import * as React from 'react';
import NavBar from '../../client/src/components/NavBar.jsx';
import App from '../../client/src/components/App.jsx';
import { mount } from '@cypress/react';

// beforeEach(() => {
//   cy.visit('http://localhost:3000/login');
//   // cy.waitForReact();
// });
// describe('it should do something', () => {
//   beforeEach(() => {
//     mount(<App />);
//     // cy.waitForReact();

//     // adding the shadow DOm config run-time
//     Cypress.config('includeShadowDom', true);
//   });
describe('it shsould do something', () => {

  it('renders App', () => {
    mount(<App />);
    cy.get('div#root').should('exist');
  });
});