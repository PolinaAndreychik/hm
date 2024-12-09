// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  globalSetup: './helpers/globalSetUp',
  timeout: 2 * 60 * 1000,
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'retain-on-failure',
    headless: false,
    video: 'retain-on-failure',
    storageState: './helpers/LoginAuth.json'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

