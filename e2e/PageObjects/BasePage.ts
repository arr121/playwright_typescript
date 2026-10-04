import { expect,Page } from '@playwright/test';

export class BasePage { 
    constructor(protected page: Page) {
       
    }   
    async navigateTo(url: string) {
        await this.page.goto(url);
    }
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }
    async getPageUrl(): Promise<string> {
        return this.page.url();
    }
    async getPageContent(): Promise<string> {
        return await this.page.content();
    }
    async clickElement(selector: string): Promise<void> {
        await this.page.click(selector);
    }
    async typeText(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }
    async expectElementText(achievedText: string, expectedText: string): Promise<void> {
        expect(achievedText).toBe(expectedText);
    }
    async isElementVisible(selector: string): Promise<boolean> {
        const element = await this.page.$(selector);
        if (element) {
            return await element.isVisible();
        }   
        return false;  
    }
    async waitForElement(selector: string, timeout: number = 5000): Promise<void> {
        await this.page.waitForSelector(selector, { timeout });
    }
    
}