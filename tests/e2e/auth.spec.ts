import { test, expect } from '@playwright/test';
import { userAdm, userOne } from '../../constants/userdata';
import { HomePage } from '../../pages/home-page';
import { LoginPage } from '../../pages/login-page';
import { generateToken } from 'authenticator';
import {faker} from 'Faker';
import path from 'path';


//Авторизация с корректным e-mail-ом и паролем

test.beforeEach(async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiFormHelperText-contained'); 
    await homepage.open();
    await new LoginPage(page).login(userAdm.login, userAdm.password)
});

test('Авторизация', async ({ page }) => {
    
    await expect(page).toHaveURL('https://qorgaujol.sergek.kz/my-applications')
    
});


