import { test, expect } from '../fixture/marsair.fixture';
import { validCodes, invalidCodes, expectedMessages } from '../test-data/promo-code.data';

const VALID_DEPARTING = '0'; // July
const VALID_RETURNING = '5'; // December (two years from now)

test.describe('#2 - Promotional Codes', () => {
    for (const promo of validCodes) {
        test(`TC-2.1/2.5: Valid promo code - ${promo.description}`, async ({ marsAirPage }) => {
            await marsAirPage.search(VALID_DEPARTING, VALID_RETURNING, promo.code);

            const content = await marsAirPage.page.locator('#content').textContent();
            expect(content).toContain(expectedMessages.validPromo(promo.code, promo.discount));
        });
    }

    for (const promo of invalidCodes) {
        test(`TC-2.2/2.3/2.4: Invalid promo code - ${promo.description}`, async ({ marsAirPage }) => {
            await marsAirPage.search(VALID_DEPARTING, VALID_RETURNING, promo.code);

            const content = await marsAirPage.page.locator('#content').textContent();
            expect(content).toContain(expectedMessages.invalidPromo(promo.code));
        });
    }

    test('TC-2.6: Empty promotional code - no promo message shown', async ({ marsAirPage }) => {
        await marsAirPage.search(VALID_DEPARTING, VALID_RETURNING);

        const content = await marsAirPage.page.locator('#content').textContent();
        expect(content).not.toContain('Promotional code');
        expect(content).not.toContain('Sorry, code');
    });
});
