# Forest Lounge Builder

# Website Generation Prompt — The Forest Lounge

Copy everything below the line into Lovable / v0 / Bolt / Anthropic Claude Artifacts / etc.

---

Build a modern, production-ready, multi-page website for a restaurant called **"The Forest Lounge"**, a rooftop restaurant and coffee roastery in Dhanmondi, Dhaka, Bangladesh. Replace the outdated template-style design with a warm, upscale, editorial design that feels like a real hospitality brand — not a generic Bootstrap restaurant theme.

## Brand & Concept
- Name: The Forest Lounge
- Concept: A soft-industrial rooftop dining room combined with an open kitchen, a coffee take-out bar, and an on-site coffee roastery.
- Tone: Warm, earthy, upscale-casual, botanical/industrial hybrid — think exposed textures, greenery, warm brass/wood accents, moody lighting photography.
- Location: Imperial Amin Centre (rooftop), House #54, Road #10/A, Satmasjid Road, Dhanmondi, Dhaka, Bangladesh.
- Phone: +8801322853811 / +8801322853812
- Social: Facebook (@theforestlounge), Instagram (@the_forest_lounge), YouTube (@theforestlounge7009)
- Hours: Daily, 12:00 PM – 11:00 PM (7 days)

## Design Direction
- Modern, editorial, image-forward layout — generous whitespace, large hero imagery/video, refined serif display font paired with a clean sans-serif body font.
- Warm neutral palette (deep forest green, charcoal/black, cream/ivory, brass/gold accent) instead of a generic red/orange "restaurant template" palette.
- Smooth scroll-triggered fade/slide animations, subtle hover states, no cheap carousel clichés.
- Fully responsive (mobile-first), fast-loading, accessible (proper contrast, alt text, semantic HTML).
- Sticky/transparent-to-solid header on scroll.

## Site Architecture — Every Nav Item Is Its Own Dedicated Page
Build a real multi-page site (not single-page anchors). Navigation bar:

1. **Home** (`/`)
   - Full-screen hero (image/video) with tagline + "Book a Table" CTA
   - Brief welcome/story teaser with link to About
   - Featured dishes (3–4 cards) linking to Menu
   - Ambience/gallery preview strip
   - Testimonials/reviews carousel
   - Reservation CTA band with hours + phone
   - Map + address preview
   - Footer

2. **About** (`/about`)
   - Full story: first restaurant of its kind in Dhanmondi, soft-industrial dining room, open kitchen, coffee roastery
   - Chef/team highlight section
   - Photo gallery of the space
   - Values/philosophy (fresh ingredients, rooftop experience)

3. **Menu** (`/menu`)
   - Categorized food menu (Starters, Mains, Grill, Desserts, Beverages/Coffee) with tabs or filter chips
   - Each item: name, short description, price (৳), dietary tags (veg/spicy/etc.)
   - High-quality food photography grid
   - Downloadable/printable PDF menu option

4. **A La Carte** (`/a-la-carte`)
   - Separate premium/a la carte offering, same structured layout as Menu but visually distinguished (e.g., darker/elevated theme)

5. **Gallery** (`/gallery`)
   - Masonry/grid photo gallery of interior, rooftop view, food, coffee roastery
   - Lightbox on click

6. **Reservations** (`/reservations`)
   - Booking form: name, phone, email, date, time, party size, special requests
   - Opening hours displayed
   - Call-to-book fallback (click-to-call phone numbers)
   - Confirmation state/message on submit

7. **Contact** (`/contact`)
   - Address, embedded Google Map, phone numbers, email
   - Contact form
   - Social media links
   - Hours of operation

8. **News & Events / Blog** (`/blog` or `/news`)
   - Grid of articles/posts (image, date, category tags, excerpt)
   - Individual blog post template page (`/blog/[slug]`)

## Shared Components
- **Header/Nav**: Logo left, nav links center/right, "Reservation" button highlighted, mobile hamburger menu with slide-in drawer
- **Footer** (on every page): logo + short about blurb, quick links (mirrors nav), contact details, opening hours, social icons, address, copyright
- **Reservation CTA banner**: reusable component appearing on Home, Menu, and Contact
- **Testimonials component**: reusable, pulls from a reviews array

## Technical Requirements
- Use React (or Next.js if the tool supports file-based routing) with proper client-side routing so each nav item loads its own route/page, not a scroll anchor.
- Componentize: Header, Footer, Hero, MenuCard, ReservationForm, TestimonialCard, GalleryGrid, BlogCard.
- Use a clean typographic scale and consistent spacing system (e.g., Tailwind CSS with a custom theme: forest green, cream, charcoal, brass).
- Reservation and Contact forms should have client-side validation and a clear success/error state (no functional backend needed unless the tool supports it — mock the submission).
- Include placeholder food/interior photography (high-quality stock or generated) until real photos are swapped in — do not use the old cheap stock template images.
- SEO basics: page titles, meta descriptions, semantic heading hierarchy, alt text on all images.
- Ensure it's fully responsive down to 375px width.

## Content to Use (real business info — insert exactly)
- **Address**: Imperial Amin Centre (rooftop), House #54, Road #10/A, Satmasjid Road, Dhanmondi, Dhaka, Bangladesh
- **Phone**: +8801322853811, +8801322853812
- **Hours**: Open daily, 12:00 PM – 11:00 PM
- **Social**: Facebook, Instagram, YouTube (use icon links, real handles above)
- **Tagline options**: "Fresh Ingredients, Tasty Meals." / "A Rooftop Escape in the Heart of Dhanmondi."

Generate the full multi-page site now with this structure, routing, and design direction.

---

## Quick tips before you paste this in
- If your tool asks you to pick a stack first, choose **React + Tailwind** (or Next.js if offered) — this prompt assumes componentized, routed pages.
- After the first generation, do a second pass prompt like: *"Replace all placeholder images with [describe real photos/upload them], and swap in the real menu items and prices from our current menu."*
- Swap in your real logo file and real photography as a follow-up — AI builders can't pull images off the old Sylloo-hosted site for you.


https://theforestlounge.com/  this is website

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/73f41b94-c929-4734-8cff-3583b013f224).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
