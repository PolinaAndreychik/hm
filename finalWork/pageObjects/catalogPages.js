const Base = require('./base');
class CatalogPages extends Base {
  constructor(page) {
    super(page);
  }
  async specificCatalogProduct(title) {
    return this.page.locator(`//span[contains(text(),'${title}')]//parent::*[@class='link product-card__link']`);
  }
  async addCatalogProductToCart(title) {
    return this.page.locator(`//*[contains(text(),'${title}')]//ancestor::*[contains(@class,'product-card')]//*[contains(@class,'btn-sm')]`);
  }
  get allProducts() {
    return (`.digi-products`);
  }
  get currentProductCost() {
    return (`.digi-product__price-aftersale`);
  }
  get addProductToCartOnProductPage() {
    return (`.addtocart-btn .i-button__inner`);
  }
  get transitionField() {
    return (`[itemprop="name"]`);
  }
  get productDescription() {
    return (`//*[@class='b-description__container-col']`);
  }
  get nothingWasFoundMessage() {
    return ('.mn-layout__col-2__inner');
  }
  get selectedFilters() {
    return (`.top-filters__sqcheckers--flat`);
  }
  async landingNavList(title) {
    return this.page.locator(`//*[@class='landing-nav-list__content']//*[contains(text(),'${title}')]`);
  }
  async subNavList(title) {
    return this.page.locator(`//*[@class=\'landing-subnav\']//*[contains(text(),'${title}')]`);
  }
}
module.exports = CatalogPages;
