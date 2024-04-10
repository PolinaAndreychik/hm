const Base = require('./base');
class CatalogPages extends Base {
    get productName() {
        return  $(`//*[contains(@class,'viewer-type-card--js-active')]`)
    }
    get nothingWasFoundMessage() {
        return $('.mn-layout__col-2__inner')
    }
}
module.exports = new CatalogPages();
