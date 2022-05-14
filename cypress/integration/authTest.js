describe('authenticated user', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.css-e53awj-MuiStack-root > [href="/login"]').click();
    cy.wait(100);
    cy.get('input#email').type('admin@gmail.com');
    cy.get('input#password').type('admin1234');
    cy.get('.MuiBox-root > .MuiButton-root').click();
    cy.wait(500);
  });





  // it('should login successfully log into our app', () => {
  //   cy.visit('http://localhost:3000');
  //   cy.get('.css-e53awj-MuiStack-root > [href="/login"]').click();
  //   cy.wait(100);
  //   cy.get('input#email').type('admin@gmail.com');
  //   cy.get('input#password').type('admin1234');
  //   cy.get('.MuiBox-root > .MuiButton-root').click();

  // });

  // it('should have a search bar', () => {
  //   cy.wait(200);
  // });

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