describe('Feedback test', () => {
	before(function () {
		cy.visit('index.html');
		cy.contains('Feedback').click();
	});

	it('should load feedback form', () => {
		cy.get('form').should('be.visible');
	});

	it('should fill the feedback form', () => {
		cy.get('#name').type('name');
		cy.get('#email').type('email.email.com');
		cy.get('#subject').type('just random subject');
		cy.get('#comment').type('this is a comment');
	});

	it('should submit the form', () => {
		cy.get('.btn-signin').click();
	});

	it('should display feedback message', () => {
		cy.get('#feedback-title').contains('Feedback');
	});
});
