describe('Demo Test', () => {
	it('Should visit a website and login', () => {
		cy.visitLoginpage();
		cy.login('username', 'password');
	});
});
