describe("Each weapon can be a primary weapon", () => {
	before(() => {
		cy.login(Cypress.env("user-login"), Cypress.env("user-password"));
	});

	const weapons = [
		"Vulcan",
		"Mx42",
		"Ak",
		"Mp52",
		"Striker",
		"Spectre",
		"Fury",
		"Atlas",
		"Needle",
		"Westfire",
		"Warden",
		"Socom",
		"T1Gauss",
		"M12Tactical",
		"Erg"
	];
	
	weapons.forEach((weapon) => {
		it(`should allow setting ${weapon} as primary weapon`, () => {
			cy.visit("fr-FR/armory/weapons");
			cy.origin("https://app-qtesting.eva.gg", { args: { weapon } }, ({ weapon }) => {
				cy.get(`a[href="/fr-FR/armory/weapons/${weapon}"]`).click({multiple: true});
				cy.url().should('include', `/fr-FR/armory/weapons/${weapon}`);
				cy.get('button').contains('Principale').click({multiple: true});
			});
		});
	});
});