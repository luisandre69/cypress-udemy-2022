describe('working with inputs', () => {
	it('should override the current time', () => {
		const date = new Date(2022, 8, 8).getTime(); // return a timestamp
		cy.clock(date);
		cy.log(date);
	});

	it('should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 });
		cy.clearCookies({ log: true });
		cy.clearLocalStorage('your item', { log: true });
		cy.title().should('include','Zero - Log in')
	});

	it('should fill username', () => {
		cy.get('#user_login').as('username');
		cy.get('@username').clear().type('test', { delay: 50 });
	});

	it('should fill password', () => {
		cy.get('#user_password').as('password');
		cy.get('@password').clear().type('test', { delay: 50 });
	});

	it('should mark checkbox', () => {
		cy.get('input[type="checkbox"]').click();
	});

	it('should submit login form', () => {
		cy.contains('Sign in').click();
		cy.wait(1000);
	});

	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.');
	});
});
