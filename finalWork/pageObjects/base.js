class Base {
  constructor(page) {
    this.page = page;
  }
  async customClick(selector) {
    await (
      await selector
    ).isClickable;
    await (await selector).click();
  }
  async customFill(selector, words) {
    await (await selector).isVisible();
    await (await selector).click();
    await selector.fill(words);
  }
  async repeatClickAction(selectorOne, selectorTwo) {
    if (await (await selectorOne).isVisible()) {
      await this.customClick(selectorOne);
    } else {
      await this.customClick(selectorTwo);
      await this.customClick(selectorOne);
    }
  }
}

module.exports = Base;
