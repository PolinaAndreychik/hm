const Base = require('./base');

class CheckoutPage extends Base {
  constructor(page) {
    super(page);
  }
  get numberOfProducts() {
    return ('.deal-form-main__sub:not(.deal-form-main__sub_aside)');
  }
  get cartPrice() {
    return (`.deal-form-footer__line_price`);
  }
  get messageOfEmptyCart() {
    return ('.i-textual.i-textual_bordered');
  }
  get chooseAllProducts() {
    return ('.goods-table__row_footer [type="checkbox"]');
  }
  get deleteProductsButton() {
    return ('.i-button_small.remove');
  }
  get confirmDeleteButton() {
    return ('.remove-yes');
  }
  get cartsConsistency() {
    return (`.goods-table__body`);
  }
  get deliveryAvailabilityButton() {
    return (`.error-delivery`);
  }
  get paymentMethodButton() {
    return (`.error-payment`);
  }
  async setDealInstructions(title) {
    return this.page.locator(`//*[@class='i-context-box-list__line' and contains(text(),'${title}')]`);
  }
  async continueButton(item) {
    return this.page.locator(`[name="${item}-apply"]`);
  }
  get confirmOrderButton() {
    return (`.deal-form-footer__control .i-button_primary`);
  }
  get orderConfirmationPopup() {
    return (`.i-popup-final .i-popup.i-popup_large`);
  }
  async deleteProductsFromTheCart() {
    await this.customClick(this.page.locator(this.chooseAllProducts));
    await this.customClick(this.page.locator(this.deleteProductsButton));
    await this.repeatClickAction(await this.page.locator(this.confirmDeleteButton), this.page.locator(this.deleteProductsButton));
  }
  async chooseDeliveryOptions(deliveryOption, paymentOption) {
    await this.customClick(this.page.locator(this.deliveryAvailabilityButton));
    await this.customClick(this.setDealInstructions(deliveryOption));
    await this.customClick(this.continueButton(`delivery`));
    await this.customClick(this.page.locator(this.paymentMethodButton));
    await this.customClick(this.setDealInstructions(paymentOption));
    await this.customClick(this.continueButton(`payment`));
  }
}

module.exports = CheckoutPage;
