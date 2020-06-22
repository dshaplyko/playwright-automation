class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(email, password) {
    await this.page.fill("input[name='email']", email);
    await this.page.fill("input[name='password']", password);
    await this.page.click("button[name='login']");
  }
}

module.exports = {
  LoginPage
};