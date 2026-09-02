// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
   timeout: 30 * 1000,
//    So why keep expcet timeout it in the config at all if it does nothing? Two reasons, both stylistic rather than functional:
// Self-documenting — anyone reading your config sees the assertion timeout explicitly, instead of having to know Playwright's defaults by heart.
// Future-proofing — if Playwright ever changes its default in a future version, your framework's behavior stays locked to 5s regardless, instead of silently shifting.
    expect: {
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 4 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:[ 
    ['html',{ outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['list']
   ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
     baseURL: process.env.URL||'https://testautomationpractice.blogspot.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
     screenshot: 'only-on-failure',

// actionTimeout (10s): Max wait for a single UI action (click, fill, check, select) to complete, 
// including Playwright's auto-wait for the element to be visible/stable/enabled first. Kept explicit so a stuck action fails fast (10s) 
// instead of silently eating the full 30s test timeout.
// navigationTimeout (15s): Max wait for page navigations (goto, link clicks that redirect,
//  form submits) to finish loading. Set separately and longer than actionTimeout because navigations 
// involve network/server round-trips and are naturally slower than in-page actions — using one shared timeout for 
// both would either make stuck clicks wait too long or fail legit slow page loads unfairly.


     actionTimeout: 10 * 1000,
    navigationTimeout: 15 * 1000,

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

