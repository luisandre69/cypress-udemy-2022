describe('Password test', () => {
	before(function () {
		cy.visit('index.html');
	});

	it('should click on the signin button', () => {
		cy.get('#signin_button').click();
	});

	it('should click on forgotten password', () => {
		cy.get('.offset3 > a').click();
	});

	it('should fill email form', () => {
		cy.get('#user_email').type('test@gmail.com');
	});

	it('should submit the form', () => {
		cy.contains('Send Password').click();
	});
});
