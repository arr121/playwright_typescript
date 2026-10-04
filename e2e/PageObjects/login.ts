import {BasePage} from './BasePage';
import {Page} from '@playwright/test';
import {env} from '../Config/env';

export class LoginPage extends BasePage {
    private usernameInputSelector = '#user-name';
    private passwordInputSelector = '#password';
    private loginButtonSelector = '#login-button';

    constructor(page: Page) {
        super(page);
    }
    async navigateToLoginPage(baseUrl: string = env.baseUrl) {
        await this.navigateTo(baseUrl);
    }
    async enterUsername(username: string) {
        await this.typeText(this.usernameInputSelector, username);
    }
    async enterPassword(password: string) {
        await this.typeText(this.passwordInputSelector, password);
    }
    async clickLoginButton() {
        await this.clickElement(this.loginButtonSelector);
    }


}