# MarsAir - Bug Report

> Generated from automated test runs on 2026-02-12  
> **Total: 31 tests | 20 passed | 11 failed** (first run)  
> **Promo re-run: 8 tests | 6 passed | 2 failed** (after fixing return date)

---

## BUG-001: Same departure and return month does not show invalid schedule error

- **Severity:** Critical
- **Requirement:** #4 — Invalid Return Dates
- **Test Cases:** TC-4.1/4.2

**Description:**  
When the user selects the same month for both Departing and Returning (e.g., July → July, December → December), the application should display *"Unfortunately, this schedule is not possible. Please try again."* since the return date is not at least 1 year after departure. Instead, the application shows *"Sorry, there are no more seats available."* as if it were a valid search.

**Steps to Reproduce:**
1. Navigate to the MarsAir home page
2. Select **"July"** from Departing
3. Select **"July"** from Returning
4. Click **Search**

**Expected Result:**  
`"Unfortunately, this schedule is not possible. Please try again."`

**Actual Result:**  
`"Sorry, there are no more seats available."`

**Affected Scenarios:**
- July → July (same month)
- December → December (same month)

---

## BUG-002: Return date before departure does not show invalid schedule error

- **Severity:** Critical
- **Requirement:** #4 — Invalid Return Dates
- **Test Cases:** TC-4.1/4.2

**Description:**  
When the user selects a return date that is chronologically before the departure date (e.g., Departing "December (next year)" → Returning "July"), the application should display the invalid schedule error. Instead, it shows *"Sorry, there are no more seats available."*

**Steps to Reproduce:**
1. Navigate to the MarsAir home page
2. Select **"December (next year)"** from Departing
3. Select **"July"** from Returning
4. Click **Search**

**Expected Result:**  
`"Unfortunately, this schedule is not possible. Please try again."`

**Actual Result:**  
`"Sorry, there are no more seats available."`

---

## BUG-003: "Book a ticket to the red planet now!" text is not a clickable link

- **Severity:** High
- **Requirement:** #3 — Link to Home Page
- **Test Cases:** TC-3.2

**Description:**  
Per the requirement, clicking *"Book a ticket to the red planet now!"* should navigate the user back to the home page. However, the text is rendered as a plain `<h3>` heading with no link (`<a>` tag). The element is not clickable and does not navigate anywhere.

**Steps to Reproduce:**
1. Navigate to the MarsAir home page
2. Perform a search to navigate to the results page
3. Attempt to click **"Book a ticket to the red planet now!"**

**Expected Result:**  
User is redirected to the home page.

**Actual Result:**  
Nothing happens. The text is not a link (timeout after 30s waiting for click action).

---

## BUG-004: Valid promotional codes JJ5-OPQ-320 and XX2-YZA-640 are rejected as invalid

- **Severity:** Critical
- **Requirement:** #2 — Promotional Codes
- **Test Cases:** TC-2.1, TC-2.5

**Description:**  
When entering promotional codes `JJ5-OPQ-320` and `XX2-YZA-640`, the application rejects them as invalid even though they appear to follow the `XX9-XXX-999` format. The application shows *"Sorry, code [code] is not valid"* instead of the expected discount message. Note: `AF3-FJK-418` (30% discount) is correctly recognized.

This may indicate a check digit validation issue in the application, or the codes may have incorrect check digits in our test data.

**Steps to Reproduce:**
1. Navigate to the MarsAir home page
2. Select **"July"** from Departing
3. Select **"December (two years from now)"** from Returning
4. Enter promotional code **JJ5-OPQ-320**
5. Click **Search**

**Expected Result:**  
`"Promotional code JJ5-OPQ-320 used: 50% discount!"`

**Actual Result:**  
`"Seats available! Sorry, code JJ5-OPQ-320 is not valid"`

**Affected Codes:**
| Code | Expected Discount | Actual behavior |
|------|-------------------|-----------------|
| AF3-FJK-418 | 30% | ✅ Accepted correctly |
| JJ5-OPQ-320 | 50% | ❌ Rejected as invalid |
| XX2-YZA-640 | 20% | ❌ Rejected as invalid |

**Analysis:**  
Per the requirement, check digit = sum of all other digits mod 10:
- `AF3-FJK-418`: digits are 3, 4, 1 → sum = 8 → check digit 8 ✅
- `JJ5-OPQ-320`: digits are 5, 3, 2 → sum = 10 → mod 10 = 0 → check digit should be 0 ✅ (appears correct, possible app bug)
- `XX2-YZA-640`: digits are 2, 6, 4, 0 → needs verification of which positions count as "digits"

---

## BUG-005: "Seats available" message does not match requirement wording

- **Severity:** Low
- **Requirement:** #1 — Basic Search Flow
- **Test Cases:** TC-1.1

**Description:**  
The requirement specifies the message *"Seats available! Call 0800 MARSAIR to book!"* when seats are available. However, the application displays *"Seats available! Call now on 0800 MARSAIR to book!"* — it includes the extra words **"now on"** which are not in the requirement.

**Steps to Reproduce:**
1. Navigate to the MarsAir home page
2. Select **"July"** from Departing
3. Select **"December (two years from now)"** from Returning
4. Click **Search**

**Expected Result (per requirement):**  
`"Seats available! Call 0800 MARSAIR to book!"`

**Actual Result:**  
`"Seats available! Call now on 0800 MARSAIR to book!"`
