//<reference types="cypress" />;

describe('basic website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('shows a login page', () => {
    cy.get('h1').should('have.text', 'Log In');
  });

  it('should have a logout button', () => {
    cy.get('button').should('have.class', 'btn btn-primary');
  });

  it('Log out button should be rendered', () => {
    cy.get('.btn').should('have.text', 'Log out');
  });

  it('it should have an activites header', () => {
    cy.get('.me-auto > [href="/"]').should('have.text', 'Activities');
  });

  it('it should have an challenges header', () => {
    cy.get('[href="/challenges"]').should('have.text', 'Challenges');
  });

  it('it should have an Test Page header', () => {
    cy.get('[href="/singlechallenge"]').should('have.text', 'Test Page');
  });

  it('it should have an badge header', () => {
    cy.get('[href="/test"]').should('have.text', 'Badge Test');
  });

  it('it should have an My profile header', () => {
    cy.get('[href="/profile"]').should('have.text', 'My Profile 9');
  });

  // register button = next page: http://localhost:3000/register
  it('it should have a way to register if no account', () => {
    cy.get('.MuiTypography-body1 > .MuiTypography-root').should('have.text', 'Register');
  });



});

//test login

describe('login', () => {
  it('should login successfully log into our app', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input#email').type('admin@gmail.com');
    cy.get('input#password').type('admin1234');
    cy.get('.MuiButton-root').click();

  });
});

// //test logout
describe('logout', () => {
  it('should logout of the app when button is click', () => {
    // cy.visit('http://localhost:3000/login');
    // cy.get('input#email').type('admin@gmail.com');
    // cy.get('input#password').type('admin1234');
    // cy.get('.MuiButton-root').click();
    cy.get('.container > .btn').click();
    cy.get('h1').should('have.text', 'Log in');

  });
});

