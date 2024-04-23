const Base = require('./base');
class CatalogPages extends Base {

    get catalogProduct() {
        return cy.xpath(`//*[contains(@class,'viewer-type-card--js-active')]`)
    }
    get nothingWasFoundMessage() {
        return cy.get('.mn-layout__col-2__inner')
    }
     listingBanners(title) {
        return cy.xpath(`//*[@class='listing-bnrs__bnr']//*[contains(text(),'${title}')]`)
    }
     landingNavList(title) {
        return cy.xpath(`//*[@class='landing-nav-list__content']//*[contains(text(),'${title}')]`)
    }
     subNavList(title) {
        return cy.xpath(`//*[@class=\'landing-subnav\']//*[contains(text(),'${title}')]`)
    }
    subNavListClick(title) {
        this.subNavList(title).click();
    }
     landingNavListClick(title) {
        this.landingNavList(title).click();
    }
     listingBannersClick(title) {
        this.listingBanners(title).click();
    }
}
module.exports =new CatalogPages();