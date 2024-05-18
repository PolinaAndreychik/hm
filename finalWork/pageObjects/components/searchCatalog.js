const Base = require('../base');

class SearchCatalog extends Base {
  constructor(page) {
    super(page);
  }
  async categoryFilters(title) {
    return this.page.locator(`//*[@class='digi-facet-options__item']//*[contains(text(),'${title}')]`);
  }
  get nothingWasFoundMessage() {
    return (`.digi-wrapper .digi-title-empty__wrapper`);
  }
  get changeTheRequest() {
    return (`.digi-wrapper .digi-title-empty__button`);
  }
  async clarifySearchedProduct(title) {
    return this.page.locator(`//*[@class='digi-main-results-actions']//*[contains(text(),'${title}')]`);
  }
}
module.exports = SearchCatalog;
