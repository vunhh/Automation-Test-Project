import { test } from '@playwright/test';
import { LoginPage } from '../../pages/web/loginPage';

test.describe('Login Tests', () => {
	test('Verify login successfully with valid credentials', async ({ page, baseURL }) => {
  		const loginPage = new LoginPage(page, baseURL || '');
		await loginPage.goto('/practice-test-login')
		await loginPage.login('student', 'Password123');
		//verify login successfully
		await loginPage.checkLoginSuccessfully('Congratulations student. You successfully logged in!')
  	});

	test('Verify login failed due to wrong password', async ({ page, baseURL }) => {
		const loginPage = new LoginPage(page, baseURL || '');
		await loginPage.goto('/practice-test-login')
		await loginPage.login('student', 'WrongPassword');
		//verify login failed test
		await loginPage.checkLoginFailed('Your password is invalid!')
	});
});