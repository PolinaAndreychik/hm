const Base = require('../base');

class LeftNavMenu extends Base {
    constructor(page) {
        super(page);
    }
    async getLeftNavMenuByTitle(itemName) {
        return this.page.locator(`//*[contains(@class,'nav__list__item ')][contains(text(),'${itemName}')]`)
    }
    async getInnerLeftNavMenuByName(itemName) {
        return this.page.locator(`//*[@class='global-ppnavlist']//*[contains(text(),'${itemName}')]`)
    }
    async getToTheSpecificInnerNavMenuItem(TitleName, InnerProductName) {
        await (await this.getLeftNavMenuByTitle(TitleName)).hover();
        await (await this.getInnerLeftNavMenuByName(InnerProductName)).click();
    }
    async goToGeneralCatalog(TitleName) {
        await (await this.getLeftNavMenuByTitle(TitleName)).click();
    }
}

module.exports =  LeftNavMenu;



