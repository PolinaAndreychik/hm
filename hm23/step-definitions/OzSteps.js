const {Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const homePage = require('../OzPageObjects/homePage');
const catalogPages = require('../OzPageObjects/catalogPages')
const filters = require('../OzPageObjects/components/filters');
const leftNavMenu = require('../OzPageObjects/components/leftNavMenu');

Given(/^I navigate to "(.*)"$/, async function(url) {
    await homePage.navigate(url);
});

When (/^I move to left menu title "(.*)" and click on specific product "(.*)"$/, async function(title, innerProduct) {
    await leftNavMenu.getToTheSpecificInnerNavMenuItem(title, innerProduct);
});

When (/^I select default filters "(.*)"$/, async function(filter) {
  await homePage.click(await filters.filtersSectionSpecificFilter(filter));
});

When (/^I select city "(.*)"$/, async function(cityName) {
   await homePage.click(await filters.getAvailabilityInStoresCityFilter(cityName));
});

When (/^I select street "(.*)"$/, async function(streetName) {
    await homePage.click(await filters.getAvailabilityInStoresStreetFilter(streetName));
});

When (/^I apply filters$/, async function() {
   await homePage.click(await filters.applyFiltersButton);
});

When (/^I clear filters$/, async function() {
    await homePage.click(await filters.clearFiltersButton);

});

When (/^I arrange products by expensive first$/, async function() {
    await homePage.click(await filters.topFilterArrange);
    await homePage.click(await filters.topFilterExpensiveFirst);
});

When (/^I arrange products by rating$/, async function() {
    await homePage.click(await filters.topFilterArrange);
    await homePage.click(await filters.topFilterArrangeByRating);
});

When(/^I go to catalog (.*)$/, async (title) => {
    await homePage.click(await leftNavMenu.getLeftNavMenuByTitle(title));
})
When(/^I select product from navigation list (.*)$/, async function(title) {
    await homePage.click(await catalogPages.subNavList(title))
})
When(/^I select product from head navigation (.*)$/, async function(title) {
    await homePage.click(await catalogPages.landingNavList(title))
})
When(/^I go to product page (.*)$/, async function(productName) {
    await homePage.click(await catalogPages.specificCatalogProduct(productName))
})
Then (/^I should see filters (.*) and (.*) on product page$/, async function(firstFilter, secondFilter) {
    await expect(await catalogPages.productDescription.getText()).toContain(firstFilter && secondFilter);
})

Then (/^I should see catalog transitions (.*) and (.*)$/, async function(catalogPageOne, catalogPageTwo) {
    await expect(await catalogPages.transitionField.getText()).toContain(catalogPageOne && catalogPageTwo);
})

Then (/^I should find no products (.*)$/, async function(message) {
    await expect(await catalogPages.nothingWasFoundMessage.getText()).toContain(message);
})
Then (/^I should see current url "(.*)"$/, async function(currentURL) {
    await expect(await browser.getUrl()).toContain(currentURL);

})
Then (/^I should see default url "(.*)"$/, async function(defaultURL) {
    await expect(await browser.getUrl()).toContain(defaultURL);
})

Then (/^I should see selected filters (.*) and (.*)$/, async function(firstFilter, secondFilter) {
    await expect(await catalogPages.selectedFilters.getText()).toContain(firstFilter && secondFilter);
})