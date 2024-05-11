const { test, expect } = require('@playwright/test');
const { BLANKET, URL, BOOK } = require('../helpers/constants');
const HomePage = require('../pageObjects/homePage');
const LeftNavMenu = require('../pageObjects/components/leftNavMenu');
const Filters = require('../pageObjects/components/filters');
const CatalogPages = require('../pageObjects/catalogPages');


test.describe('Oz.by e2e catalog tests', async function () {
    let homePage;
    let leftNavMenu;
    let filters;
    let catalogPages;

    test.beforeEach(async ({page}) => {
        await page.goto(URL.URL_OZ)
        homePage = new HomePage(page);
        leftNavMenu = new LeftNavMenu(page);
        filters = new Filters(page);
        catalogPages = new CatalogPages(page);
    });
    test('Goes to `Дом, сад...` picks `Пледы` selects filters and catalog page should have `Плед "Зигзаг" (150х200 см; голубой)`',
        async ({page}) => {
        await leftNavMenu.getToTheSpecificInnerNavMenuItem('Дом', 'Пледы');
        await filters.getCostFilters('12', '123');
        await filters.selectFilters('Полуторный');
        await filters.selectFilters('Однотонный');
        await filters.getPlaceFilters('Минск','Победителей');
        await filters.applyFilters();
        await filters.getTopFilterArrangeExpensiveFirst();
        await expect(await page.getByRole('heading', { name: BLANKET.BLANKET_TITLE})).toContainText('Плед "Зигзаг" (150х200 см; голубой)');
    })
    test('Goes to `Сладости`, picks `Капсульный кофе`, selects filters and products page should have nothing',
        async ({page}) => {
        await leftNavMenu.getToTheSpecificInnerNavMenuItem('Сладости', 'Капсульный кофе');
        await filters.getTopFilterArrangeByRating();
        await filters.getCostFilters('30', '70');
        await filters.selectFilters('Светлая');
        await filters.applyFilters();
        await expect(await page.locator(catalogPages.nothingWasFoundMessage)).toContainText('Ничего не найдено');
    })
    test('Goes to `Товары для творчества` picks `Комиксы`, `Бестселлеры` selects filters and catalog page should have `Единственный конец злодейки – смерть. Том 3`',
        async ({page}) => {
            await leftNavMenu.goToGeneralCatalog('Товары для творчества');
            await catalogPages.subNavListClick('Комиксы');
            await catalogPages.landingNavListClick('Бестселлеры');
            await filters.selectFilters('2023');
            await filters.selectFilters('16+');
            await filters.getPlaceFilters('Брест', 'Космонавтов');
            await filters.applyFilters();
            await expect(await page.getByRole('heading', { name: BOOK.BOOK_TITLE})).toContainText('Том 3');
        })
    test('Goes to `Техника` picks `Электроника..`, `Игры для консолей` selects filters, clears filters and page url should be `https://oz.by/electronics/topic1114129.html`',
        async ({page}) => {
            await leftNavMenu.goToGeneralCatalog('Техника');
            await catalogPages.landingNavListClick('Электроника, аксессуары');
            await catalogPages.listingBannersClick('Игры для консолей');
            await filters.getCostFilters('100','150');
            await filters.selectFilters('Capcom');
            await filters.applyFilters();
            await filters.clearFilters();
            await expect(page.url()).toEqual('https://oz.by/electronics/topic1114129.html');
        })
    test('Goes to `Сувениры` picks `Бижутерия`, `Браслеты` selects filters and page should have nothing',
        async ({page}) => {
            await leftNavMenu.goToGeneralCatalog('Сувениры');
            await catalogPages.landingNavListClick('Бижутерия');
            await catalogPages.landingNavListClick('Браслеты');
            await filters.selectFilters('Натуральный камень');
            await filters.selectFilters('OKPODOLINS');
            await filters.selectFilters('Стекло');
            await filters.applyFilters();
            await expect(await page.locator(catalogPages.nothingWasFoundMessage)).toContainText('Ничего не найдено');
        })
})



