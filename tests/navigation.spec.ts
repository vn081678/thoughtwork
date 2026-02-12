import { test, expect } from '../fixture/marsair.fixture';
import { links } from '../test-data/navigation.data';

test.describe('#3 - Link to Home Page', () => {
    test('TC-3.1: "Book a ticket to the red planet now!" is displayed prominently', async ({ marsAirPage }) => {
        const bookingText = marsAirPage.page.locator('h3');
        await expect(bookingText).toBeVisible();
        await expect(bookingText).toHaveText(links[1].expectedText);
    });

    for (const link of links) {
        test(`TC-3.2/3.3: ${link.description}`, async ({ marsAirPage }) => {
            // Perform a search to navigate away from home
            await marsAirPage.search('0', '2');

            // Click the navigation link
            const element = marsAirPage.page.locator(link.selector).first();
            await element.click();

            // Verify we're back on the home page
            await expect(marsAirPage.page).toHaveURL(/\/TrungVo\/?$/);
            await expect(marsAirPage.departingCombobox).toBeVisible();
            await expect(marsAirPage.returningCombobox).toBeVisible();
        });
    }
});
