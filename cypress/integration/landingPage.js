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

  it('it should have classes header', () => {
    cy.get('[href="/classes"]').should('have.text', 'Class');
  });

  it('it should have an My profile header', () => {
    cy.get('[href="/profile"]').should('have.text', 'My Profile');
  });

  // register button = next page: http://localhost:3000/register
  it('it should have a way to register if no account', () => {
    cy.get('.MuiTypography-body1 > .MuiTypography-root').should('have.text', 'Register');
    cy.get('.MuiTypography-body1 > .MuiTypography-root').click();
    cy.get('h1').should('have.text', 'Register');
    cy.get('.MuiButton-root').should('have.text', 'Register');

  });

});

//test login

describe('authenticated user', () => {
  it('should login successfully log into our app', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input#email').type('admin@gmail.com');
    cy.get('input#password').type('admin1234');
    cy.get('.MuiButton-root').click();

  });

  it('should have a search bar', () => {
    cy.get('.tag-search').should('exist');
  });

  it('should be able to search filter', () => {
    cy.get('.tag-search').type('abs');
    cy.get(':nth-child(2) > .MuiCardContent-root').should('have.text', '#waist #body weight #abs ');
    cy.get('.card-container').should('have.length', 1);
  });

  it('drop down filter menu should filter cards (workout)', () => {
    cy.get('#dropdown-basic-button').click();
    cy.get('.dropdown-menu > :nth-child(2)').click();
    cy.get(':nth-child(1) > .MuiCardHeader-root').contains('workout' );
  });

  it('drop down filter menu should filter cards (recipe)', () => {
    cy.get('#dropdown-basic-button').click();
    cy.get('.dropdown-menu > :nth-child(3)').click();
    cy.get(':nth-child(1) > .MuiCardHeader-root').contains('recipe' );
  });

  it('drop down filter menu should filter cards (class)', () => {
    cy.get('#dropdown-basic-button').click();
    cy.get('.dropdown-menu > :nth-child(4)').click();
    cy.get(':nth-child(1) > .MuiCardHeader-root').contains('class' );
  });

  it('drop down filter menu clear filter params', () => {
    cy.get('#dropdown-basic-button').click();
    cy.get('.dropdown-menu > :nth-child(1)').click();
    // cy.get(':nth-child(1) > .MuiCardHeader-root').contains('workout');
  });

  //once logged in 'register should not appear anywhere'
  it('should not have register link when authenticated', () => {
    cy.get('.MuiTypography-body1 > .MuiTypography-root').should('not.exist');
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

  });
});

