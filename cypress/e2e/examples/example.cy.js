describe('browser actions', () => {
	it('should load correct url', () => {
		cy.visit('http://example.com/', { timeout: 10000 });
	});

	it('should check currect url', () => {
		cy.url().should('include', 'http://example.com/');
	});

	it('should check for corrent element on the page', () => {
		cy.get('h1').should('be.visible');
	});
});
