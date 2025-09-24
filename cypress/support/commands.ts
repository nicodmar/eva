
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable;
    }
  }
}

Cypress.Commands.add('login', (email: string, password: string) => {
  indexedDB.deleteDatabase("firebaseLocalStorageDb");
  cy.visit("https://www-qtesting.eva.gg/");
  cy.get("a").contains("Se connecter").click();
  cy.origin('https://app-qtesting.eva.gg', { args: { email, password } }, ({ email, password }) => {
    cy.url().should("include", "/login");
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url()
      .should("not.include", "/login")
      .should("include", "/dashboard");
  });
});
