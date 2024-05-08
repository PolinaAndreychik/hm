const Base = require('.//base');

class InformationPage extends Base {

    get nextButton() {
        return $(`//*[@class='pagination-nav__link pagination-nav__link--next']`)
    }
}
module.exports = new InformationPage();