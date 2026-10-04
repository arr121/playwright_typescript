import {Given, When, Then} from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import {LoginPage} from '../PageObjects/login';
import {BasePage} from '../PageObjects/BasePage';
import {CustomWorld} from '../Fixtures/customWorld';
import loginCredentials from '../TestData/loginCredentials.json';
let loginPage : LoginPage;
let basePage : BasePage;

Given('the user is on the login page', async function (this: CustomWorld) {
    loginPage = new LoginPage(this.page as Page);
    await loginPage.navigateToLoginPage();
    basePage = new BasePage(this.page);
    let title =await basePage.getPageTitle();
    basePage.expectElementText(title, 'Swag Labs');
});

When('the user enters valid username and password', async function (this: CustomWorld) {
    await loginPage.enterUsername(loginCredentials.validUser.userName);
    await loginPage.enterPassword(loginCredentials.validUser.passWord);
});

When('clicks the login button', async function () {
    await loginPage.clickLoginButton();
});

Then('the user should be redirected to the dashboard page', async function (this: CustomWorld) {
    let title =await basePage.getPageTitle();
    basePage.expectElementText(title, 'Swag Labs');
});

When('the user enters invalid username or password', async function (this: CustomWorld) {
    await loginPage.enterUsername(loginCredentials.problemUserName.userName);
    await loginPage.enterPassword(loginCredentials.problemUserName.passWord);
    await loginPage.clickLoginButton();
});

Then('an error message should be displayed', async function (this: CustomWorld) {
    let title =await basePage.getPageTitle();
    basePage.expectElementText(title, 'Swag Labs');
});