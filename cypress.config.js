const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 2000,
    viewportHeight: 1080,
    specPattern : 'cypress/integration/examples/*.js'
  },
});
