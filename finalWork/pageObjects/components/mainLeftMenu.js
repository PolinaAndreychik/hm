const Base = require('../base');

class LeftNavMenu extends Base {
  constructor(page) {
    super(page);
  }
  async catalogTitle(itemName) {
    return this.page.locator(`//*[contains(@class,'nav__list__item ')][contains(text(),'${itemName}')]`);
  }
  async InnerCatalogProductName(itemName) {
    return this.page.locator(`//*[@class='global-ppnavlist']//*[contains(text(),'${itemName}')]`);
  }
  async getToTheSpecificInnerNavMenuItem(TitleName, InnerProductName) {
    await (await this.catalogTitle(TitleName)).hover();
    await this.customClick(this.InnerCatalogProductName(InnerProductName));
  }
}

module.exports = LeftNavMenu;
