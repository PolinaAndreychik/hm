const HomePage = require('../pageObjects/homePage');
const Header = require('../pageObjects/components/header');
const { test, expect } = require('@playwright/test');
const { URL, LEFT_NAV_MENU, PRICE, SMALL_CATALOG, MESSAGE, CATALOG_NAVIGATION, PRODUCTS } = require('../helpers/constants');
const CheckoutPage = require('../pageObjects/checkoutPage');
const CatalogPages = require('../pageObjects/catalogPages');
const MainLeftMenu = require('../pageObjects/components/mainLeftMenu');

test.describe('Oz.by e2e cart tests', async function () {
  let homePage;
  let header;
  let checkoutPage;
  let catalogPages;
  let mainLeftMenu;

  test.beforeEach(async ({ page }) => {
    await page.goto(URL.MAIN);
    homePage = new HomePage(page);
    header = new Header(page);
    checkoutPage = new CheckoutPage(page);
    catalogPages = new CatalogPages(page);
    mainLeftMenu = new MainLeftMenu(page);
  });
  test(`Checkout page should have message "В корзине пусто"`, async ({ page }) => {
    await homePage.click(homePage.unevenProductsAddToCart(SMALL_CATALOG.HOME, SMALL_CATALOG.FIRST_ROW, SMALL_CATALOG.POSITION_ONE));
    await homePage.click(homePage.evenProductsClick(SMALL_CATALOG.ENTERTAINMENT, SMALL_CATALOG.SECOND_ROW, SMALL_CATALOG.POSITION_FOUR));
    await homePage.click(page.locator(catalogPages.addProductToCartOnProductPage));
    await homePage.click(page.locator(header.checkoutButton));
    await checkoutPage.deleteProductsFromTheCart();
    await expect(await page.locator(checkoutPage.messageOfEmptyCart)).toContainText(MESSAGE.CART_IS_EMPTY);
  });
  test(`Checkout page should have selected products`, async ({ page }) => {
    await homePage.click(homePage.productsFiltersButton(SMALL_CATALOG.HOME));
    await homePage.click(homePage.selectProductsFilters(SMALL_CATALOG.INNER_KITCHEN));
    await homePage.click(catalogPages.landingNavList(CATALOG_NAVIGATION.CUPS));
    await homePage.click(catalogPages.addCatalogProductToCart(PRODUCTS.CUP_ONE));
    await homePage.click(catalogPages.addCatalogProductToCart(PRODUCTS.CUP_TWO));
    await homePage.click(page.locator(header.checkoutButton));
    await expect(await page.locator(checkoutPage.cartsConsistency)).toContainText(PRODUCTS.CUP_ONE && PRODUCTS.CUP_TWO);
    await checkoutPage.deleteProductsFromTheCart();
  });
  test(`Checkout page should have right number of selected products`, async ({ page }) => {
    await homePage.click(homePage.unevenProductsAddToCart(SMALL_CATALOG.HOME, SMALL_CATALOG.FIRST_ROW, SMALL_CATALOG.POSITION_THREE));
    await homePage.click(homePage.unevenProductsAddToCart(SMALL_CATALOG.ENTERTAINMENT, SMALL_CATALOG.SECOND_ROW, SMALL_CATALOG.POSITION_ONE));
    await homePage.click(homePage.evenProductsClick(SMALL_CATALOG.HOME, SMALL_CATALOG.FIRST_ROW, SMALL_CATALOG.POSITION_TWO));
    await homePage.click(page.locator(catalogPages.addProductToCartOnProductPage));
    await homePage.click(page.locator(header.checkoutButton));
    await expect(await page.locator(checkoutPage.numberOfProducts)).toContainText(MESSAGE.TOTAL_PRODUCTS_NUMBER);
    await checkoutPage.deleteProductsFromTheCart();
  });
  test(`Checkout page should have the right sum of the prices`, async ({ page }) => {
    await mainLeftMenu.getToTheSpecificInnerNavMenuItem(LEFT_NAV_MENU.ART, LEFT_NAV_MENU.INNER_ENGRAVINGS);
    await homePage.click(catalogPages.addCatalogProductToCart(PRODUCTS.ENGRAVING_ONE));
    await homePage.click(catalogPages.addCatalogProductToCart(PRODUCTS.ENGRAVING_TWO));
    await homePage.click(catalogPages.addCatalogProductToCart(PRODUCTS.ENGRAVING_THREE));
    await page.goto(URL.MAIN);
    await homePage.click(page.locator(header.searchField));
    await homePage.click(header.popularProducts(PRODUCTS.BOOK_TWO));
    await homePage.click(page.locator(catalogPages.addProductToCartOnProductPage));
    await homePage.click(page.locator(header.checkoutButton));
    await expect(await page.locator(checkoutPage.cartPrice)).toContainText(PRICE.CART);
    await checkoutPage.deleteProductsFromTheCart();
  });
});
