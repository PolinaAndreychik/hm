const Base = require('./base');

class HomePage extends Base {
  constructor(page) {
    super(page);
  }
  async productsFiltersButton(title) {
    return this.page.locator(`//*[contains(@id,'${title}')]//*[@class='mpgs-cat__link__span']`);
  }
  async selectProductsFilters(filter) {
    return this.page.locator(`//*[@class='pp-showcat']//*[contains(text(),'${filter}')]`);
  }
  get loginButton() {
    return ('.user-bar__item .link.user-bar__item');
  }

  async evenProductsClick(title, rowNumber, number) {
    return this.page.locator(`//*[contains(@id,'${title}')]//*[contains(@class,'${rowNumber}row')]//*[contains(@class,'_border_radius')]//parent::*[contains(@class,'li_${number}')]`);
  }

  async unevenProductsAddToCart(title, rowNumber, number) {
    return this.page.locator(`//*[contains(@id,'${title}')]//*[contains(@class,'mpgs-${rowNumber}row')]//*[contains(@class,'li_${number}')]//*[@class="cost"]`);
  }
}

module.exports = HomePage;
