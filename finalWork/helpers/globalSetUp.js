const HomePage = require('../pageObjects/homePage');
const LoginPage = require('../pageObjects/loginPage');
const Waiter = require('../helpers/waiter');
const Header = require('../pageObjects/components/header');
const { expect, chromium } = require('@playwright/test');
const { URL, LOGIN } = require('../helpers/constants');
const loginPage = new LoginPage();
const waiter = new Waiter();
const header = new Header();
const homePage = new HomePage();

async function globalSetup() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(URL.LOGIN_PAGE);
  await homePage.customClick(page.locator(loginPage.logInByEmail));
  await homePage.customFill(page.locator(loginPage.emailField), LOGIN.VALID_EMAIL);
  await homePage.customFill(page.locator(loginPage.passwordField), LOGIN.VALID_PASSWORD);
  await waiter.waitForElementToBeReClicked(page.locator(loginPage.inactiveSubmitLogInButton), page.locator(loginPage.activeSubmitLogInButton));
  await expect(await page.locator(header.userBarMyOzButton)).toBeVisible();
  await page.context().storageState({ path: `./LoginAuth.json` });
  await browser.close();
}

module.exports = globalSetup;
