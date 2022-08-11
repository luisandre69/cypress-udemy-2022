describe('Demo Test', () => {
	it('Should visit a website and login', () => {
		cy.visitLoginpage();
		cy.fixture('loginData').then(({ username, password }) => {
			cy.login(username, password);
		});
	});
});
