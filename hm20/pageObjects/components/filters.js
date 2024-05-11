const Base = require('../base');

class Filters extends Base {
    constructor(page) {
        super(page);
    }
    get costRangeFromFilter() {
        return ('.filters__section_withselected [name="r_cost[from]"]')
    }

    get costRangeToFilter() {
        return ('.filters__section_withselected [name="r_cost[to]"]')
    }

    async getAvailabilityInStoresCityFilter(cityName) {
        return this.page.locator(`//*[@class='filters_nested']//*[contains(@class,'fm-toggle-link')]//*[contains(text(),'${cityName}')]`)
    }

    async getAvailabilityInStoresStreetFilter(streetName) {
        return this.page.locator(`//*[@class='filters_nested']//*[contains(text(),'${streetName}')]//preceding-sibling::*[@class='filters__chkslist__chk']`)
    }

    get applyFiltersButton() {
        return ('.filters__searchbtn__btn')
    }

    get topFilterArrange() {
        return ('.top-filters__viewer__open')
    }
    get clearFiltersButton() {
        return (`//*[@class='top-filters__sqcheckers__clear']`)
    }
    get topFilterExpensiveFirst() {
        return ('.filters__chkslist--simple [data-sort=\'price_desc\']')
    }
    get topFilterArrangeByRating() {
        return ('.filters__chkslist--simple [data-sort=\'rating_desc\']')
    }

    async filtersSectionSpecificItem(item) {
        return this.page.locator(`//*[contains(@class,'filters__chkslist__item')]//*[contains(text(),'${item}')]`)
    }

    async selectFilters(item) {
        await (await this.filtersSectionSpecificItem(item)).click();
    }
    async clearFilters() {
        await (await this.page.locator(this.clearFiltersButton)).click();
    }

    async applyFilters() {
        await this.page.locator(this.applyFiltersButton).isVisible();
        await this.page.locator(this.applyFiltersButton).click();
    }

    async getCostFilters(costFrom, costTo) {
        await this.page.locator(this.costRangeFromFilter).fill(costFrom);
        await this.page.locator(this.costRangeToFilter).fill(costTo);
    }

    async getPlaceFilters(cityName, streetName) {
        await (await this.getAvailabilityInStoresCityFilter(cityName)).click();
        await (await this.getAvailabilityInStoresStreetFilter(streetName)).click();
    }

    async getTopFilterArrangeExpensiveFirst() {
        await this.page.locator (this.topFilterArrange).click();
        await this.page.locator (this.topFilterExpensiveFirst).click();
    }
    async getTopFilterArrangeByRating() {
        await this.page.locator (this.topFilterArrange).click();
        await this.page.locator (this.topFilterArrangeByRating).click();
    }
}

module.exports = Filters;