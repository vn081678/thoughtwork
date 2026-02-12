import { test as base, expect } from '@playwright/test';
import { MarsAirPage } from '../pages/marsair.page';

type MarsAirFixtures = {
    marsAirPage: MarsAirPage;
};

export const test = base.extend<MarsAirFixtures>({
    marsAirPage: async ({ page }, use) => {
        const marsAirPage = new MarsAirPage(page);
        await marsAirPage.goto();
        await use(marsAirPage);
    },
});

export { expect };
