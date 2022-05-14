describe('front page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.wait(200);
  });

  it('should have a login and register button', () => {
    cy.get('a.MuiButton-root').should('exist');
  });

  it('should have login form', () => {
    cy.wait(200);
    cy.get('.css-e53awj-MuiStack-root > [href="/login"]').click();
    cy.wait(200);
    cy.get('h1').should('have.text', 'Log In');
    cy.get('#email').should('exist');
    cy.get('#password').should('exist');
    cy.get('.MuiBox-root > .MuiButton-root').should('exist');
  });

  it('should render 4 different cards aka class etc', () => {
    cy.get(':nth-child(4) > h2').should('exist');
  });

  it('should allow user to register', () => {
    cy.wait(200);
    cy.get('.css-e53awj-MuiStack-root > [href="/register"]').click();
    cy.wait(200);
    cy.get('h1').should('have.text', 'Register');
    cy.get('#email').should('exist');
    cy.get('#password').should('exist');
    cy.get('#first_name').should('exist');
    cy.get('#last_name').should('exist');
    cy.get('#address').should('exist');
  });


















}); // end of function