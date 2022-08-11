describe('Login & Logout test', () => {
	before(function () {
		cy.visit('index.html');
		cy.get('#signin_button').click();
	});

	it('should try to login with invalid data', () => {
		cy.get('#login_form').should('be.visible');
		cy.get('#user_login').type('test');
		cy.get('#user_password').type('test');
		cy.contains('Sign in').click();
	});

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong');
	});

	it('should login to the application', () => {
		cy.fixture('user').then(user => {
			const username = user.id;
			const password = user.password;

			cy.get('#user_login').type(username);
			cy.get('#user_password').type(password);
		});
		cy.get('#user_remember_me').click();
		cy.contains('Sign in').click();

		cy.get('ul.nav-tabs').should('be.visible')
	});

	it('should logout from the applciation', () => {
		cy.contains('username').click()
		cy.get('#logout_link').click()
		cy.url().should('include','index.html')
	});
});
