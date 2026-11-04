# Phone Case — kiosk storefront mockup

A one-page site for a phone case kiosk. Shoppers type their phone model, see which cases fit and whether they're in stock today, then reserve on WhatsApp and pay at the counter.

## What it does

- **Phone finder.** Search any model ("s24", "16 pro max", "redmi note 13"). The site remembers it and shows only cases that fit, with stock for that phone.
- **Stock status.** In stock, only a few left, or sold out with a restock date. Sold-out cases offer a WhatsApp "tell me when it's back".
- **Phone not listed?** One tap to ask the shop on WhatsApp.
- **Buy 3, pay for 2.** Applied in the bag with a progress meter, plus a "send the deal to the group chat" share button.
- **Share a case.** "Send to a friend" shares a link that opens straight to that case and phone.
- **Deep links** for Instagram bios and stories: `?phone=iPhone%2015&case=blue-dreamer`.
- **Android auto-detect.** On Chrome for Android it offers "Looks like you're on a Galaxy S24".

Plain HTML, CSS and JavaScript. No build step, no frameworks.

## Before showing it to the shop

Everything shop-specific is at the top of `app.js`:

- `SHOP` — name, mall, kiosk number, landmark, opening hours, WhatsApp number, maps search
- `PHONES` — the models people can search for
- `PRODUCTS` — names, prices, MRP, photos, compatible phones, specs
- `STOCK_OVERRIDES` — real stock counts. Until it's filled, the mockup generates a believable mix

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
