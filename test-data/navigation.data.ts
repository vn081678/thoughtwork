export interface NavLink {
    description: string;
    selector: string;
    expectedText: string;
}

export const homePageUrl = '';

export const links: NavLink[] = [
    {
        description: 'MarsAir logo links to home page',
        selector: 'h1 a',
        expectedText: 'MarsAir',
    },
    {
        description: 'Book a ticket text links to home page',
        selector: 'h3',
        expectedText: 'Book a ticket to the red planet now!',
    },
];
