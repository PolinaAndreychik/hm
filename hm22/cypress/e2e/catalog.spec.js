const {AVAILABILITY, MESSAGE, BRACELETS, BOOK ,COMICS, BLANKET, URL, LEFT_NAV_MENU, SWEETS, CATALOG_NAVIGATION } = require('../../helpers/constants');
const homePage = require('../../pageObjects/homePage');
const leftNavMenu = require('../../pageObjects/components/leftNavMenu');
const filters = require('../../pageObjects/components/filters');
const catalogPages = require('../../pageObjects/catalogPages');


describe('Oz.by e2e catalog tests', () => {
    it.skip('catalog page should contain selected filters', () => {
            homePage.navigate(URL.MAIN)
            leftNavMenu.getToTheSpecificInnerNavMenuItem(LEFT_NAV_MENU.HOME, LEFT_NAV_MENU.INNER_BLANKET);
            filters.setCostFilters(BLANKET.MIN_PRICE, BLANKET.MAX_PRICE);
            filters.selectFilters(BLANKET.DESIGN);
            filters.selectFilters(BLANKET.SIZE);
            filters.setPlaceFilters(AVAILABILITY.CITY_BLANKET, AVAILABILITY.STREET_BLANKET );
            filters.applyFilters();
            filters.setTopFilterArrangeExpensiveFirst();
            cy.validateElementsText(catalogPages.selectedFilters, BLANKET.DESIGN && BLANKET.SIZE && BLANKET.MAX_PRICE);
    })
    it.skip(`page url should change to default one after clearing filters`,() => {
            homePage.navigate(URL.MAIN)
            leftNavMenu.getToTheSpecificInnerNavMenuItem(LEFT_NAV_MENU.SWEETS, LEFT_NAV_MENU.INNER_CANDIES);
            filters.setTopFilterArrangeByRating();
            filters.selectFilters(SWEETS.TASTE);
            filters.selectFilters(AVAILABILITY.NOT_ON_SALE);
            filters.setPlaceFilters(AVAILABILITY.CITY_SWEETS, AVAILABILITY.STREET_SWEETS);
            filters.applyFilters();
            cy.url().should('contain', URL.FILTERED_CANDIES);
            filters.clearFilters();
            cy.url().should('equal', URL.DEFAULT_CANDIES);
    })
    it.skip('Product description should contain selected filters', () => {
            homePage.navigate(URL.MAIN)
            leftNavMenu.goToGeneralCatalog(LEFT_NAV_MENU.ART);
            catalogPages.subNavListClick(CATALOG_NAVIGATION.COMICS);
            catalogPages.landingNavListClick(CATALOG_NAVIGATION.BESTSELLERS);
            filters.selectFilters(COMICS.PUBLISHER);
            filters.selectFilters(COMICS.RELEASE_DATE);
            filters.setPlaceFilters(AVAILABILITY.CITY_COMICS, AVAILABILITY.STREET_COMICS);
            filters.applyFilters();
            catalogPages.catalogProductClick(BOOK.TITLE);
            cy.validateElementsText(catalogPages.productDescription, COMICS.PUBLISHER && COMICS.RELEASE_DATE);
    })
    it('Transition field should contain selected catalog pages', () => {
            homePage.navigate(URL.MAIN)
            leftNavMenu.goToGeneralCatalog(LEFT_NAV_MENU.COSMETICS);
            catalogPages.landingNavListClick(CATALOG_NAVIGATION.PERFUMERY);
            catalogPages.subNavListClick(CATALOG_NAVIGATION.WOMEN_PERFUME);
            cy.validateElementsText(catalogPages.transitionField, CATALOG_NAVIGATION.COSMETICS && CATALOG_NAVIGATION.PERFUMERY && CATALOG_NAVIGATION.WOMEN_PERFUME);

    })
        it('Product page should have nothing', () => {
            homePage.navigate(URL.MAIN)
            leftNavMenu.goToGeneralCatalog(LEFT_NAV_MENU.SOUVENIRS);
            catalogPages.landingNavListClick(CATALOG_NAVIGATION.JEWELRY);
            catalogPages.landingNavListClick(CATALOG_NAVIGATION.BRACELETS);
            filters.selectFilters(BRACELETS.MATERIAL);
            filters.selectFilters(BRACELETS.BRAND);
            filters.selectFilters(BRACELETS.INSET);
            filters.applyFilters();
            cy.validateElementsText(catalogPages.nothingWasFoundMessage, MESSAGE.NOTHING_WAS_FOUND);
    })
})
