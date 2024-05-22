class Base {
  constructor(page) {
    this.page = page;
  }
  async click(selector) {
    await (await selector).isClickable;
    await (await selector).click();
  }
  async fill(selector, words) {
    await (await selector).isVisible();
    await this.click(selector);
    await selector.fill(words);
  }
  async repeatClickAction(selectorOne, selectorTwo) {
    if (await (await selectorOne).isVisible()) {
      await this.click(selectorOne);
    } else {
      await this.click(selectorTwo);
      await this.click(selectorOne);
    }
  }
}

module.exports = Base;
