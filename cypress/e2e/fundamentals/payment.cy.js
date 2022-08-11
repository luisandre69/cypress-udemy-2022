describe('Payee test', () => {
	before(function () {
		cy.visit('index.html');
		cy.get('#signin_button').click();
		cy.fixture('user').then(user => {
			const username = user.id;
			const password = user.password;
			cy.login(username, password);
		});
	});

	it('should send new paytment(fake)', () => {
		cy.get('#pay_bills_tab').click();
		cy.contains('Pay Saved Payee').click();

		cy.get('#sp_payee').select('wellsfargo');
		cy.get('#sp_account').select('Credit Card')
		cy.get('#sp_amount').type('100');
		cy.get('#sp_date').type('2022-08-08{enter}');
		cy.get('#sp_description').type('Details');

		cy.get('#pay_saved_payees').click();
	});

	it('should show sucess message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted');
	});
});
