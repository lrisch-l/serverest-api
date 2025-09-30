const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true, // Enable video recording for each test run
  reporter: 'cypress-mochawesome-reporter', // Use Mochawesome reporter with embedded screenshots
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory to save the report
    reportPageTitle: 'Serverest API Test Report', // Custom title for the HTML report
    embeddedScreenshots: true, // Embed screenshots directly into the report
    inlineAssets: true, // Include styles and scripts inline for standalone viewing
    charts: true, // Display charts for test statistics
    overwrite: false, // Do not overwrite previous reports
    html: true, // Generate HTML report
    json: true // Generate JSON report
  },
  e2e: {
    baseUrl: 'https://serverest.dev', // Base URL for all tests
    supportFile: 'cypress/support/e2e.js', // Path to support file
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Pattern to locate test files
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // Register Mochawesome plugin
      return config;
    }
  }
});