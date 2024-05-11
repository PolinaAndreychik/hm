const Base = require('./base');

class HomePage extends Base {
    get loginButton() {
        return $('.user-bar__item .link.user-bar__item')
    }
}
module.exports = new HomePage();