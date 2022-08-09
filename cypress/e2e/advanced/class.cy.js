class BasePage {
	static loadHomePage() {
		cy.visit('https://devexpress.github.io/testcafe/example/');
	}

	static wait(number) {
		cy.wait(number);
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView();
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView();
	}
}

describe('Abstraction with Classes', () => {
	before(function () {
		//before all tests inside describe
		//setup test data or test context
		//seed or reset the database
		HomePage.loadHomePage();
	});

	after(function () {
		//runs after all tests inside decribe block are done
		// test clean up
		// clean cookies or localStorage
		cy.clearCookies;
	});

	beforeEach(function () {
		// runs before each it block in the describe
	});

	afterEach(function () {
		// runs after each it block in the describe
	});

	it('should scroll down and up on the page', () => {
		HomePage.scrollToBottom();
		HomePage.wait(2500);
		HomePage.scrollToTop();
		HomePage.wait(2000);
	});

	it.skip('2nd IT', () => {
		HomePage.scrollToBottom();
		HomePage.wait(2500);
		HomePage.scrollToTop();
		HomePage.wait(2000);
	});
});
