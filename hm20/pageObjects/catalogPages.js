const Base = require('./base');
class CatalogPages extends Base {

    constructor(page) {
        super(page);
    }
    get nothingWasFoundMessage() {
        return ('.mn-layout__col-2__inner')
    }
    async listingBanners(title) {
        return this.page.locator(`//*[@class='listing-bnrs__bnr']//*[contains(text(),'${title}')]`)
    }
    async landingNavList(title) {
        return this.page.locator(`//*[@class='landing-nav-list__content']//*[contains(text(),'${title}')]`)
    }
    async subNavList(title) {
        return this.page.locator(`//*[@class=\'landing-subnav\']//*[contains(text(),'${title}')]`)
    }
    async subNavListClick(title) {
        await (await this.subNavList(title)).click();
    }
    async landingNavListClick(title) {
        await (await this.landingNavList(title)).click();
    }
    async listingBannersClick(title) {
        await (await this.listingBanners(title)).click();
    }
}
module.exports = CatalogPages;