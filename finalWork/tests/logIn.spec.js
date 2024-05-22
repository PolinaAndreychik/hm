const HomePage = require('../pageObjects/homePage');
const LoginPage = require('../pageObjects/loginPage');
const Header = require('../pageObjects/components/header');
const Waiter = require('../helpers/waiter');
const { test, expect } = require('@playwright/test');
const { URL, LOGIN, MESSAGE } = require('../helpers/constants');

test.describe('Oz.by e2e log in tests', async function () {
  let homePage;
  let loginPage;
  let header;
  let waiter;
  let inactiveButton;
  let activeButton;

  test.beforeEach(async ({ page, context }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    header = new Header(page);
    waiter = new Waiter(page);
    inactiveButton = page.locator(loginPage.inactiveSubmitLogInButton);
    activeButton = page.locator(loginPage.activeSubmitLogInButton);
    await context.clearCookies();
  });

  test('log in with not existing Email with password should fail', async ({ page }) => {
    await page.goto(URL.MAIN);
    await homePage.click(await page.locator(homePage.loginButton));
    await loginPage.authorizeByEmail(LOGIN.NON_EXISTING_EMAIL, LOGIN.NON_EXISTING_PASSWORD);
    await waiter.waitForElementToBeReClicked(inactiveButton, activeButton);
    await expect(await page.locator(loginPage.errorLogInMessage)).toContainText(MESSAGE.NOT_REGISTERED);
  });
  test('log in should go well', async ({ page }) => {
    await page.goto(URL.MAIN);
    await homePage.click(await page.locator(homePage.loginButton));
    await loginPage.authorizeByEmail(LOGIN.VALID_EMAIL, LOGIN.VALID_PASSWORD);
    await waiter.waitForElementToBeReClicked(inactiveButton, activeButton);
    await expect(await page.locator(header.userBarMyOzButton)).toBeVisible();
  });
  test('log in by Invalid Email with optional password should fail', async ({ page }) => {
    await page.goto(URL.LOGIN_PAGE);
    await loginPage.authorizeByEmail(LOGIN.INVALID_EMAIL, LOGIN.NON_EXISTING_PASSWORD);
    await homePage.click(inactiveButton);
    await expect(await page.locator(loginPage.errorLogInMessage)).toContainText(MESSAGE.PROVIDE_CORRECT_EMAIL);
  });
  test('log in with password only should fail', async ({ page }) => {
    await page.goto(URL.LOGIN_PAGE);
    await loginPage.authorizeByEmail(LOGIN.NO_DATA, LOGIN.NON_EXISTING_PASSWORD);
    await homePage.click(inactiveButton);
    await expect(await page.locator(loginPage.errorLogInMessage)).toContainText(MESSAGE.PROVIDE_EMAIL);
  });

  test('log in with Email only should fail', async ({ page }) => {
    await page.goto(URL.LOGIN_PAGE);
    await loginPage.authorizeByEmail(LOGIN.NON_EXISTING_EMAIL, LOGIN.NO_DATA);
    await homePage.click(inactiveButton);
    await expect(await page.locator(loginPage.errorLogInMessage)).toContainText(MESSAGE.PROVIDE_PASSWORD);
  });
  test('sign up with no phone number should fail', async ({ page }) => {
    await page.goto(URL.LOGIN_PAGE);
    await loginPage.signUpByPhoneNumber(LOGIN.NO_DATA);
    await expect(await page.locator(loginPage.errorSignUpMessage)).toContainText( MESSAGE.MUST_CONTAIN_SEVEN_DIGITS);
  });

  test('sign up with Invalid phone number should fail', async ({ page }) => {
    await page.goto(URL.LOGIN_PAGE);
    await loginPage.signUpByPhoneNumber(LOGIN.INVALID_PHONE_NUMBER);
    await expect(await page.locator(loginPage.errorSignUpMessage)).toContainText(MESSAGE.PROVIDE_CORRECT_PHONE_NUMBER);
  });
});
