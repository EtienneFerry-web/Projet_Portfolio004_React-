# Simply Furniture

A production-ready e-commerce storefront for a premium furniture brand, built with React 19, TypeScript and Vite.

## Live demo

> Deploy to Vercel in one click — see [Deployment](#deployment) below.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Routing | React Router v7 |
| State | Context API + localStorage |
| Styling | CSS custom properties (BEM) |
| Fonts | Inter + Playfair Display (Google Fonts) |

---

## Features

- **Home** — Hero carousel with autoplay, stats bar, curated collections, delivery section, newsletter signup
- **Catalog** — 20 products across 7 categories, sidebar filters (search, category, price range), sort, Load more pagination, wishlist hearts
- **Product Detail** — Image gallery + lightbox zoom, colour picker, quantity selector, dimension SVG guide, customer reviews, related products, Schema.org JSON-LD
- **Cart** — Slide-out drawer, localStorage persistence, real-time badge count
- **Wishlist** — Heart toggle on cards and detail page, localStorage persistence
- **Checkout** — 4-step flow (Cart → Shipping → Payment → Confirmation), sticky order summary, free shipping threshold
- **Legal pages** — CGV, Returns Policy, Privacy Policy
- **SEO** — Open Graph meta tags, Twitter Card, Schema.org on product pages, dynamic `<title>` per route
- **404 page** — Custom not-found with navigation
- **Toast notifications** — Global feedback system for cart actions
- **Responsive** — Mobile-first, hamburger menu, collapsible sidebar

---

## Getting started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `VITE_SITE_URL` | Your production URL — used for SEO canonical URLs |
| `VITE_STRIPE_PUBLIC_KEY` | Stripe publishable key (when adding payments) |

---

## Project structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, Hero, CartDrawer…)
├── context/          # React Context: CartContext, WishlistContext, ToastContext
├── data/             # Static product and review data (TypeScript)
├── hooks/            # Custom hooks — useSEO
├── pages/            # Route-level components (Catalog, ProductDetail, Checkout…)
├── styles/           # Per-page CSS files
├── App.tsx           # Router setup
├── index.css         # Global styles + design tokens
└── main.tsx          # App entry point
```

---

## Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import the repository in [vercel.com](https://vercel.com)
3. Set the **Root Directory** to `portfolio005_React` (the inner folder)
4. Add your environment variables in the Vercel dashboard
5. Deploy

The included `vercel.json` handles SPA routing so all routes resolve correctly.

---

## Roadmap to full production

The frontend is complete. To accept real orders, the following backend integrations are needed:

- [ ] **Payment** — Stripe Elements or Stripe Checkout
- [ ] **Email** — Resend or SendGrid for order confirmations, newsletter, waitlist
- [ ] **Database** — Supabase or PostgreSQL for products, orders, inventory
- [ ] **Authentication** — Supabase Auth or Auth.js for customer accounts
- [ ] **Admin panel** — Order management and inventory updates
- [ ] **Real product images** — Replace Unsplash URLs with a CDN (Cloudflare Images, S3)
- [ ] **Tax calculation** — Regional VAT for EU compliance

---

## Design system

CSS custom properties defined in `src/index.css`:

| Token | Value |
|-------|-------|
| `--cream` | #F5F0E8 |
| `--brown-light` | #C4703A |
| `--brown` | #6B3A1E |
| `--dark` | #1A1208 |
| `--green` | #7A9A7E |
| `--font-heading` | Playfair Display |
| `--font-body` | Inter |

---

Built by Etienne Ferry
