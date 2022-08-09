describe('browser actions', () => {
	it('should load books website', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 });
		cy.url().should('include', 'index.html');
		cy.log('Website Loaded!');
        cy.reload();
		cy.log('Website reloaded!');
	});

	it('should click on travel category', () => {
		cy.get('a').contains('Travel').click();
		cy.get('h1').contains('Travel');
	});

	it('should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11);
	});

	it('should click on poetry category', () => {
		cy.get('a').contains('Poetry').click();
		cy.get('h1').contains('Poetry');
	});

	it('should click on Olio book and validade price', () => {
		cy.get('a').contains('Olio').click();
		cy.get('h1').contains('Olio');
		cy.get('.price_color').contains('£23.88');
	});
});
