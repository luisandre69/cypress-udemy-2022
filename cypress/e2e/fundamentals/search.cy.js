describe('SearchBox Test', () => {
    before(function () {
        cy.visit('index.html')
    })

    it('should type into searchbox and submit wviwth perssing enter', () => {
        cy.get('#searchTerm').type('some text {enter}')
    });

    it('should show search results page', () => {
        cy.get('h2').contains('Search Results:')
    });
 })