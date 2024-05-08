const {Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const leftNavMenu = require('../WebDriverIoPageObjects/components/leftNavMenu');
const homePage = require("../WebDriverIoPageObjects/homePage");
const informationPage = require("../WebDriverIoPageObjects/informationPage");

Given(/^I navigate to {string}$/, async function(url) {
    await homePage.navigate(url);
});

When(/^I go to page "(.*)"$/, async function(title) {
    await homePage.click(await homePage.navBarButton(title));
});
When(/^I move to first category on menu (.*)$/, async function(title) {
    await homePage.click(await (await leftNavMenu.navMenuFirstLevel(title)));
})
When(/^I move to second category on menu (.*)$/, async function(title) {
    await homePage.click(await (await leftNavMenu.navMenuSecondLevel(title)));
})
When(/^I move to next page$/, async function() {
    await homePage.click(await (await informationPage.nextButton));
})
Then (/^I should see current page url (.*)$/, async function(currentURL) {
    await expect(await browser.getUrl()).toContain(currentURL);

})
Then (/^I should see another page url (.*)$/, async function(defaultURL) {
    await expect(await browser.getUrl()).toContain(defaultURL);
})