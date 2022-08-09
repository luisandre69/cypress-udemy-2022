describe('Custom Commands', () => {
    it('should login to application using custom cypress command', () => {
        cy.visit('login.html')
        cy.login('username', 'password')
    });
});
