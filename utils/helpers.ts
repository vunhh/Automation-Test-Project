import { Page } from '@playwright/test';
import * as fs from 'fs';

export const takeScreenshot = async (page: Page, name: string) => {
    await page.screenshot({ path: `reports/screenshots/${name}.png` });
};

export const loadEnv = (): NodeJS.ProcessEnv => {
    require('dotenv').config();
    return process.env;
};