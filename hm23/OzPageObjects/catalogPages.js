const Base = require('./base');
class CatalogPages extends Base {

    async specificCatalogProduct(title) {
        return $(`//*[contains(text(),'${title}')]//parent::*[@class='link product-card__link']`)
    }
    get transitionField() {
        return $(`.breadcrumbs__inner`)
    }
    get productDescription() {
        return $(`//*[@class='b-description__container-col']//*[@class='b-description__sub' and not(@id="goods_note")]`)
    }
    get nothingWasFoundMessage() {
        return $(`.mn-layout__col-2__inner`)
    }
    get selectedFilters() {
        return $(`.top-filters__sqcheckers--flat`)
    }
    async landingNavList(title) {
        return $(`//*[@class='landing-nav-list__content']//*[contains(text(),'${title}')]`)
    }
    async subNavList(title) {
        return $(`//*[@class=\'landing-subnav\']//*[contains(text(),'${title}')]`)
    }

}
module.exports =new CatalogPages();