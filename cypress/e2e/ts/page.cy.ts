describe('Visit Pages', () => {
    it('Visit Homepage', () => {
        cy.visitHomepage();
    });

    it('Visit visitLoginpage', () => {
			cy.visitLoginpage();
		});

    it('Visit visitFeedbackpage', () => {
        cy.visitFeedbackpage();
		});
});
