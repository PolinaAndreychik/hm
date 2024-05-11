const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2cp1cw',
  viewportWidth: 1920,
  viewportHeight: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/**/*.spec.js',
  },
});
