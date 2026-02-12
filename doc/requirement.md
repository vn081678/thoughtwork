#1 – Basic Search flow
As a MarsAir Sales Director (Mark)
I want potential customers to be able to search for flights to Mars
So that they see what trips are available

Acceptance criteria
There should be ‘departure’ and ‘return’ fields on a search form.
Flights leave every six months, in July and December, both ways.
Trips for the next two years should be searchable.
If there are seats, display “Seats available! Call 0800 MARSAIR to book!”
If there are no seats, display “Sorry, there are no more seats available.”
#2 – Promotional Codes
As a MarsAir Sales Director (Mark)
I want to distribute promotional codes to customers
So that they get discounts and are more tempted to purchase tickets

Acceptance criteria
Promotional codes are in the format XX9-XXX-999.
Characters are all random.
The first digit indicates the discount percentage (2 = 20%, 3 = 30% etc).
The next two digits are random.
The final digit is a check digit; it is equal to the sum of all other digits modulo 10, eg:

AF3-FJK-41?: 3 + 4 + 1 = 8, so the complete promotional code is AF3-FJK-418
JJ5-OPQ-32?: 5 + 3 + 2 = 10, so the complete promotional code is JJ5-OPQ-320

When a valid code is entered, the search result should have a “Promotional code [code] used: [discount]% discount!” message.
Otherwise, show “Sorry, code [invalid promo code] is not valid”.
#3 – Link to Home Page
As a MarsAir Sales Director (Mark)
I want potential customers to be able to go back to the flight search from anywhere on the site
So that they are guided towards booking trips

Acceptance criteria
“Book a ticket to the red planet now!” should apperar somewhere prominent on the page.
Clicking it takes the user to the home page.
Clicking the MarsAir logo on the top left should also take the user to the home page.
#4 – Invalid Return Dates
As a MarsAir Sales Director (Mark)
I want to prevent potential customers from searching for invalid trips
So that they don’t waste time, and book valid ones

Acceptance criteria
“Unfortunately, this schedule is not possible. Please try again.” displayed when return date is less than 1 year from the departure.