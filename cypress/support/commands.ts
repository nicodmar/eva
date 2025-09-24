
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable;
      signup(username: string, email: string, password: string): Chainable;
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

Cypress.Commands.add("signup", (username: string, email: string, password: string) => {
  indexedDB.deleteDatabase("firebaseLocalStorageDb");
  cy.visit("https://www-qtesting.eva.gg/");
  cy.get("a").contains("Se connecter").click();
   cy.origin('https://app-qtesting.eva.gg', { args: { username, email, password } }, ({ username, email, password }) => {
    cy.url().should("include", "/login");
    cy.get('button').last().click();
    cy.url().should("include", "/register");
    cy.get('input[name="displayName"]').type(username);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirmPassword"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url()
      .should("not.include", "/signup")
      .should("include", "/dashboard");
   });
});
