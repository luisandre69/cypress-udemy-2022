import { cyan } from 'color-name';
describe('Keyboard press simulation', () => {
	it('should submit searchbox with pressing enter', () => {
		cy.visit('index.html');
		cy.get('#searchTerm').type('jusit some text {enter}');
	});
});
