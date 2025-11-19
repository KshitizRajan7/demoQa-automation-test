Cypress.Commands.add('assertModalField', (actualValue, expectedValue) => {
  cy.get('td').contains(actualValue).siblings('td').should('have.text', expectedValue);
});