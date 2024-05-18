const {PRICE, ADDRESS, MESSAGE, BRACELETS, PRODUCTS, COMICS, DATE, BLANKET, URL, LEFT_NAV_MENU, SWEETS, CATALOG_NAVIGATION } = require('../helpers/constants');
const { test, expect } = require('@playwright/test');
const HomePage = require('../pageObjects/homePage');
const MainLeftMenu = require('../pageObjects/components/mainLeftMenu');
const Filters = require('../pageObjects/components/filters');
const CatalogPages = require('../pageObjects/catalogPages');

test.describe('Oz.by e2e catalog tests', async function () {
  let homePage;
  let mainLeftMenu;
  let filters;
  let catalogPages;

  test.beforeEach(async ({ page, context }) => {
    await page.goto(URL.MAIN);
    homePage = new HomePage(page);
    mainLeftMenu = new MainLeftMenu(page);
    filters = new Filters(page);
    catalogPages = new CatalogPages(page);
    await context.clearCookies();
  });

  test('catalog page should contain selected filters', async ({ page }) => {
    await mainLeftMenu.getToTheSpecificInnerNavMenuItem(LEFT_NAV_MENU.HOME, LEFT_NAV_MENU.INNER_BLANKET);
    await filters.setCostFilters(PRICE.BLANKET_MIN_PRICE, PRICE.BLANKET_MAX_PRICE);
    await homePage.customClick(filters.selectSpecificFilter(BLANKET.DESIGN));
    await homePage.customClick(filters.selectSpecificFilter(BLANKET.SIZE));
    await filters.setPlaceFilters(ADDRESS.CITY_BLANKET, ADDRESS.STREET_BLANKET);
    await homePage.customClick(page.locator(filters.applyFiltersButton));
    await filters.setTopFilterArrangeExpensiveFirst();
    await expect(await page.locator(catalogPages.selectedFilters)).toContainText(BLANKET.DESIGN && BLANKET.SIZE && BLANKET.MAX_PRICE);
  });
  test(`page url should change to default one after clearing filters`, async ({ page }) => {
    await mainLeftMenu.getToTheSpecificInnerNavMenuItem(LEFT_NAV_MENU.SWEETS, LEFT_NAV_MENU.INNER_CANDIES);
    await filters.setTopFilterArrangeByRating();
    await homePage.customClick(filters.selectSpecificFilter(SWEETS.TASTE));
    await homePage.customClick(filters.selectSpecificFilter(ADDRESS.NOT_ON_SALE));
    await filters.setPlaceFilters(ADDRESS.CITY_SWEETS, ADDRESS.STREET_SWEETS);
    await homePage.customClick(page.locator(filters.applyFiltersButton));
    await expect(page.url()).toContain(URL.FILTERED_CANDIES);
    await homePage.customClick(page.locator(filters.clearFiltersButton));
    await expect(page.url()).toEqual(URL.DEFAULT_CANDIES);
  });
  test('Product description should contain selected filters', async ({ page }) => {
    await homePage.customClick(mainLeftMenu.catalogTitle(LEFT_NAV_MENU.ART));
    await homePage.customClick(catalogPages.subNavList(CATALOG_NAVIGATION.COMICS));
    await homePage.customClick(catalogPages.landingNavList(CATALOG_NAVIGATION.BESTSELLERS));
    await homePage.customClick(filters.selectSpecificFilter(COMICS.PUBLISHER));
    await homePage.customClick(filters.selectSpecificFilter(DATE._2023_DATE));
    await filters.setPlaceFilters(ADDRESS.CITY_COMICS, ADDRESS.STREET_COMICS);
    await homePage.customClick(page.locator(filters.applyFiltersButton));
    await homePage.customClick(catalogPages.specificCatalogProduct(PRODUCTS.BOOK_ONE));
    await expect(await page.locator(catalogPages.productDescription)).toContainText(COMICS.PUBLISHER && COMICS.RELEASE_DATE);
  });

  test('Product page should have nothing', async ({ page }) => {
    await homePage.customClick(mainLeftMenu.catalogTitle(LEFT_NAV_MENU.SOUVENIRS));
    await homePage.customClick(catalogPages.landingNavList(CATALOG_NAVIGATION.JEWELRY));
    await homePage.customClick(catalogPages.landingNavList(CATALOG_NAVIGATION.BRACELETS));
    await homePage.customClick(filters.selectSpecificFilter(BRACELETS.MATERIAL));
    await homePage.customClick(filters.selectSpecificFilter(BRACELETS.BRAND));
    await filters.setCostFilters(PRICE.BRACELET_MIN_PRICE, PRICE.MAX);
    await homePage.customClick(page.locator(filters.applyFiltersButton));
    await expect(await page.locator(catalogPages.nothingWasFoundMessage)).toContainText(MESSAGE.NOTHING_WAS_FOUND);
  });
});
