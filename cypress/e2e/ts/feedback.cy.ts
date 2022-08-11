describe('Demo Test', () => {
	it('Should submit feedback form', () => {
		cy.visitFeedbackpage();
		cy.submitFeedback('test', 'test@gmail.com', 'my subject', 'my comment');
	});
});
