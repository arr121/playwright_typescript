import{World,setWorldConstructor} from '@cucumber/cucumber'; 
import{Browser,BrowserContext,Page,chromium} from '@playwright/test';

export class CustomWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    constructor(options: any) {
        super(options);
    }
}
setWorldConstructor(CustomWorld);