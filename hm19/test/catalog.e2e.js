const homePage = require('../pageObjects/homePage');
const catalogPages = require('../pageObjects/catalogPages')
const filters = require('../pageObjects/components/filters');
const leftNavMenu = require('../pageObjects/components/leftNavMenu');

describe('Oz.by e2e catalog tests', () => {
    it('Goes to `Дом, сад...` picks `Пледы` selects filters and products page should have `Плед с рукавами`', async () => {
        await homePage.navigate('https://oz.by');
        await leftNavMenu.getToTheSpecificInnerNavMenuItem('Дом', 'Пледы');
        await filters.getCostFilters(12, 123);
        await filters.applyFilters();
        await filters.getTopFilterArrangeExpensiveFirst();
        expect(await catalogPages.productName.getText()).toContain('Плед с рукавами');
    })
    it('Goes to `Сладости`, picks `Матча`, selects filters and products page should have nothing', async () => {
        await homePage.navigate('https://oz.by');
        await leftNavMenu.getToTheSpecificInnerNavMenuItem('Сладости', 'Матча');
        await filters.getTopFilterArrangeByRating();
        await filters.getCostFilters(30, 70);
        await filters.getPlaceFilters('Брест', 'Космонавтов');
        await filters.applyFilters();
        expect(await catalogPages.nothingWasFoundMessage.getText()).toContain('Ничего не найдено');
    })
})