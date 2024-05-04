const Base = require('./base');
class CatalogPages extends Base {

    specificCatalogProduct(title) {
        return cy.xpath(`//span[contains(text(),'${title}')]//parent::*[@class='link product-card__link']`)
    }
    get transitionField() {
        return cy.get(`.breadcrumbs__inner`)
    }
    get productDescription() {
        return cy.xpath(`//*[@class='b-description__container-col']`)
    }
    get nothingWasFoundMessage() {
        return cy.get('.mn-layout__col-2__inner')
    }
    get selectedFilters() {
        return cy.get(`.top-filters__sqcheckers--flat`)
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

    catalogProductClick(title) {
        this.specificCatalogProduct(title).click();
    }

}
module.exports =new CatalogPages();