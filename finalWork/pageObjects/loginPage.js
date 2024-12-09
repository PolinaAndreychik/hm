const Base = require('./base');

class LoginPage extends Base {
  constructor(page) {
    super(page);
  }
  get logInByEmail() {
    return (".i-nav-tabs [data-tab-link='email']");
  }
  get emailField() {
    return ('.i-input-group_merged-with-border-radius [type="email"]');
  }
  get passwordField() {
    return ('.i-input-group_merged-with-border-radius [type="password"]');
  }
  get activeSubmitLogInButton() {
    return ('.i-popup__tab-container [form="loginForm"]');
  }
  get inactiveSubmitLogInButton() {
    return ('.i-popup__tab-container .i-button_full-width.i-button_disabled');
  }
  get errorLogInMessage() {
    return ('.i-input-group__popover_visible');
  }
  get signUpButton() {
    return ("[id='loginFormRegisterLink']");
  }
  get signUpPhoneNumberField() {
    return ("input[tabindex='11']");
  }
  get submitSignUpButton() {
    return ("[id='registerForm'] .i-popup__form-button");
  }
  get errorSignUpMessage() {
    return ("[id='registerForm'] .i-popover__line");
  }
  async authorizeByEmail(email, password) {
    await this.click(this.page.locator(this.logInByEmail));
    await this.fill(this.page.locator(this.emailField), email);
    await this.fill(this.page.locator(this.passwordField), password);
  }

  async signUpByPhoneNumber(phoneNumber) {
    await this.click(this.page.locator(this.signUpButton));
    await this.fill(this.page.locator(this.signUpPhoneNumberField), phoneNumber);
    await this.click(this.page.locator(this.submitSignUpButton));
  }
}

module.exports = LoginPage;
