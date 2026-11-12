# LEXMORA — Buyer & Seller Demo Flow

This is a frontend-only template. It does not call a backend, API, database, booking engine, or payment processor.

## Buyer flow
1. Open `index.html` and browse the local vehicle inventory.
2. Click **أضف للسلة** on a sale vehicle or **احجز الإيجار** on a rental vehicle.
3. Open the cart from the header. Rental duration can be edited in days.
4. Confirm the demo request. The template asks the customer to sign in or create a demo account first.
5. Submitted items appear in `orders.html`, and a clearly unpaid demo record appears in `payments.html`.

## Seller flow
1. Open the **اعرض سيارتك** section on the homepage.
2. Enter the owner contact details, vehicle and listing type (sale/rent).
3. The request is saved locally and appears under **سياراتي المعروضة** (`my-listings.html`) after signing in. Guest requests are associated with the account on the next sign-in/sign-up in the same browser.
4. Requests are marked **بانتظار المراجعة**; they are not published to public inventory.

## Local browser data
- `LEXMORA_cart`: selected buy/rent items.
- `LEXMORA_orders`: demo purchase/rental requests.
- `LEXMORA_payments`: unpaid, illustrative payment records only.
- `LEXMORA_listing_requests`: seller listing submissions.
- `LEXMORA_customer` / `LEXMORA_customers`: demo account profile and credentials.

LocalStorage is browser-specific and can be cleared by the user. Demo credentials are not secure. Do not use real passwords, personal data, payment cards, or real bookings in this template.
