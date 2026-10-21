# Kafkas Flooring website

The website for **Kafkas Flooring**, a Vancouver flooring installer (16 years experience) doing hardwood,
laminate, luxury vinyl plank, glue-down vinyl, carpet tile, stairs, baseboards and subfloor prep.

It's built with [Astro](https://astro.build) and turns into plain static HTML files, so it's fast and cheap to host.

## Pages

| Address     | File                        |
|-------------|-----------------------------|
| `/`         | `src/pages/index.astro`     |
| `/services` | `src/pages/services.astro`  |
| `/gallery`  | `src/pages/gallery.astro`   |
| `/contact`  | `src/pages/contact.astro`   |

The header, mobile menu, footer and the mobile Message Us / Free Estimate bar live in
`src/layouts/Base.astro` and appear on every page.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install      # once, downloads Astro
npm run dev      # starts a local site at http://localhost:4321 that updates as you edit
```

## Build it

```bash
npm run build    # creates the finished site in the /dist folder
npm run preview  # (optional) view the built site locally
```

## Put it online (Vercel)

1. In [Vercel](https://vercel.com), click **Add New → Project** and import this repo.
2. Framework preset: **Astro**. No other settings needed. Click **Deploy**.

Every push to `main` will redeploy the site automatically.

## Where to change things

- **Phone, email, Facebook link, service areas, form endpoint:** `src/data/site.js`.
  Change it once there and every page updates. The phone number is empty for now; when you fill it in,
  it appears automatically in the header, mobile menu, mobile bottom bar, contact page and footer.
- **The 7 services and the gallery photos/captions:** also in `src/data/site.js`.
- **Page text:** in the page files listed above (the text is written right in the HTML).
- **Photos:** `public/images/`. To swap a photo, replace the file and keep the same name.
- **Colours and fonts:** in the `<style>` blocks of `src/layouts/Base.astro` and each page.
- **Animations** (fade-in on scroll, hero zoom, image hover zoom): `public/motion.js`.

## TODO before launch

- [ ] **Estimate form:** create a free form at [formspree.io](https://formspree.io) and paste its endpoint
      into `formEndpoint` in `src/data/site.js` (it's `https://formspree.io/f/YOUR_FORM_ID` right now, so the
      form will show an error until this is set). Note: Formspree only accepts **photo uploads on a paid plan**;
      on the free plan, either upgrade or remove the "Photos of the space" field in `src/pages/contact.astro`.
- [ ] **Get from the client:** phone number, email and business address (add them in `src/data/site.js`).
- [ ] **Check facts with the client:** the service-area city list and the start year (`foundedYear: 2010`
      is guessed from "16 years").
- [ ] Optional: real Google or Facebook reviews for a testimonials section.
- [ ] Update `site` in `astro.config.mjs` if the live domain isn't `kafkasflooring.com`.

## Reference

`docs/` holds the original design handoff notes (`handoff-README.md`) and prototype (`prototype.dc.html`)
for reference only. They are not part of the live site.
