const Base = require('../base');

class Filters extends Base {

    get costRangeFromFilter() {
        return cy.get('.filters__section_withselected [name="r_cost[from]"]')
    }
    get costRangeToFilter() {
        return cy.get('.filters__section_withselected [name="r_cost[to]"]')
    }
     getAvailabilityInStoresCityFilter(cityName) {
        return cy.xpath(`//*[@class='filters_nested']//*[contains(@class,'fm-toggle-link')]//*[contains(text(),'${cityName}')]`)
    }
     getAvailabilityInStoresStreetFilter(streetName) {
        return cy.xpath(`//*[@class='filters_nested']//*[contains(text(),'${streetName}')]//preceding-sibling::*[@class='filters__chkslist__chk']`)
    }
    get applyFiltersButton() {
        return cy.get('.filters__searchbtn__btn')
    }
    get topFilterArrange() {
        return cy.get('.top-filters__viewer__open')
    }
    get clearFiltersButton() {
        return cy.xpath(`//*[@class='top-filters__sqcheckers__clear']`)
    }
    get topFilterExpensiveFirst() {
        return cy.get('.filters__chkslist--simple [data-sort=\'price_desc\']')
    }
    get topFilterArrangeByRating() {
        return cy.get('.filters__chkslist--simple [data-sort=\'rating_desc\']')
    }

     filtersSectionSpecificItem(filter) {
        return cy.xpath(`//*[contains(@class,'fm-form filters filters_side')]//*[contains(text(),'${filter}')]`)
    }

    selectFilters(item) {
        this.filtersSectionSpecificItem(item).click();
    }
     clearFilters() {
        this.clearFiltersButton.click();
    }

    applyFilters() {
        this.applyFiltersButton.click();
    }

     setCostFilters(costFrom, costTo) {
        this.costRangeFromFilter.type(costFrom);
        this.costRangeToFilter.type(costTo);
    }

     setPlaceFilters(cityName, streetName) {
        this.getAvailabilityInStoresCityFilter(cityName).click();
        this.getAvailabilityInStoresStreetFilter(streetName).click();
    }

    setTopFilterArrangeExpensiveFirst() {
        this.topFilterArrange.click();
        this.topFilterExpensiveFirst.click();
    }
    setTopFilterArrangeByRating() {
        this.topFilterArrange.click();
        this.topFilterArrangeByRating.click();
    }
}

module.exports =new Filters();