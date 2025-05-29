import { Page, Locator, FrameLocator, expect } from '@playwright/test'
import { BasePage } from './basePage'

export class LoginPage extends BasePage {
    private usernameField: Locator
    private passwordField: Locator
    private submitButton: Locator
    private errorMessage: Locator
    private successMessage: Locator

    constructor(page: Page, baseURL: string) {
        super(page, baseURL);
        
        this.usernameField = page.locator('//input[@id="username"]')
        this.passwordField =  page.locator('//input[@id="password"]')
        this.submitButton = page.locator('//button[@id="submit"]')
        this.errorMessage = page.locator('//div[@id="error"]')
        this.successMessage = page.locator('//p[@class="has-text-align-center"]')
    }

    async goto(url:string) {
        console.log(`Base URL: ${this.baseURL}`);
        await this.page.goto(this.baseURL + url);
    }

    //do login with username and password
    async login(username: string, password: string) {
        await this.usernameField.fill(username);
		await this.passwordField.fill(password);
		await this.submitButton.click();
    }

    //check login failed
    async checkLoginFailed(text: string){
        await expect(this.errorMessage).toHaveText(text);
    }

    //check login successfully
    async checkLoginSuccessfully(text: string){
        await expect(this.successMessage).toHaveText(text);
    }
}