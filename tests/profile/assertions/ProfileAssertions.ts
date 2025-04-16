import { expect, Locator, Page } from '@playwright/test';
import { DEFAULT_MESSAGES } from '../../common/constants';

export class ProfileAssertions {
    private readonly page: Page;

    private readonly successMessage: Locator;

    constructor({ page }: { page: Page }) {
        this.page = page;
        this.successMessage = this.page.locator('div.row.hidden-lg-up > div');
    }

    // Asserts that the success message is displayed after updating the profile
    async assertSuccessMessage() {
        await expect(this.successMessage).toHaveText(DEFAULT_MESSAGES.successUpdateProfile);
    }
}