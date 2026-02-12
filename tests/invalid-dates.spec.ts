import { test, expect } from '../fixture/marsair.fixture';
import { invalidSchedules, seatsAvailableSearches, noSeatsSearches, expectedMessages } from '../test-data/search.data';

test.describe('#4 - Invalid Return Dates', () => {
    for (const scenario of invalidSchedules) {
        test(`TC-4.1/4.2: Invalid schedule - ${scenario.description}`, async ({ marsAirPage }) => {
            await marsAirPage.search(scenario.departing, scenario.returning);

            const content = await marsAirPage.page.locator('#content').textContent();
            expect(content).toContain(expectedMessages.invalidSchedule);
        });
    }

    for (const scenario of [...seatsAvailableSearches, ...noSeatsSearches]) {
        test(`TC-4.3/4.4: Valid schedule - ${scenario.description}`, async ({ marsAirPage }) => {
            await marsAirPage.search(scenario.departing, scenario.returning);

            const content = await marsAirPage.page.locator('#content').textContent();
            expect(content).not.toContain(expectedMessages.invalidSchedule);
        });
    }
});
