import {Before, After, AfterStep,Status} from '@cucumber/cucumber';
import {CustomWorld} from '../Fixtures/customWorld';
import {chromium} from '@playwright/test';

Before(async function (this: CustomWorld) {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});
AfterStep(async function (this: CustomWorld, step) {
    if (this.page) {
        const screenshot = await this.page.screenshot({
            path: `../../Screenshots/${step}_${Date.now()}.png`,
            type: 'png',
            fullPage: true
        });
        this.attach(screenshot, 'image/png');
    }
});
After(async function (this: CustomWorld, scenario) {
    if(scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({
            path: `../../Screenshots/${scenario}_${Date.now()}_Error.png`,
            type: 'png',
            fullPage: true
        });
      
        this.attach(screenshot, 'image/png');
    }
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});

