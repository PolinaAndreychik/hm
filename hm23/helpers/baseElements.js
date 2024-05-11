class BaseElements {
    async click(selector) {

      await ( await $(selector)).waitForClickable();
       await (await $(selector)).click();
    }
}

module.exports = BaseElements;