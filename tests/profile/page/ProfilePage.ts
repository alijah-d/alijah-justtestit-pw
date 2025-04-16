import { expect, Locator, Page } from '@playwright/test';

export class Profile {
    private readonly page: Page;

    private readonly addressInput: Locator;
    private readonly hobbySelect: Locator;
    private readonly saveButton: Locator;

    constructor({ page }: { page: Page }) {
        this.page = page;

        this.addressInput = this.page.locator('#address');
        this.hobbySelect = this.page.locator('#hobby');
        this.saveButton = this.page.locator('button[type="submit"]');
    }

    /**
     * Fills the address input field with the provided text
     * @param address The address string to enter in the field
     */
    async fillAddress(address: string) {
        await expect(this.addressInput).toBeVisible();
        await this.addressInput.fill(address);
    }

    /**
     * Selects a random hobby from the dropdown
     * @returns The selected hobby
     */
    async selectHobby() {
        // First, get all available option texts
        const options = await this.hobbySelect.locator('option').allTextContents();
        
        // Select a random option (excluding the first one if it's a placeholder)
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomHobby = options[randomIndex];
        
        // Select the random hobby
        await this.hobbySelect.selectOption({ label: randomHobby });
        
        // For debugging purposes, log the selected hobby
        console.log(`Selected hobby: ${randomHobby}`);
        
        return randomHobby;
    }

    /**
     * Clicks the save button to save the profile
     */
    async saveProfile() {
        await expect(this.saveButton).toBeVisible();
        await this.saveButton.click();
    }
}