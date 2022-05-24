require('dotenv').config();

describe('Fitness Classes', () => {

  beforeEach(function () {
    Cypress.Cookies.preserveOnce('session_id', 'remember_token');
    cy.visit('http://localhost:3000/login');
    cy.get('input#email').type(`${process.env.email}`);
    cy.get('input#password').type(`${process.env.password}`);
    cy.get('.MuiButton-root').click();
    cy.wait(300);

    cy.visit('http://localhost:3000/classes');
  });


  it('should allow user to book class from carousel', () => {
    cy.wait(1000);
    cy.get('.selected > :nth-child(1) > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-action > .MuiCardActions-root > .MuiButtonBase-root > .btn').should('have.text', 'Book');
    cy.get('.selected > :nth-child(1) > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-action > .MuiCardActions-root > .MuiButtonBase-root > .btn').click();
    cy.wait(300);
    cy.get('.selected > :nth-child(1) > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-action > .MuiCardActions-root > .MuiButtonBase-root > .btn').should('have.text', 'Booked');
  });

  it('should allow user to book a class from the list at the bottom', () => {
    cy.wait(300);
    cy.get(':nth-child(1) > .classmain > .classbody > .classdesc > .btn').click();
    cy.wait(500);
    cy.get(':nth-child(7) > .a').should('exist');
  });

  it('should allow user to cancel a class in the "history" section', () => {
    cy.get(':nth-child(8) > .b').click();
    cy.wait(500);
    cy.get(':nth-child(8) > .a').should('not.exist');
  });
});