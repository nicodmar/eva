describe("Create a user and check default loadout", () => {
const username = `user${Date.now()}`;
  const email = `user${Date.now()}@example.com`;
  const password = "Password123!";
  before(() => {
	cy.signup(username, email, password);
	cy.visit("fr-FR/armory/weapons");
  });

  it("MX42 should be default rifle", () => {
	cy.origin("https://app-qtesting.eva.gg", () => {
        cy.contains('div', 'MX42')
            .children('span')
            .then((text) => {
                expect(text).to.equal('principale');
            });
        });
  });

  it("T1 Gauss should be default sidearm", () => {
	cy.origin("https://app-qtesting.eva.gg", () => {
        cy.contains('div', 'T1 Gauss')
            .children('span')
            .then((text) => {
                expect(text).to.equal('principale');
            });
        });
  });

  it("Trooper should be default skin", () => {
	cy.visit("fr-FR/armory/characters");
	cy.origin("https://app-qtesting.eva.gg", () => {
		cy.contains('div', 'Trooper')
			.children('span')
			.then((text) => {
				expect(text).to.equal('principale');
			});
		});	
});
});