describe("Create a user and check default loadout", () => {
  const username = `user${Date.now()}`;
  const email = `user${Date.now()}@example.com`;
  const password = "Password123!";
  before(() => {
	cy.signup(username, email, password);
  });

  it.only("MX42 should be default rifle", () => {
	cy.visit("fr-FR/armory/weapons");
	cy.origin("https://app-qtesting.eva.gg", () => {
		cy.get('a[href="/fr-FR/armory/weapons/Mx42"]').click();
		cy.url().should('include', `/fr-FR/armory/weapons/Mx42`);
		cy.get('button').contains('Principale').should("be.disabled")
		cy.get('span').contains('Rookie');
		});
	});

  it("T1 Gauss should be default sidearm", () => {
	cy.origin("https://app-qtesting.eva.gg", () => {
        cy.get('a[href="/fr-FR/armory/weapons/T1Gauss"]').click();
		cy.get('button').contains('Principale').should("be.disabled")
		cy.get('span').contains('Rookie');
  });
});

  it("Trooper should be default skin", () => {
	cy.visit("fr-FR/armory/characters");
	cy.origin("https://app-qtesting.eva.gg", () => {
		cy.get('a[href="/fr-FR/armory/characters/trooper"]').click();
		cy.get('button').contains('Principale').should("be.disabled")
		cy.get('span').contains('Rookie');
		});
   });
});