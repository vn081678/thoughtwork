# MarsAir - Questions & Analysis

---

## Bug Severity Definitions (assumed)

| Level | Definition |
|-------|------------|
| **Critical** | Core functionality is broken. The feature does not work as specified and there is no workaround. Users are directly impacted and cannot complete key tasks. |
| **High** | A feature is broken or missing, but a workaround exists. The issue significantly affects user experience but does not completely block the workflow. |
| **Low** | Cosmetic or minor wording issues. The feature works correctly but the output does not exactly match the specification (e.g. text differences, styling). |

---

## 🔍 #2 — Promotional Codes: Check digit calculation is ambiguous

The requirement says:

> **Format:** `XX9-XXX-999`  
> **The final digit is a check digit** = sum of all other digits modulo 10

Looking at the examples:

- `AF3-FJK-41?` → **3** + **4** + **1** = 8 → check digit **8**
- `JJ5-OPQ-32?` → **5** + **3** + **2** = 10 → check digit **0**

The format `XX9-XXX-999` has positions: `X X 9 - X X X - 9 9 9`

The "digits" in the code are at positions: **3rd** (`9`), **8th** (`9`), **9th** (`9`), **10th** (`9`)

From the examples, the check digit sums only the **first 3 digits** (positions 3, 8, 9), not all digits. So for our test data:

| Code | Digits | Sum | Check digit | Valid? |
|------|--------|-----|-------------|--------|
| `AF3-FJK-418` | 3, 4, 1 → 8 | 8 | 8 ✅ | ✅ App accepted |
| `JJ5-OPQ-320` | 5, 3, 2 → 10 | 0 | 0 ✅ | ❌ App rejected — **needs investigation** |
| `XX2-YZA-640` | 2, 6, 4 → 12 | 2 | 0 ❌ | ❌ App rejected — **our check digit was wrong!** |

**Finding:** `XX2-YZA-640` has a wrong check digit in our test data! Sum 2+6+4 = 12, mod 10 = **2**, so the correct code should be `XX2-YZA-642`.

But `JJ5-OPQ-320` (from the requirement's own example!) was rejected by the app — this is a **potential app bug**.

---

## Other gaps I see:



1. **Promo code with seats available vs no seats**: We should verify that the promo discount message appears regardless of seat availability. Currently we can only test promo codes on routes with seats — if a promo code is applied on a "no seats" route, does the discount still display? This is unclear from the requirement.

2. **One-way ticket support**: The app currently assumes round-trip travel (departure + return). There is no option for a one-way ticket. Consider:
   - Adding a "One way" checkbox or trip type selector
   - Disabling/hiding the return field when one-way is selected
   - Clarifying in the requirements if one-way trips are in scope

3. **Required field validation before submit**: The form currently allows submitting with default "Select..." values. Consider:
   - Adding required field indicators (e.g., asterisk `*`) on Departing and Returning
   - Showing inline validation messages (e.g., "Please select a departure date") when submitting without selections
   - Disabling the Search button until both fields are selected

4. **Error handling for edge cases**: Consider testing and handling:
   - What happens when both Departing and Returning are left as "Select..."
   - What happens when only one field is selected
   - Special characters or SQL injection attempts in the promo code field

