# MarsAir - Playwright Test Suite

Automated end-to-end tests for the [MarsAir](https://marsair.recruiting.thoughtworks.net/TrungVo) flight booking application using Playwright with TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)

## Setup

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/search.spec.ts
npx playwright test tests/promo-code.spec.ts
npx playwright test tests/navigation.spec.ts
npx playwright test tests/invalid-dates.spec.ts

# Run in headed mode (see the browser)
npx playwright test --headed

# Run with UI mode (interactive)
npx playwright test --ui
```

## View Test Report

```bash
npx playwright show-report
```

## Project Structure

```
├── doc/                        # Documentation
│   ├── requirement.md          # Requirements (user stories)
│   ├── manual-test-cases.md    # Manual test cases
│   ├── page-analysis.md        # Page element analysis
│   ├── bug-report.md           # Bug reports from test runs
│   └── question.md             # Open questions & analysis
├── fixture/                    # Playwright fixtures
│   └── marsair.fixture.ts      # MarsAirPage fixture
├── pages/                      # Page Object Models
│   └── marsair.page.ts         # MarsAir home page POM
├── test-data/                  # Test data (TypeScript)
│   ├── search.data.ts          # Search & schedule data
│   ├── promo-code.data.ts      # Promotional code data
│   └── navigation.data.ts      # Navigation link data
├── tests/                      # Test scripts
│   ├── search.spec.ts          # #1 Basic search flow
│   ├── promo-code.spec.ts      # #2 Promotional codes
│   ├── navigation.spec.ts      # #3 Link to home page
│   └── invalid-dates.spec.ts   # #4 Invalid return dates
├── playwright.config.ts        # Playwright configuration
└── tsconfig.json               # TypeScript configuration
```
