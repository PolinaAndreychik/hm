const Base = require('../base');

class leftNavMenu extends Base {

    async navMenuFirstLevel(title) {
        return $(`//*[contains(@class,'menu__link menu__link--sublist')][text()='${title}']`)
    }
    async navMenuSecondLevel(title) {
        return $(`//*[contains(@class,'menu__link')][text()='${title}']`)
    }
}

module.exports = new leftNavMenu();