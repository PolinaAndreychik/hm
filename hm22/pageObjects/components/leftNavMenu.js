const Base = require('../base');

class LeftNavMenu extends Base {

     getLeftNavMenuByTitle(itemName) {
        return cy.xpath(`//*[contains(@class,'nav__list__item ')][contains(text(),'${itemName}')]`)
    }
     getInnerLeftNavMenuByName(itemName) {
        return cy.xpath(`//*[@class='global-ppnavlist']//*[contains(text(),'${itemName}')]`)
    }
    getToTheSpecificInnerNavMenuItem(TitleName, InnerProductName) {
        this.getLeftNavMenuByTitle(TitleName).trigger('mouseover');
        this.getInnerLeftNavMenuByName(InnerProductName).click();
    }
     goToGeneralCatalog(TitleName) {
        this.getLeftNavMenuByTitle(TitleName).click();
    }
}

module.exports = new LeftNavMenu();