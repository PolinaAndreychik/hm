const { BLANKET,PRICE, BOOK } = require('../../helpers/constants');
const homePage = require('../../pageObjects/homePage');
const leftNavMenu = require('../../pageObjects/components/leftNavMenu');
const filters = require('../../pageObjects/components/filters');
const catalogPages = require('../../pageObjects/catalogPages');


describe('Oz.by e2e catalog tests', () => {
    it('Goes to `Дом, сад...` picks `Пледы` selects filters and catalog page should have `Плед "Зигзаг" (150х200 см; голубой)`', () => {
            homePage.navigate('https://oz.by/')
            leftNavMenu.getToTheSpecificInnerNavMenuItem('Дом', 'Пледы');
            filters.getCostFilters('12', '123');
            filters.selectFilters('Полуторный');
            filters.selectFilters('Однотонный');
            filters.getPlaceFilters('Минск','Победителей');
            filters.applyFilters();
            filters.getTopFilterArrangeExpensiveFirst();
            cy.validateElementsText(catalogPages.catalogProduct, BLANKET.BLANKET_TITLE);
    })
    it('Goes to `Сладости`, picks `Капсульный кофе`, selects filters and products page should have nothing',() => {
            homePage.navigate('https://oz.by/')
            leftNavMenu.getToTheSpecificInnerNavMenuItem('Сладости', 'Капсульный кофе');
            filters.getTopFilterArrangeByRating();
            filters.selectFilters('Светлая');
            filters.applyFilters();
            cy.url().should('contain', 'coffee/?availability=1%3B2&sort=rating_desc&ti3=2');
    })
    it('Goes to `Товары для творчества` picks `Комиксы`, `Бестселлеры` selects filters and catalog page should have `Единственный конец злодейки – смерть. Том 3`', () => {
            homePage.navigate('https://oz.by/')
            leftNavMenu.goToGeneralCatalog('Товары для творчества');
            catalogPages.subNavListClick('Комиксы');
            catalogPages.landingNavListClick('Бестселлеры');
            filters.selectFilters('2023');
            filters.selectFilters('16+');
            filters.getPlaceFilters('Брест', 'Космонавтов');
            filters.applyFilters();
            cy.validateElementsText(catalogPages.catalogProduct, BOOK.BOOK_TITLE);
    })
    it('Goes to `Техника` picks `Электроника..`, `Игры для консолей` selects filters, clears filters and page url should be `https://oz.by/electronics/topic1114129.html`', () => {
            homePage.navigate('https://oz.by/')
            leftNavMenu.goToGeneralCatalog('Техника');
            catalogPages.landingNavListClick('Электроника, аксессуары');
            catalogPages.listingBannersClick('Планшеты');
            filters.selectFilters('2023');
            filters.selectFilters('Bluetooth');
            filters.selectFilters('GPS');
            filters.applyFilters();
            filters.clearFilters();
            cy.validateElementsText(catalogPages.catalogProduct, PRICE.TABLET_PRICE);
    })
    it('Goes to `Сувениры` picks `Бижутерия`, `Браслеты` selects filters and page should have nothing', () => {
            homePage.navigate('https://oz.by/')
            leftNavMenu.goToGeneralCatalog('Сувениры');
            catalogPages.landingNavListClick('Бижутерия');
            catalogPages.landingNavListClick('Браслеты');
            filters.selectFilters('Натуральный камень');
            filters.selectFilters('OKPODOLINS');
            filters.selectFilters('Стекло');
            filters.applyFilters();
            cy.validateElementsText(catalogPages.nothingWasFoundMessage,'Ничего не найдено');
    })
})
