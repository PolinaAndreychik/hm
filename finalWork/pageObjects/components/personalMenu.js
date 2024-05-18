const Base = require('../base');

class PersonalMenu extends Base {
  constructor(page) {
    super(page);
  }
  get orderedProducts() {
    return (`.order-card.order-card_gray`);
  }
  get cancelOrderButton() {
    return (`.order-cancel__button-wrap .order-cancel__button`);
  }
  get confirmCancelingOrder() {
    return (`.item-controls-button`);
  }
  get orderStatus() {
    return (`[id='order-status']`);
  }
  get orderInfo() {
    return (`[id='order-refresh-container']`);
  }
  get cancelledOrderPopup() {
    return (`.b-alert_ok`);
  }
  async cancelOrderConfirmation() {
    await this.customClick(this.page.locator(this.cancelOrderButton));
    await this.repeatClickAction(await this.page.locator(this.confirmCancelingOrder), this.page.locator(this.cancelOrderButton));
  }
}
module.exports = PersonalMenu;
