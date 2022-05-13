describe('favorite function', () => {
  beforeEach(function () {
    // before each test, we can automatically preserve the
    // 'session_id' and 'remember_token' cookies. this means they
    // will not be cleared before the NEXT test starts.
    //
    // the name of your cookies will likely be different
    // this is just a simple example
    Cypress.Cookies.preserveOnce('session_id', 'remember_token');
    cy.visit('http://localhost:3000/login');
    cy.get('input#email').type('admin@gmail.com');
    cy.get('input#password').type('admin1234');
    cy.get('.MuiButton-root').click();
  });

  it('should check how many favorites are there', () => {
    cy.get('[href="/profile"]').click();
    cy.get(':nth-child(34) > .MuiCardHeader-root').should('exists');
  });


  //34 cards default in profile
  it('should allow user to favorite an item', () => {
    cy.get(':nth-child(1) > .MuiCardHeader-root > .MuiCardHeader-action > .MuiCardActions-root > .MuiButtonBase-root > [data-testid="StarBorderIcon"]').click();
    cy.get('[href="/profile"]').click();
    cy.get(':nth-child(35) > .MuiCardHeader-root').should('exists');
  });

  //36 is last favorite card after adding
  it('should allow user to unfavorite an item', () => {
    cy.get(':nth-child(35) > .MuiCardHeader-root > .MuiCardHeader-action > .MuiCardActions-root > .MuiButtonBase-root > [data-testid="StarBorderIcon"]').click();
    cy.get(':nth-child(35) > .MuiCardHeader-root > .MuiCardHeader-action > .MuiCardActions-root > .MuiButtonBase-root > [data-testid="StarBorderIcon"]').should('not.exists');
  });

});

