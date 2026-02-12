import { type Locator, type Page } from '@playwright/test';

export class MarsAirPage {
    readonly page: Page;
    readonly departingCombobox: Locator;
    readonly returningCombobox: Locator;
    readonly promotionalCodeInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.departingCombobox = page.locator('#departing');
        this.returningCombobox = page.locator('#returning');
        this.promotionalCodeInput = page.locator('#promotional_code');
        this.searchButton = page.locator('input[value="Search"]');
    }

    async goto() {
        await this.page.goto('');
    }

    async selectDeparting(value: string) {
        await this.departingCombobox.selectOption(value);
    }

    async selectReturning(value: string) {
        await this.returningCombobox.selectOption(value);
    }

    async fillPromotionalCode(code: string) {
        await this.promotionalCodeInput.fill(code);
    }

    async clickSearch() {
        await this.searchButton.click();
    }

    async search(departing: string, returning: string, promoCode?: string) {
        await this.selectDeparting(departing);
        await this.selectReturning(returning);
        if (promoCode) {
            await this.fillPromotionalCode(promoCode);
        }
        await this.clickSearch();
    }
}
