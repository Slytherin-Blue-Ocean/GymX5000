describe('Fitness Classes', () => {
  //if click 'class'
  it('login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input#email').type('admin@gmail.com');
    cy.get('input#password').type('admin1234');
    cy.get('.MuiButton-root').click();
  });

  it('should go to Classes when clicked', () => {
    ct.visit('http://localhost:3000/classes');
    // cy.get('[href="/classes"]').click();
    cy.get('h1').should('have.text', 'Fitness Classes');
  });
});