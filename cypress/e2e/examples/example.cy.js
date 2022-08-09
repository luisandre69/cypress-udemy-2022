describe('browser actions', () => {
	it('should load correct url', () => {
		cy.visit('http://example.com/', { timeout: 10000 });
	});

	it('should check currect url', () => {
		cy.url().should('include', 'http://example.com/');
	});

	it('soul wait for 3 seconds', () => {
		cy.wait(3000);
	});

	it.skip('should pause the execution', () => {
		cy.pause(); //allows to pause the tests/debug until on the interface click play button
	});

	it('should check for current element on the page', () => {
		cy.get('h1').should('be.visible');
	});
});
