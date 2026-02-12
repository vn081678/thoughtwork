# MarsAir - Manual Test Cases

> Derived from [requirement.md](./requirement.md) and [page analysis](./page-analysis.md)

---

## Testing Approach

My approach to testing the MarsAir application was **requirement-driven** and **acceptance-criteria-focused**. I started by analyzing the page structure (HTML elements, form fields, dropdown options) to understand what the application provides, then mapped each user story's acceptance criteria into concrete, verifiable test cases.

For each requirement, I designed tests covering:

- **Happy path** — Verifying the feature works as intended under normal conditions (e.g., searching with valid dates, entering a valid promo code).
- **Negative/error path** — Ensuring the application handles invalid inputs gracefully (e.g., invalid promo codes, return dates too close to departure).
- **Boundary conditions** — Testing edge cases at the limits of acceptance criteria (e.g., return date exactly 1 year from departure, promo code check digit validation).
- **UI/UX consistency** — Confirming that navigation elements (logo, links) work correctly from any page and that key messages appear as specified.

The test cases are structured to be **independent** — each can be executed in isolation without relying on the outcome of another test — and **traceable** back to a specific requirement, making it easy to assess coverage and identify gaps.

---

## #1 — Basic Search Flow

### TC-1.1: Search with available seats

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the MarsAir home page | Page loads with booking form visible |
| 2 | Select **"July"** from Departing dropdown | "July" is selected |
| 3 | Select **"December (next year)"** from Returning dropdown | "December (next year)" is selected |
| 4 | Click **Search** | Result displays: **"Seats available! Call 0800 MARSAIR to book!"** |
a
### TC-1.2: Search with no seats available

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the MarsAir home page | Page loads |
| 2 | Select a Departing date | Date is selected |
| 3 | Select a Returning date (at least 1 year later) | Date is selected |
| 4 | Click **Search** | Result displays: **"Sorry, there are no more seats available."** |

### TC-1.3: Departing and Returning dropdowns have correct options

| Step | Action | Expected Result | 
| 1 | Navigate to the MarsAir home page | Page loads |
| 2 | Open the Departing dropdown | Options: Select..., July, December, July (next year), December (next year), July (two years from now), December (two years from now) |
| 3 | Open the Returning dropdown | Same options as Departing |

### TC-1.4: Flights depart every six months (July and December)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the Departing dropdown | Only July and December months are listed (no other months) |
| 2 | Open the Returning dropdown | Only July and December months are listed (no other months) |

### TC-1.5: Trips cover the next two years

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the Departing dropdown | Options span current period through two years from now (6 options total) |
| 2 | Open the Returning dropdown | Same range available |

---

## #2 — Promotional Codes

### TC-2.1: Valid promotional code is accepted

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the MarsAir home page | Page loads |
| 2 | Select a valid Departing date | Date is selected |
| 3 | Select a valid Returning date (≥ 1 year later) | Date is selected |
| 4 | Enter a valid promo code, e.g. **AF3-FJK-418** | Code is entered |
| 5 | Click **Search** | Result includes: **"Promotional code AF3-FJK-418 used: 30% discount!"** |

### TC-2.2: Invalid promotional code is rejected

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the MarsAir home page | Page loads |
| 2 | Select a valid Departing date | Date is selected |
| 3 | Select a valid Returning date (≥ 1 year later) | Date is selected |
| 4 | Enter an invalid promo code, e.g. **INVALID-CODE** | Code is entered |
| 5 | Click **Search** | Result includes: **"Sorry, code INVALID-CODE is not valid"** |

### TC-2.3: Promo code with wrong check digit is invalid

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the MarsAir home page | Page loads |
| 2 | Select valid Departing and Returning dates | Dates selected |
| 3 | Enter a code with correct format but wrong check digit, e.g. **AF3-FJK-419** | Code is entered |
| 4 | Click **Search** | Result includes: **"Sorry, code AF3-FJK-419 is not valid"** |

### TC-2.4: Promo code format validation (XX9-XXX-999)

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter code **not matching** format `XX9-XXX-999` (e.g. `123-456-789`) | Code is entered |
| 2 | Click **Search** | Code is treated as invalid |

### TC-2.5: Discount percentage matches first digit

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Enter valid promo code starting with digit **5**, e.g. **JJ5-OPQ-320** | Code is entered |
| 2 | Select valid dates and click **Search** | Discount shows **50%** |

### TC-2.6: Empty promotional code

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Leave promotional code field **empty** | Field is blank |
| 2 | Select valid dates and click **Search** | Search proceeds normally, no promo-related message shown |

---

## #3 — Link to Home Page

### TC-3.1: "Book a ticket" text is visible

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to any page on the site | Page loads |
| 2 | Look for the text | **"Book a ticket to the red planet now!"** is displayed prominently |

### TC-3.2: "Book a ticket" links to home page

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to a non-home page (e.g. search results) | Page loads |
| 2 | Click **"Book a ticket to the red planet now!"** | User is redirected to the home page |

### TC-3.3: MarsAir logo links to home page

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to a non-home page (e.g. search results) | Page loads |
| 2 | Click the **MarsAir logo** (top left) | User is redirected to the home page |

---

## #4 — Invalid Return Dates

### TC-4.1: Return date less than 1 year from departure shows error

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the MarsAir home page | Page loads |
| 2 | Select **"July"** from Departing | "July" is selected |
| 3 | Select **"December"** from Returning (same year, ~5 months later) | "December" is selected |
| 4 | Click **Search** | Result displays: **"Unfortunately, this schedule is not possible. Please try again."** |

### TC-4.2: Return date equal to departure shows error

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select **"July"** from Departing | "July" is selected |
| 2 | Select **"July"** from Returning (same period) | "July" is selected |
| 3 | Click **Search** | Result displays: **"Unfortunately, this schedule is not possible. Please try again."** |

### TC-4.3: Return date exactly 1 year from departure is valid

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select **"July"** from Departing | "July" is selected |
| 2 | Select **"July (next year)"** from Returning | "July (next year)" is selected |
| 3 | Click **Search** | Search proceeds — shows seats available or no seats (no schedule error) |

### TC-4.4: Return date more than 1 year from departure is valid

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Select **"July"** from Departing | "July" is selected |
| 2 | Select **"December (next year)"** from Returning | "December (next year)" is selected |
| 3 | Click **Search** | Search proceeds — shows seats available or no seats (no schedule error) |
