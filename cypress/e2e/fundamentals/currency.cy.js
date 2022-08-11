describe('Currency Exchange Test', () => {
	before(function () {
		cy.visit('index.html');
		cy.get('#signin_button').click();
		cy.fixture('user').then(user => {
			const username = user.id;
			const password = user.password;

			cy.get('#user_login').type(username);
			cy.get('#user_password').type(password);
		});
		cy.get('#user_remember_me').click();
		cy.contains('Sign in').click();
		cy.get('ul.nav-tabs').should('be.visible');
	});

	it('should fill conversation form', () => {
		cy.get('#pay_bills_tab').click();
		cy.contains('Purchase Foreign Currency').click();
		cy.get('#pc_currency').select('GBP')
		cy.get('#pc_amount').type('2000')
		cy.get('#pc_inDollars_true').click();
		cy.get('#pc_calculate_costs').click()
	});

	it('should display conversion ammount', () => {
		cy.get('#pc_conversion_amount').should('contain','pound (GBP) =')
	});
});
