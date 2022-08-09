describe('Write / Read Data to JSON / Text file', () => {
	it('should write data into JSON', () => {
		cy.writeFile('testlog.json', { name: 'Luis', age: 21 });
	});

	it('should write data into text file', () => {
		cy.writeFile('testlog.txt', 'Hello World!');
	});

	it('should read and verify data from JSON', () => {
		cy.readFile('testlog.json').its('age').should('eq', 21);
	});

	it('should read and verify data from text file', () => {
		cy.readFile('testlog.txt').should('include', 'Hello World');
	});

	it('should read and verify browser document content', () => {
		cy.visit('https://www.example.com');
		cy.wait(2000);
		cy.document().its('contentType').should('eq', 'text/html');
		cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
	});
});
