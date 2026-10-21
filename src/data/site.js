// ---------------------------------------------------------------------------
// SITE SETTINGS — edit this file to change business details across every page.
//
// - Facebook link, service areas and the form endpoint are used in the header,
//   footer, contact page, mobile bottom bar and Google's structured data.
// - The phone number appears in the header, mobile menu, mobile bottom bar,
//   contact page and footer. The address appears in the footer and contact page.
// - Photos live in /public/images. The lists below say which photo goes where.
// ---------------------------------------------------------------------------

const img = (name) => `/images/${name}.jpg`;

export const site = {
  name: 'Kafkas Flooring',
  yearsExperience: 16,
  foundedYear: 2010, // inferred from "16 years" — confirm with the client

  // How the number is shown on the page, and the digits used for tap-to-call links.
  phone: '(604) 780-1071',
  phoneHref: 'tel:+16047801071',

  // Optional — shown on the contact page and in the footer when filled in.
  email: '',

  facebook: 'https://www.facebook.com/profile.php?id=100064131426409',

  address: {
    street: '5933 Cooney Rd.',
    city: 'Richmond',
    region: 'BC',
    postalCode: 'V6X 1A7',
    country: 'CA',
  },

  // Cities in the contact form's "City" list and in Google's structured data.
  serviceAreas: [
    'Vancouver',
    'Burnaby',
    'Richmond',
    'North Vancouver',
    'West Vancouver',
    'New Westminster',
    'Coquitlam',
    'Surrey',
  ],
  // The sentence version shown on the page.
  serviceAreaText:
    'Vancouver, Burnaby, Richmond, the North Shore, New Westminster, Coquitlam, Surrey and surrounding areas.',

  // ESTIMATE FORM: create a free form at https://formspree.io, then copy the
  // form's endpoint (looks like https://formspree.io/f/abcdwxyz) and paste it here.
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',

  logo: '/images/logo.png',
  heroImage: img('herringbone-walnut'),
};

// Main navigation (header and mobile menu).
export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Our Floors' },
  { href: '/contact', label: 'Free Estimate' },
];

// The 7 services: used by the home page "sample board" and the Services page.
export const services = [
  {
    title: 'Hardwood',
    img: img('herringbone-oak'),
    short: 'Solid and engineered, straight lay or herringbone.',
    long: 'Engineered and solid hardwood, nailed, glued or floated to suit the subfloor. Straight plank, wide plank and herringbone, laid with tight joints and proper expansion gaps.',
    tags: ['Engineered', 'Solid', 'Herringbone', 'Wide plank'],
  },
  {
    title: 'Luxury vinyl plank',
    img: img('lvp-room'),
    short: 'Waterproof, quiet and tough. Good for basements and rentals.',
    long: 'Click and glue-down LVP for kitchens, basements, rentals and shops. Waterproof, warm underfoot and hard to scratch. We match stair nosings and transitions to the plank.',
    tags: ['Click LVP', 'Basements', 'Rentals', 'Stair nosing'],
  },
  {
    title: 'Laminate',
    img: img('stairs-laminate'),
    short: 'The look of oak at a lower price, floors and stairs.',
    long: 'Floating laminate over the right underlay, with stairs clad to match. A good-looking floor for the budget when it’s laid on a flat base.',
    tags: ['Floating', 'Underlay', 'Stairs'],
  },
  {
    title: 'Glue-down vinyl',
    img: img('checkerboard'),
    short: 'Sheet, tile and plank, bonded down for good.',
    long: 'Glue-down vinyl tile and plank for kitchens, bathrooms and commercial spaces. Fully bonded on a levelled substrate, so it stays put under heavy traffic.',
    tags: ['Vinyl tile', 'Commercial', 'Kitchens'],
  },
  {
    title: 'Carpet tile',
    img: img('carpet-stairs'),
    short: 'Offices and basements, plus stair carpet.',
    long: 'Carpet tile for offices, basements and rec rooms, and stair carpet installed tight to every tread and riser.',
    tags: ['Carpet tile', 'Offices', 'Stair carpet'],
  },
  {
    title: 'Subfloor prep and self-leveling',
    img: img('self-level'),
    short: 'Grinding, patching and pours so the floor sits flat.',
    long: 'Old flooring removed, subfloor screwed down and repaired, high spots ground and self-leveler poured. The part nobody sees, and the reason the floor lasts.',
    tags: ['Tear-out', 'Self-leveler', 'Repairs'],
  },
  {
    title: 'Stairs, baseboards and trim',
    img: img('oak-stairs'),
    short: 'Treads, risers, nosings, baseboards and transitions.',
    long: 'Treads and risers cut to each stair, matching nosings, new baseboards, quarter round and transitions. The finishing that makes the whole floor look built in.',
    tags: ['Treads and risers', 'Baseboards', 'Transitions'],
  },
];

// Gallery photos, in order. `cat` must match one of `galleryFilters`.
// The home page "Recent floors" shows the first 8.
export const gallery = [
  { img: img('herringbone-walnut'), label: 'Walnut herringbone', cat: 'Hardwood' },
  { img: img('oak-winder'), label: 'Oak winder stairs', cat: 'Stairs' },
  { img: img('commercial-lvp'), label: 'Retail store, vinyl plank', cat: 'Commercial' },
  { img: img('loft-hardwood'), label: 'Wide-plank hardwood loft', cat: 'Hardwood' },
  { img: img('checkerboard'), label: 'Vinyl tile kitchen', cat: 'Vinyl and laminate' },
  { img: img('acacia-stairs'), label: 'Acacia hall and stairs', cat: 'Stairs' },
  { img: img('basement-lvp'), label: 'Basement LVP and gym floor', cat: 'Vinyl and laminate' },
  { img: img('herringbone-oak'), label: 'Oak herringbone', cat: 'Hardwood' },
  { img: img('lvp-stairs'), label: 'Vinyl plank stairs', cat: 'Stairs' },
  { img: img('lvp-room'), label: 'Light oak vinyl plank', cat: 'Vinyl and laminate' },
  { img: img('carpet-stairs'), label: 'Patterned stair carpet', cat: 'Stairs' },
  { img: img('vinyl-tile'), label: 'Stone-look vinyl tile', cat: 'Vinyl and laminate' },
  { img: img('stairs-laminate'), label: 'Laminate stairs and landing', cat: 'Stairs' },
  { img: img('oak-stairs'), label: 'Oak treads with mitred nosing', cat: 'Stairs' },
  { img: img('self-level'), label: 'Self-leveler pour', cat: 'Commercial' },
];

export const galleryFilters = ['All', 'Hardwood', 'Vinyl and laminate', 'Stairs', 'Commercial'];
