import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    private vendorButton: Locator;
    private otherLoginButton: Locator;
    private usernameField: Locator;
    private usernameField2: Locator;
    private nextButton: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private signinButton: Locator;
    private yesButton: Locator;
    private dashboardMessage: Locator;
    private iframe: FrameLocator;
    private submitInput: Locator;

    constructor(page: Page, baseURL: string) {
        super(page, baseURL);
        this.otherLoginButton = page.locator('//div[@class="kt-login__actions"]/button')
        this.vendorButton = page.locator('//div[@class="kt-login__actions"]/button')
        this.usernameField = page.locator('//input[@id="email"]');
        this.usernameField2 = page.getByRole('textbox', { name: 'Enter your email, phone, or' })
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.passwordField =  page.locator('#i0118')
        this.loginButton = page.locator('//button[text()=" Sign In "]')
        this.signinButton = page.getByRole('button', { name: 'Sign in' })
        this.yesButton = page.getByRole('button', { name: 'Yes' })
        this.submitInput = page.locator('//input[@type="submit"]');
        this.iframe = this.page.frameLocator('//div[@id="con_1"]/iframe');
        this.dashboardMessage = page.locator('//div[@class="card-label"]');
    }

    async goto(url:string) {
        console.log(`Base URL: ${this.baseURL}`);
        await this.page.goto(this.baseURL + url);
    }

    async vendor() {
        await this.vendorButton.click();
    }

    async otherLogin() {
        await this.otherLoginButton.click();
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.loginButton.click();
        await this.usernameField2.fill(username);
		await this.nextButton.click();
		await this.passwordField.fill(password);
		await this.signinButton.click();
		await this.yesButton.click();
    }

    //check login successfully
    async checkLoginSuccessfully(text: string){
        //get element inside the iframe
        // const dashboardElement = this.iframe.locator(this.dashboard); 
        // await dashboardElement.waitFor({ state: 'visible' });

        // await expect(dashboardElement).toHaveText(text)
        await this.dashboardMessage.waitFor({ state: 'visible' });
        // console.log("Text: " + await this.dashboardMessage.textContent())
        await expect(this.dashboardMessage).toHaveText(text);
    }
}