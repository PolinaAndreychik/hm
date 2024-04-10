const Base = require('./base');
const homePage = require('./homePage');
class LoginPage extends Base {
    get logInByEmail() {
        return $('.i-nav-tabs [data-tab-link=\'email\']')
    }
    get emailField() {
        return $('.i-input-group_merged-with-border-radius [type="email"]')
    }
    get passwordField() {
        return $('.i-input-group_merged-with-border-radius [type="password"]')
    }
    get submitLogInButtonWithInvalidData() {
        return $('.i-popup__tab-container .i-button_full-width.i-button_disabled')
    }
    get submitLogInButtonWithNonExistingValidData() {
        return $('.i-popup__tab-item_active .i-popup__form-button')
    }
    get errorLogInMessage() {
        return $(' .i-input-group__popover_visible')
    }
    get signUpButton() {
        return $('[id=\'loginFormRegisterLink\']')
    }
    get signUpPhoneNumberField() {
        return $('input[tabindex=\'11\']')
    }
    get submitSignUpButtonWithNoData() {
        return $('[id=\'registerForm\'] .i-button_disabled')
    }
    get submitSignUpButtonWithEnoughData() {
        return $('[id=\'registerForm\'] .i-popup__form-button')
    }
    get errorSignUpMessage() {
        return $('[id=\'registerForm\'] .i-popover__line')
    }
    async authorizeByEmail(email, password ) {
        await homePage.loginButton.click();
        await this.logInByEmail.click();
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);

        if(await this.emailField.getValue() === 'noEmail') {
            await this.emailField.clearValue();
        } else if(await this.passwordField.getValue() === 'noPassword'){
            await this.passwordField.clearValue();
        }

        if(await this.submitLogInButtonWithInvalidData.isClickable()) {
            await this.submitLogInButtonWithInvalidData.click();
        } else {
            await this.submitLogInButtonWithNonExistingValidData.click();
        }
    }
    async signUpByPhoneNumber(phoneNumber) {
        await homePage.loginButton.click();
        await this.signUpButton.click();
        await this.signUpPhoneNumberField.waitForDisplayed();
        await this.signUpPhoneNumberField.addValue(phoneNumber);

        if(await this.submitSignUpButtonWithEnoughData.isClickable()) {
            await this.submitSignUpButtonWithEnoughData.click();
        } else {
            await this.submitSignUpButtonWithNoData.click();
        }
        if(await this.errorSignUpMessage.waitForDisplayed()) {
            await this.errorSignUpMessage.isDisplayed();
        }
    }
}
module.exports = new LoginPage();