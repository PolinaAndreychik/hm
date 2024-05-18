const HomePage = require('../pageObjects/homePage');
const Header = require('../pageObjects/components/header');
const { test, expect } = require('@playwright/test');
const { KEYBOARD, PRODUCTS, DATE, URL} = require('../helpers/constants');
const CatalogPages = require('../pageObjects/catalogPages');
const SearchCatalog = require('../pageObjects/components/searchCatalog');

test.describe('Oz.by e2e search tests', async function () {
  let homePage;
  let header;
  let catalogPages;
  let searchCatalog;

  test.beforeEach(async ({ page, context }) => {
    await page.goto(URL.MAIN);
    homePage = new HomePage(page);
    header = new Header(page);
    catalogPages = new CatalogPages(page);
    searchCatalog = new SearchCatalog(page);
    await context.clearCookies();
  });
  test(`Search page should contain searched products`, async ({ page }) => {
    await homePage.customFill(page.locator(header.searchField), PRODUCTS.AUTHOR);
    await page.keyboard.press(KEYBOARD.ENTER);
    await homePage.customClick(searchCatalog.categoryFilters(DATE._2021_DATE));
    await expect(await page.locator(catalogPages.allProducts)).toContainText(PRODUCTS.AUTHOR);
    await expect(await page.locator(catalogPages.allProducts)).toContainText(DATE._2021_DATE);
  });
  test(`Searching should find no products and suggests to change the request`, async ({ page }) => {
    await homePage.customFill(page.locator(header.searchField), PRODUCTS.INVALID);
    await page.keyboard.press(KEYBOARD.ENTER);
    await expect(await page.locator(searchCatalog.nothingWasFoundMessage)).toBeVisible();
    await homePage.customClick(page.locator(searchCatalog.changeTheRequest));
    await expect(await page.locator(header.searchField)).toBeEditable();
  });
  test(`Often searched products should be found after clarifying`, async ({ page }) => {
    await homePage.customClick(page.locator(header.searchField));
    await homePage.customClick(header.oftenSearchedProducts(PRODUCTS.BOOK_THREE));
    await homePage.customClick(searchCatalog.clarifySearchedProduct(PRODUCTS.BOOK_THREE_TITLE));
    await expect(await page.locator(catalogPages.allProducts)).toContainText(PRODUCTS.BOOK_THREE_TITLE_CAPITAL);
  });
});
