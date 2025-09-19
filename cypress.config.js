const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.family === "chromium") {
          launchOptions.args.push("--incognito");
          return launchOptions;
        }
      });
    },
    viewportWidth: 2000,
    viewportHeight: 1080,
    testIsolation: true,
    specPattern: 'cypress/integration/examples/*.js'
  },
});
