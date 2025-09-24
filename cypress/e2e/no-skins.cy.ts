describe("No skins for Bounty Hunter and Mist", () => {
    before(() => {
        cy.login(Cypress.env("user-login"), Cypress.env("user-password"));
    });

    it("checks no skins for Bounty Hunter", () => {
        cy.visit("fr-FR/armory/characters");
        cy.origin("https://app-qtesting.eva.gg", () => {
        cy.contains('div', 'Bounty Hunter')
            .next('div')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('0 skins');
            });
        });
        // maybe add another check on "Appliquer skin" button being disabled
    });

    it("checks no skins for Mist", () => {
        cy.visit("fr-FR/armory/characters");
        cy.origin("https://app-qtesting.eva.gg", () => {
        cy.contains('div', 'Mist')
            .next('div')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('0 skins');
            });
        });
    });
    // maybe add another check on "Appliquer skin" button being disabled
});