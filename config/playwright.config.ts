import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	testDir: '../tests/web',
	timeout: Number(process.env.TIMEOUT) || 60000,
	expect: {
		timeout: 5000,
	},
	retries: process.env.CI ? 1 : 0,
	workers: process.env.CI ? 1 : 1,
	reporter: [
		['list'],
		['allure-playwright'],
		['html', { outputFile: 'test-results/report.json' }]
	],
	use: {
		baseURL: 'https://practicetestautomation.com/',
		// browserName: (process.env.BROWSER as 'chromium' | 'firefox' | 'webkit') || 'chromium',
		headless: true,
		screenshot: 'only-on-failure',
		video: 'retain-on-failure',
		trace: 'on-first-retry',
		viewport: { width: 1280, height: 720 },
	},
	projects: [
		{
		name: 'Desktop Chrome',
		use: { ...devices['Desktop Chrome'] },
		},
		// {
		// name: 'Mobile Safari',
		// use: { ...devices['iPhone 12'] },
		// },
		// {
		// name: 'Firefox',
		// use: { browserName: 'firefox', ...devices['Desktop Firefox'] },
		// },
	],
});