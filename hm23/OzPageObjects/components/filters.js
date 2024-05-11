const Base = require('../base');

class Filters extends Base {

    async getAvailabilityInStoresCityFilter(cityName) {
        return $(`/ /*[@class='filters_nested']//*[contains(@class,'fm-toggle-link')]//*[contains(text(),'${cityName}')]`)
    }

    async getAvailabilityInStoresStreetFilter(streetName) {
        return $(`/ /*[@class='filters_nested']//*[contains(text(),'${streetName}')]//preceding-sibling::*[@class='filters__chkslist__chk']`)
    }

    get applyFiltersButton() {
        return $(`.filters__searchbtn__btn`)
    }

    get topFilterArrange() {
        return $(`.top-filters__viewer__open`)
    }

    get clearFiltersButton() {
        return $(`/ /*[@class='top-filters__sqcheckers__clear']`)
    }

    get topFilterExpensiveFirst() {
        return $(`.filters__chkslist--simple [data-sort=\'price_desc\']`)
    }

    get topFilterArrangeByRating() {
        return $(`.filters__chkslist--simple [data-sort=\'rating_desc\']`)
    }

    async filtersSectionSpecificFilter(filter) {
        return $(`/ /*[contains(@class,'fm-form filters filters_side')]//*[contains(text(),'${filter}')]`)
    }
}

module.exports =new Filters();