const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  reporter: "cypress-mochawesome-reporter", // Use Mochawesome reporter with embedded screenshots
  reporterOptions: {
    reportDir: "cypress/reports",
    reportFilename: "index",
    overwrite: true,
    html: true,
    json: true,
    inlineAssets: true,
    charts: true,
    embeddedScreenshots: true,
    reportPageTitle: "Serverest API Test Report",
  },
  e2e: {
    baseUrl: "https://serverest.dev", // Base URL for all tests
    supportFile: "cypress/support/e2e.js", // Path to support file
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Pattern to locate test files
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); // Register Mochawesome plugin
      return config;
    },
  },
});
