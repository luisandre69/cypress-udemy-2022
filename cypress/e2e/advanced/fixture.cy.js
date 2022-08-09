describe('Login with Fixtures Data', () => {
	it('should try to login', () => {
		cy.visit('login.html');

		cy.fixture('user').then(user => {
			const username = user.username;
			const password = user.password;

			cy.get('#user_login').clear().type(username, { delay: 50 });
			cy.get('#user_password').clear().type(password, { delay: 50 });
		});

		cy.get('input[type="checkbox"]').click();
		cy.contains('Sign in').click();

		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.');
	});
});
