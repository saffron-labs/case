# Phone Case — kiosk storefront mockup

A one-page site for a phone case kiosk: browse the cases on the wall, see the buy-3-pay-for-2 deal, and reserve on WhatsApp to pay at the counter.

Plain HTML, CSS and JavaScript. No build step, no frameworks.

## Before showing it to the shop

Everything shop-specific is at the top of `app.js`:

- `SHOP` — name, mall, kiosk number, landmark, opening hours, WhatsApp number, maps search
- `PRODUCTS` — names, prices, MRP, photos, compatible phones, specs

The shop name in the header, footer and page title all come from `SHOP.name`.

Also replace before going live:

- The three quotes in the reviews section of `index.html` are sample copy. Swap in real Google reviews.
- Product photos in `assets/images/`. Use the shop's own photos where possible.

## Run locally

```bash
python -m http.server 3000
```

Then open http://localhost:3000.

Live: https://saffronlabs.in/case/
