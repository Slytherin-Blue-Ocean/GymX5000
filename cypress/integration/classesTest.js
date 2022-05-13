describe('Fitness Classes', () => {
  //if click 'class'

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

    cy.visit('http://localhost:3000/classes');
  });


  it('should allow user to book class from carousel', () => {
    cy.get('.selected > :nth-child(1) > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-action > .MuiCardActions-root > .MuiButtonBase-root > .btn').should('have.text', 'Book');
    cy.get('.selected > :nth-child(1) > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-action > .MuiCardActions-root > .MuiButtonBase-root > .btn').click();

    cy.get('.selected > :nth-child(1) > .MuiPaper-root > .MuiCardHeader-root > .MuiCardHeader-action > .MuiCardActions-root > .MuiButtonBase-root > .btn').should('have.text', 'Booked');
  });

  it('should allow user to book a class from the list at the bottom', () => {
    cy.get(':nth-child(1) > .classmain > .classbody > .classdesc > .btn').click();
    cy.wait(500);
    cy.get(':nth-child(7) > .a').should('exists');
  });

  it('should allow user to cancel a class in the "history" section', () => {
    cy.get(':nth-child(8) > .b').click();
    cy.wait(500);
    cy.get(':nth-child(8) > .a').should('not.exists');
  });
});