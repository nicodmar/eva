describe('Default Equipment', () => {
  beforeEach(() => {
        cy.login(Cypress.env("user-login"), Cypress.env("user-password"));
  });

  it("tests armury page", () => {
    cy.visit("https://app-qtesting.eva.gg/fr-FR/armory/weapons");
    cy.url().should("include", "/armory");
  });
});