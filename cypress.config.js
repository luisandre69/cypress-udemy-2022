const { defineConfig } = require('cypress');

module.exports = defineConfig({
	reporter: 'cypress-mochawesome-reporter',
	e2e: {
		// specPattern: '**/*.cy.js',
		specPattern: '**/*.cy.ts',
		baseUrl: 'http://zero.webappsecurity.com',
		viewportHeight: 1000,
		viewportHeight: 600,
		animationDistanceThreshold: 20,
		defaultCommandTimeout: 5000,
		execTimeout: 60000,
		pageLoadTimeout: 60000,
		requestTimeout: 15000,
		responseTimeout: 15000,
		video: false,
		failOnStatusCode: false,
		reportDir: 'cypress/reports',
		// Command timeout overridden for E2E tests
		setupNodeEvents(on, config) {
			require('cypress-mochawesome-reporter/plugin')(on);
		},
	},
});
