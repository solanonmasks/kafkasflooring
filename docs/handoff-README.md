# Handoff: Kafkas Flooring website

## Overview
A new website for Kafkas Flooring, a Vancouver flooring installer with 16 years of experience. They do residential and commercial work: hardwood, laminate, luxury vinyl plank, glue-down vinyl, carpet tile, baseboards and trim, and subfloor prep and self-leveling. They are fully insured and give free estimates. Their only current presence is a Facebook page (https://www.facebook.com/profile.php?id=100064131426409). The goal is estimate requests. The direction comes from their logo: **teal and cream, a thin geometric uppercase typeface, and the logo's circle**, with oak as the accent.

## About the design files
These are **design references built in HTML**, not production code. Rebuild the site in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.
- `Kafkas Flooring.dc.html`: source prototype. Open `preview.html` to click through it. All pages live in one file and switch with JS state. **Build them as real routes.**
- `kafkas/`: all project photos and the logo. Use these files.
- `motion.js`: reference for the scroll-reveal and image-zoom behaviour. `support.js` is the prototype runtime only; **do not ship it**.

## Fidelity
**High fidelity.** Colours, type, spacing, copy and imagery are final. The exact values are inline in the prototype.

## Pages / routes
- `/` **Home**
  - **Hero:** the full-bleed walnut herringbone photo with a radial teal overlay. In the centre is a **cream-ringed circle** echoing the logo, sized `--d: max(300px, min(86vw, 640px, 100vh - 290px))`. It must stay a perfect circle: set width and height to the same value and keep its content within it. Inside the circle is the H1 “FLOORS, / LAID RIGHT.” (Josefin Sans 300, font-size d × 0.13) and a 2-line subhead. Below the circle are two CTAs: oak Get a Free Estimate and cream See Our Floors. A caption sits bottom-left.
  - **Facts strip** on #103A3D, in uppercase Josefin: 16 years · Fully insured · Homes and businesses · Free estimates.
  - **The sample board** (signature feature): 7 services shown as tall vertical “planks” in a flex row (height clamp(520px, 62vh, 680px), 6px gap).
    - The active plank is flex 5; the others are flex 1, transitioning over .7s cubic-bezier(.2,.7,.2,1).
    - Inactive titles are vertical (writing-mode vertical-rl, rotated 180°). The active title is horizontal, and its description fades in.
    - Hover sets the active plank; clicking the active plank goes to /services.
    - Under 700px, the planks stack vertically: 96px tall, 360px when active.
  - **Before/after slider:** the self-leveler pour (before) over the checkerboard vinyl kitchen (after), at 3:4. The before layer uses clip-path inset(0 X% 0 0). Pointer-drag moves a cream 4px divider with a 64px round handle, starting at 50%. Make it keyboard-accessible: use an input range or arrow keys.
  - **Stairs:** a heading column plus 3 stair photos at stepped offsets (top margins 160 / 80 / 0px), so they read like steps. Under 700px they stack with no offsets.
  - **Commercial:** a full-bleed retail store photo with a left teal gradient.
  - **Process statement:** a single large centred uppercase sentence on #27666A, not numbered steps.
  - **Recent floors:** masonry with 4 columns (3 under 1140px, 2 under 700px).
  - **Final CTA** on cream with a circular oak herringbone photo, ringed in teal.
- `/services`: 7 alternating photo/text rows, each with a long description and outlined tags, followed by an oak CTA band.
- `/gallery`: filter buttons (All / Hardwood / Vinyl and laminate / Stairs / Commercial) over a captioned masonry grid.
- `/contact`: the form has name*, phone*, email, city (select), floor type (select), rough size (select), job description, and photo upload (multiple). It needs a real handler, e.g. Formspree, Resend or a Vercel function, and shows an inline thank-you state on success. The oak side panel has a photo, Message us on Facebook, service area, and Free estimate · Fully insured.

## Global
- Sticky header: the round logo (logo.png cropped to a circle with scale 1.36) plus a KAFKAS / FLOORING wordmark in Josefin Sans. Nav: Services, Our Floors, Free Estimate. An oak Get a Free Estimate button.
- Below 1140px: a Menu overlay and a sticky bottom bar (Message Us / Free Estimate).
- Footer: logo, services, contact, © 2026, and a plank strip of 7 flex bars in oak, cream and teal at the top.
- Responsive and mobile-first. Content max-width is 1440px, with side padding of clamp(20px, 4vw, 56px).
- Motion: scroll reveal (opacity plus a 28px rise over .9–1s, 90ms stagger) and image hover zoom to 1.045. Respect prefers-reduced-motion.
- SEO: per-page title and meta description, Open Graph tags, and LocalBusiness JSON-LD.

## Design tokens
- Teal base #103A3D, raised #174A4D, line #215A5E / #2C6A6E / #3B7C80, brand teal #2F7377, process section #27666A, footer #0A282A.
- Cream #F4F0E6. Dark text on cream #103A3D / #27484A. Light secondary text on teal #D2E4E1 / #E1EDEB.
- Oak accent #E2AE6C (buttons and highlights), hover #F0C489. Plank-strip oaks: #C48A4A, #D69C5A, #B57A40.
- Fonts: **Josefin Sans** 300 for headlines, always uppercase, letter-spacing .01–.02em, line-height about 1. **Albert Sans** 400–800 for body (18px / 1.6) and buttons.
- Buttons: square corners, 18px / 800, padding 19–20px 30–32px.

## Before launch: get from the client
- **Phone number, email and business address.** None were available, so Facebook is used as the contact method throughout. Add a `tel:` link to the header and the mobile bar once you have the number.
- The service-area city list (proposed) and the year they started (“since 2010” is inferred from 16 years).
- Optional: real Google or Facebook reviews to add a testimonials section.

## Files
- README.md
- Kafkas Flooring.dc.html (prototype source)
- preview.html (self-contained clickable preview)
- kafkas/ (logo and 15 project photos)
- motion.js, support.js
