const Base = require('./base');

class HomePage extends Base {

    async navBarButton(title) {
        return $(`//*[@class='navbar__item navbar__link'][text()='${title}']`)
    }
}

module.exports =new HomePage();