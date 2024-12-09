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
    await this.fill(this.page.locator(this.costRangeFromFilter), costFrom);
    await this.fill(this.page.locator(this.costRangeToFilter), costTo);
  }

  async setPlaceFilters(cityName, streetName) {
    await this.click(this.getAvailabilityInStoresCityFilter(cityName));
    await this.click(this.getAvailabilityInStoresStreetFilter(streetName));
  }

  async setTopFilterArrangeExpensiveFirst() {
    await this.click(this.page.locator(this.topFilterArrange));
    await this.click(this.page.locator(this.topFilterExpensiveFirst));
  }
  async setTopFilterArrangeByRating() {
    await this.click(this.page.locator(this.topFilterArrange));
    await this.click(this.page.locator(this.topFilterArrangeByRating));
  }
}

module.exports = Filters;
