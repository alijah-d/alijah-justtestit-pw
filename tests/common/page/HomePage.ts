import { expect, Locator, Page } from "@playwright/test";
import { config } from "../config.ts";

export class HomePage {
    private readonly page: Page;

    private readonly loginButton: Locator;
    private readonly loginInput: Locator;
    private readonly passwordInput: Locator;
    private readonly logoutButton: Locator;
    private readonly profileButton: Locator;

    constructor({ page }: { page: Page }) {
        this.page = page;
        // Initialize locators
        this.loginInput = this.page.locator('input[name="login"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.loginButton = this.page.getByText('Login');
        this.logoutButton = this.page.getByText('Logout');
        this.profileButton = this.page.locator('a[href="/profile"]');
    }

    // Method to navigate to the base URL
    async goToBaseUrl() {
        // Navigate to the base URL
        await this.page.goto(`${config.common.baseUrl}`);
    }

    // Method to login account
    async loginAccount({ login, password }: { login: string; password: string; }) {
        await expect(this.loginInput).toBeVisible(); 
        await this.loginInput.fill(login);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.logoutButton).toBeVisible();
    }

    // Method to logout account
    async goToProfilePage() {
        await expect(this.profileButton).toBeVisible();
        await this.profileButton.click();
    }
}