import {By, until, Builder} from "selenium-webdriver";
import {expect} from 'chai'

describe(`ChromeDriver WebPage tests`, function () {
    let driver;

    before(async () => {
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().setSize({width: 1960, height: 1280})
    })
    after(async () => {
        await driver.quit();
    })
    it('Checking if the webpage title name is "ChromeDriver"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.wait(until.elementLocated(By.xpath('//*[@class="Rn3Z1b C9DxTc "]')));
        const chromeDriverTitle = await driver.findElement(By.xpath('//*[@class="Rn3Z1b C9DxTc "]'));
        expect(await chromeDriverTitle.getText()).to.equal('ChromeDriver')
    })
    it('Going to page "Chrome Extensions" and checking if the title name is "Chrome Extensions"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(1000)
        await driver.wait(until.elementLocated(By.xpath('//*[@href="/extensions"]//ancestor::*[contains(@class,"YSH9J")]')));
        const extensionsHeaderButton = await driver.findElement(By.xpath('//*[@href="/extensions"]//ancestor::*[contains(@class,"YSH9J")]'));
        await extensionsHeaderButton.click();
        const header = await driver.findElement(By.xpath('//*[@class="plFg0c"]'));
        await driver.executeScript("arguments[0].style.background = 'blue'", header);
        const chromeExtensionsTitle = await driver.findElement(By.xpath(' //*[@id="h.p_ID_13"]'));
        expect(await chromeExtensionsTitle.getText()).to.equal('Chrome Extensions')
    })
    it('Checking if the first link contains word "driver" after searching word "driver"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(1000)
        await driver.wait(until.elementLocated(By.xpath('//*[contains(@class,"iWs3gf")]')));
        const openSearchPage = await driver.findElement(By.xpath('//*[contains(@class,"iWs3gf")]'));
        await openSearchPage.click();
        const inputRequest = await driver.findElement(By.xpath('//*[contains(@class,"whsOnd")]'));
        await inputRequest.sendKeys('driver');
        const searchButton= await driver.findElement(By.xpath('//*[contains(@class,"i3PoXe")]'));
        await driver.sleep(1000)
        await searchButton.click();
        await driver.wait(until.elementLocated(By.xpath('//*[@data-position="1"]//parent::*[@class="vH0yjd"]')));
        const firstLink = await driver.findElement(By.xpath('//*[@data-position="1"]//parent::*[@class="vH0yjd"]'));
        expect(await firstLink.getText()).to.contain('driver')
    })
    it('Going to webpage Mobile Emulation and checking if URL contains "/mobile-emulation"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.wait(until.elementLocated(By.xpath('//*[text()=\'Дополнительно\']//ancestor::*[contains(@class,"PsKE7e")]')));
        const additionalButton = await driver.findElement(By.xpath('//*[text()=\'Дополнительно\']//ancestor::*[contains(@class,"PsKE7e")]'));
        await additionalButton.click();
        const mobileEmulationButton = await driver.findElement(By.xpath('//*[@href="/mobile-emulation"]//ancestor::*[contains(@class,"PsKE7e IKA38e")]'));
        await mobileEmulationButton.click();
        expect(await driver.getCurrentUrl()).to.contain('/mobile-emulation')
    })
})