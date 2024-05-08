const Base = require('../base');

class LeftNavMenu extends Base {

    async getLeftNavMenuByTitle(itemName) {
        return $(`//*[contains(@class,'nav__list__item') and contains(text(),'${itemName}')]`)
    }
    async getInnerLeftNavMenuByName(itemName) {
        return $(`//*[@class='global-ppnavlist']//*[contains(text(),'${itemName}')]`)
    }
    async getToTheSpecificInnerNavMenuItem(TitleName, InnerProductName) {
      await (await this.getLeftNavMenuByTitle(TitleName)).moveTo();
       await (await this.getInnerLeftNavMenuByName(InnerProductName)).click();
    }

}

module.exports = new LeftNavMenu();