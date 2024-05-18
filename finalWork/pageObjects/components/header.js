const Base = require('../base');

class Header extends Base {
  constructor(page) {
    super(page);
  }
  get searchField() {
    return (`.digi-instant-search`);
  }
  get userBarMyOzButton() {
    return (`//*[@class="user-bar__title" and text()='Мой OZ']`);
  }
  get checkoutButton() {
    return (`.user-bar__cart`);
  }
  get myOrders() {
    return (` [href="/personal/orders/"].nav-menu__link`);
  }
  async cartAddedProductsNumber() {
    return (`//*[contains(@class,'user-bar__cart')]//*[@data-user-bar-target="cartCounter"]`);
  }
  async popularProducts(title) {
    return this.page.locator(`//*[@class='digi-product__label' and contains(text(),'${title}')]`);
  }
  async oftenSearchedProducts(title) {
    return this.page.locator(`//*[contains(@class,'digi-ac__set_main')]//*[contains(text(),'${title}')]`);
  }
  async goToOrderedProducts() {
    await this.page.locator(this.userBarMyOzButton).hover();
    await this.customClick(this.page.locator(this.myOrders));
  }
}
module.exports = Header;
