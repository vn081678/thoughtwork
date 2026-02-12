# MarsAir - Page Analysis

> **URL:** https://marsair.recruiting.thoughtworks.net/TrungVo  
> **Page Title:** Mars Airlines: Home

---

## Overview

The MarsAir home page is a simple flight booking form. Users select departure and return dates, optionally enter a promotional code, and click Search to find available flights to Mars.

---

## Page Layout

- **Logo** — "MarsAir" text at the top left, links back to the home page.
- **Heading** — "Welcome to MarsAir!"
- **Sub-heading** — "Book a ticket to the red planet now!"
- **Booking Form** — The main interaction area (details below).
- **Footer Links** — Report an issue, Problem definition, Privacy Policy.

---

## Booking Form

The form submits via **POST** to `/TrungVo`.

### 1. Departing (dropdown)

- **Element:** `<select>` with `id="departing"`
- **Options:**

  | Value | Label |
  |-------|-------|
  | *(empty)* | Select... |
  | 0 | July |
  | 1 | December |
  | 2 | July (next year) |
  | 3 | December (next year) |
  | 4 | July (two years from now) |
  | 5 | December (two years from now) |

### 2. Returning (dropdown)

- **Element:** `<select>` with `id="returning"`
- **Options:** Same as Departing (values 0–5).

### 3. Promotional Code (text input)

- **Element:** `<input type="text">` with `id="promotional_code"`
- **Max length:** 255 characters

### 4. Search (button)

- **Element:** `<input type="submit" value="Search">`
- **Note:** No `id` attribute — locate by `value="Search"`

---

## Footer Links

- **Report an issue** → `/TrungVo/report`
- **Problem definition** → `/mission.html`
- **Privacy Policy** → `https://www.thoughtworks.com/privacy-policy` (opens in new tab)
