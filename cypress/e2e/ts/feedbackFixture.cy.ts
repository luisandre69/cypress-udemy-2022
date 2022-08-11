describe('Demo Test', () => {
	it('Should submit feedback form', () => {
		cy.visitFeedbackpage();
		cy.waitForSeconds(5);
		cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
			cy.submitFeedback(name, email, subject, message);
		});
	});
});
