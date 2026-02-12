import { test, expect } from '../fixture/marsair.fixture';
import { dropdownOptions, seatsAvailableSearches, noSeatsSearches, expectedMessages } from '../test-data/search.data';

test.describe('#1 - Basic Search Flow', () => {
    test('TC-1.3: Departing and Returning dropdowns have correct options', async ({ marsAirPage }) => {
        const expectedLabels = dropdownOptions.map((opt) => opt.label);

        const departingOptions = await marsAirPage.departingCombobox.locator('option').allTextContents();
        expect(departingOptions).toEqual(expectedLabels);

        const returningOptions = await marsAirPage.returningCombobox.locator('option').allTextContents();
        expect(returningOptions).toEqual(expectedLabels);
    });

    test('TC-1.4: Only July and December months are available', async ({ marsAirPage }) => {
        const departingOptions = await marsAirPage.departingCombobox.locator('option').allTextContents();
        const nonDefaultOptions = departingOptions.filter((opt) => opt !== 'Select...');

        for (const option of nonDefaultOptions) {
            expect(option).toMatch(/July|December/);
        }
    });

    test('TC-1.5: Dropdowns have 6 flight options plus default', async ({ marsAirPage }) => {
        const departingOptions = await marsAirPage.departingCombobox.locator('option').allTextContents();
        expect(departingOptions).toHaveLength(dropdownOptions.length);

        const returningOptions = await marsAirPage.returningCombobox.locator('option').allTextContents();
        expect(returningOptions).toHaveLength(dropdownOptions.length);
    });

    for (const scenario of seatsAvailableSearches) {
        test(`TC-1.1: Seats available - ${scenario.description}`, async ({ marsAirPage }) => {
            await marsAirPage.search(scenario.departing, scenario.returning);

            const content = await marsAirPage.page.locator('#content').textContent();
            expect(content).toContain(expectedMessages.seatsAvailable);
        });
    }

    for (const scenario of noSeatsSearches) {
        test(`TC-1.2: No seats - ${scenario.description}`, async ({ marsAirPage }) => {
            await marsAirPage.search(scenario.departing, scenario.returning);

            const content = await marsAirPage.page.locator('#content').textContent();
            expect(content).toContain(expectedMessages.noSeats);
        });
    }
});
