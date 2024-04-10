const Base = require('../base');

class Popup extends Base {

    get cookiesPopupBody() {
        return $('.bg-light')
    }
    get acceptCookiesButton() {
        return $('.me-2')
    }
     async acceptCookiesPopup() {
        if(await this.cookiesPopupBody.isDisplayed()) {
            await this.acceptCookiesButton.click();
        }
     }
}
module.exports = new Popup();
