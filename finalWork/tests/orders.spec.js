const HomePage = require('../pageObjects/homePage');
const Header = require('../pageObjects/components/header');
const { test, expect } = require('@playwright/test');
const { MESSAGE, PAYMENT, URL, SMALL_CATALOG, ADDRESS} = require('../helpers/constants');
const CheckoutPage = require('../pageObjects/checkoutPage');
const PersonalMenu = require('../pageObjects/components/personalMenu');

test.describe('Oz.by e2e order manipulation tests', async function () {
  let homePage;
  let header;
  let checkoutPage;
  let personalMenu;

  test.beforeEach(async ({ page }) => {
    await page.goto(URL.MAIN);
    homePage = new HomePage(page);
    header = new Header(page);
    checkoutPage = new CheckoutPage(page);
    personalMenu = new PersonalMenu(page);
  });
  test(`Order confirmation popup should appear`, async ({ page }) => {
    await homePage.click(homePage.unevenProductsAddToCart(SMALL_CATALOG.HOME, SMALL_CATALOG.FIRST_ROW, SMALL_CATALOG.POSITION_THREE));
    await homePage.click(homePage.unevenProductsAddToCart(SMALL_CATALOG.ENTERTAINMENT, SMALL_CATALOG.SECOND_ROW, SMALL_CATALOG.POSITION_ONE));
    await homePage.click(page.locator(header.checkoutButton));
    await homePage.click(page.locator(checkoutPage.chooseAllProducts));
    await checkoutPage.chooseDeliveryOptions(ADDRESS.DELIVERY, PAYMENT.ERIP);
    await homePage.click(page.locator(checkoutPage.confirmOrderButton));
    await expect(await page.locator(checkoutPage.orderConfirmationPopup)).toBeAttached();
    await expect(await page.locator(checkoutPage.orderConfirmationPopup)).toContainText(ADDRESS.DELIVERY && PAYMENT.ERIP);
  });
  test(`Confirmed order should be on my personal page`, async ({ page }) => {
    await header.goToOrderedProducts();
    await homePage.click(page.locator(personalMenu.orderedProducts));
    await expect(await page.locator(personalMenu.orderInfo)).toBeVisible();
  });
  test(`Confirmed order should be cancelled`, async ({ page }) => {
    await header.goToOrderedProducts();
    await homePage.click(page.locator(personalMenu.orderedProducts));
    await personalMenu.cancelOrderConfirmation();
    await expect(await page.locator(personalMenu.orderStatus)).toContainText(MESSAGE.ORDER_CANCELLED);
    await expect(await page.locator(personalMenu.cancelledOrderPopup)).toBeVisible();
  });
});
