const Base = require('../pageObjects/base');

class Waiter extends Base {
  constructor(page) {
    super(page);
  }
  async waitForElementToBeReClicked(locatorOne, locatorTwo) {
    await locatorOne.click({ force: true });
    await locatorOne.waitFor({ state: 'detached' });
    await locatorTwo.click({ force: true });
  }
}

module.exports = Waiter;
