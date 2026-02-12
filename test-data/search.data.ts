export interface DropdownOption {
    value: string;
    label: string;
}

export interface SearchScenario {
    description: string;
    departing: string;
    returning: string;
}

export const dropdownOptions: DropdownOption[] = [
    { value: '', label: 'Select...' },
    { value: '0', label: 'July' },
    { value: '1', label: 'December' },
    { value: '2', label: 'July (next year)' },
    { value: '3', label: 'December (next year)' },
    { value: '4', label: 'July (two years from now)' },
    { value: '5', label: 'December (two years from now)' },
];

export const seatsAvailableSearches: SearchScenario[] = [
    { description: 'July to December (two years from now)', departing: '0', returning: '5' },
];

export const noSeatsSearches: SearchScenario[] = [
    { description: 'July to July (next year)', departing: '0', returning: '2' },
    { description: 'July to December (next year)', departing: '0', returning: '3' },
    { description: 'July to July (two years from now)', departing: '0', returning: '4' },
    { description: 'December to December (next year)', departing: '1', returning: '3' },
    { description: 'December to July (two years from now)', departing: '1', returning: '4' },
    { description: 'December to December (two years from now)', departing: '1', returning: '5' },
];

export const invalidSchedules: SearchScenario[] = [
    { description: 'Same month - July to July', departing: '0', returning: '0' },
    { description: 'Same month - December to December', departing: '1', returning: '1' },
    { description: 'Less than 1 year - July to December (same year)', departing: '0', returning: '1' },
    { description: 'Less than 1 year - December to July (next year)', departing: '1', returning: '2' },
    { description: 'Return before departure - December to July', departing: '3', returning: '0' },
];

export const expectedMessages = {
    seatsAvailable: 'Seats available! Call 0800 MARSAIR to book!',
    noSeats: 'Sorry, there are no more seats available.',
    invalidSchedule: 'Unfortunately, this schedule is not possible. Please try again.',
};
