const {LoginPage} = require('../framework');
const {chromium} = require('playwright');

describe('Test', () => {
  let browser, page;

  beforeEach(async () => {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext();

    page = await context.newPage();
    await page.goto('https://t-notes.herokuapp.com/#/login');
  });

  afterEach( async () => {
    await browser.close();
  });

  it('My first test using Playwright', async () => {
    const loginPage = new LoginPage(page);
    await loginPage.login('test@mail.com', 'password');
  });

});