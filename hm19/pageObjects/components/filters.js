const Base = require('../base');

class Filters extends Base {
    get costRangeFromFilter() {
        return $('.filters__section_withselected [name="r_cost[from]"]')
    }

    get costRangeToFilter() {
        return $('.filters__section_withselected [name="r_cost[to]"]')
    }

    async getAvailabilityInStoresCityFilter(cityName) {
        return $(`//*[@class=\'filters_nested\']//*[contains(@class,\'fm-toggle-link\')]//*[contains(text(),\'${cityName}\')]`)
    }

    async getAvailabilityInStoresStreetFilter(streetName) {
        return $(`//*[@class='filters_nested']//*[contains(text(),'${streetName}')]//preceding-sibling::*[@class='filters__chkslist__chk']`)
    }

    get applyFiltersButton() {
        return $('.filters__searchbtn__btn')
    }

    get topFilterArrange() {
        return $('.top-filters__viewer__open')
    }

    get topFilterExpensiveFirst() {
        return $('.filters__chkslist--simple [data-sort=\'price_desc\']')
    }
    get topFilterArrangeByRating() {
        return $('.filters__chkslist--simple [data-sort=\'rating_desc\']')
    }


    async applyFilters() {
        await this.applyFiltersButton.waitForDisplayed();
        await this.applyFiltersButton.click();
    }

    async getCostFilters(costFrom, costTo) {
        await this.costRangeFromFilter.setValue(costFrom);
        await this.costRangeToFilter.setValue(costTo);
    }

    async getPlaceFilters(cityName, streetName) {
       await (await this.getAvailabilityInStoresCityFilter(cityName)).click();
       await (await this.getAvailabilityInStoresStreetFilter(streetName)).click();
    }

    async getTopFilterArrangeExpensiveFirst() {
       await this.topFilterArrange.click();
       await this.topFilterExpensiveFirst.click();
    }
    async getTopFilterArrangeByRating() {
        await this.topFilterArrange.click();
        await this.topFilterArrangeByRating.click();
    }
}

module.exports = new Filters();


