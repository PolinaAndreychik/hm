const Base = require('../base');

class Filters extends Base {
  constructor(page) {
    super(page);
  }
  get costRangeFromFilter() {
    return ('.filters__section_withselected [name="r_cost[from]"]');
  }
  get costRangeToFilter() {
    return ('.filters__section_withselected [name="r_cost[to]"]');
  }
  async getAvailabilityInStoresCityFilter(cityName) {
    return this.page.locator(`//*[@class='filters_nested']//*[contains(@class,'fm-toggle-link')]//*[contains(text(),'${cityName}')]`);
  }
  async getAvailabilityInStoresStreetFilter(streetName) {
    return this.page.locator(`//*[@class='filters_nested']//*[contains(text(),'${streetName}')]//preceding-sibling::*[@class='filters__chkslist__chk']`);
  }
  get applyFiltersButton() {
    return ('.filters__searchbtn__btn');
  }
  get topFilterArrange() {
    return ('.top-filters__viewer__open');
  }
  get clearFiltersButton() {
    return (`//*[@class='top-filters__sqcheckers__clear']`);
  }
  get topFilterExpensiveFirst() {
    return (".filters__chkslist--simple [data-sort='price_desc']");
  }
  get topFilterArrangeByRating() {
    return (".filters__chkslist--simple [data-sort='rating_desc']");
  }

  async selectSpecificFilter(filter) {
    return this.page.locator(`//*[contains(@class,'fm-form filters filters_side')]//*[contains(text(),'${filter}')]`);
  }

  async setCostFilters(costFrom, costTo) {
    await this.customFill(this.page.locator(this.costRangeFromFilter), costFrom);
    await this.customFill(this.page.locator(this.costRangeToFilter), costTo);
  }

  async setPlaceFilters(cityName, streetName) {
    await this.customClick(this.getAvailabilityInStoresCityFilter(cityName));
    await this.customClick(this.getAvailabilityInStoresStreetFilter(streetName));
  }

  async setTopFilterArrangeExpensiveFirst() {
    await this.customClick(this.page.locator(this.topFilterArrange));
    await this.customClick(this.page.locator(this.topFilterExpensiveFirst));
  }
  async setTopFilterArrangeByRating() {
    await this.customClick(this.page.locator(this.topFilterArrange));
    await this.customClick(this.page.locator(this.topFilterArrangeByRating));
  }
}

module.exports = Filters;
