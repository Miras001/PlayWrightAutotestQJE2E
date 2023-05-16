import type { Page } from 'playwright';
import { generateToken } from 'authenticator';
import { userAdm, userOne } from '../constants/userdata';
export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async login(login: string, password: string) {
        await this.page.type('#login-form_username', login);
        await this.page.type('#login-form_password', password);
        await this.page.click('button[type="submit"]')

    }

}

