const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    baseUrl: 'https://serverest.dev',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(_on, config) {
      return config
    }
  }
})