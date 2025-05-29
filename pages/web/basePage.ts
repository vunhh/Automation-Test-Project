import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;
    protected baseURL: string;

    constructor(page: Page, baseURL: string) {
        this.page = page;
        this.baseURL = baseURL;
    }

    async goto(url: string) {
        await this.page.goto(`${this.baseURL}${url}`);
    }
}