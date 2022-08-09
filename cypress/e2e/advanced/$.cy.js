describe('Cypress.$ Function', () => {
	before(function () {
		cy.visit('index.html');
	});

	it('Expose jQuery element in the current window', () => {
		const singInButton = Cypress.$('#signin_button');
		singInButton.click();
	});
});
