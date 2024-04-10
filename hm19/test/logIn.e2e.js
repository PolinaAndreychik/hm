const homePage = require('../pageObjects/homePage');
const loginPage = require('../pageObjects/loginPage');
const popup = require('../pageObjects/components/popup');

describe('Oz.by e2e log in tests', () => {

    it('Accepting cookies and log in with not existing Email with password should fail', async () => {
        await homePage.navigate('https://oz.by');
        await popup.acceptCookiesPopup();
        await loginPage.authorizeByEmail('nonExisting@gmail.com', 12345 );
        expect(await loginPage.errorLogInMessage.getText()).toContain('не зарегистрирован');
})
    it('Accepting cookies and log in by Invalid Email with optional password should fail', async () => {
        await homePage.navigate('https://oz.by');
        await popup.acceptCookiesPopup();
        await loginPage.authorizeByEmail('InvalidEmail', 12345 );
        expect(await loginPage.errorLogInMessage.getText()).toContain('Введите корректный адрес');
    })
    it('Accepting cookies and log in with password only should fail', async () => {
        await homePage.navigate('https://oz.by');
        await popup.acceptCookiesPopup();
        await loginPage.authorizeByEmail('noEmail', 12345);
        expect(await loginPage.errorLogInMessage.getText()).toContain('Введите адрес электронной почты');
    })

    it('Accepting cookies and log in with not existing Email only should fail', async () => {
        await homePage.navigate('https://oz.by');
        await popup.acceptCookiesPopup();
        await loginPage.authorizeByEmail('nonExisting@gmail.com', 'noPassword');
        expect(await loginPage.errorLogInMessage.getText()).toContain('Введите пароль');
    })

    it('Accepting cookies and sign up with no phone number(1) should fail', async () => {
        await homePage.navigate('https://oz.by');
        await popup.acceptCookiesPopup();
        await loginPage.signUpByPhoneNumber(1);
        expect(await loginPage.errorSignUpMessage.getText()).toContain('должен содержать не менее 7 цифр');
    })

     it('Accepting cookies and sign up with Invalid phone number process should fail', async () => {
         await homePage.navigate('https://oz.by');
         await popup.acceptCookiesPopup();
         await loginPage.signUpByPhoneNumber(442345);
         expect(await loginPage.errorSignUpMessage.getText()).toContain('Введите корректный номер');
     })
})