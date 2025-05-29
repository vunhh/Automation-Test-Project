import { test } from '@playwright/test';
import { LoginPage } from '../../pages/web/loginPage';

test.describe('TP Web Portal Tests', () => {
	test('Verify login successfully with valid credentials', async ({ page, baseURL }) => {
  		const loginPage = new LoginPage(page, baseURL || '');
		await loginPage.goto('/portal/login')
		await loginPage.otherLogin() 
		await loginPage.login('aaa', 'pass@');
		//verify login successfully
		await loginPage.checkLoginSuccessfully('What do you want to do today?')
  	});
});