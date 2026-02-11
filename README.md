# Hirachu

A modern e-commerce storefront for handcrafted Japanese dolls, built with Next.js 16 and Shopify's Storefront API. Features a Tokyo-inspired minimalist design with smooth animations and progressive web app capabilities.

## Features

- **Headless Shopify** - Full integration with Shopify Storefront API 2025-10
- **Tokyo Minimalist Design** - Clean, editorial aesthetic with smooth interactions
- **Full E-commerce** - Cart, checkout, wishlist, and product search
- **Command Palette Search** - Lightning-fast product search with Ctrl+K (⌘K)
- **Progressive Web App** - Offline support with custom service worker
- **Performance Optimized** - ISR caching, lazy loading, image optimization
- **SEO Ready** - Dynamic OG images, structured data, and metadata
- **Server Actions** - Modern form handling with Next.js Server Actions
- **Analytics** - Vercel Analytics and Speed Insights integrated

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **E-commerce:** Shopify Storefront API
- **Search:** cmdk (Command Palette)
- **Icons:** Phosphor Icons
- **Fonts:** Geist, Geist Mono, Hachi Maru Pop

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Shopify store with Storefront API access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hirachu.git
cd hirachu
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file:

```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
```

**Getting Shopify credentials:**
1. Shopify Admin → Settings → Apps and sales channels
2. "Develop apps" → "Create an app"
3. Configure Storefront API scopes (products, collections, cart)
4. Install and copy your Storefront Access Token

4. Run development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
hirachu/
├── app/                # App directory
│   ├── api/           # API routes (OG images)
│   ├── shop/          # Product pages
│   └── ...            # Static pages
├── components/        # React components
│   ├── sections/     # Page sections
│   ├── cart/         # Cart components
│   └── ...
├── lib/              # Utilities
│   ├── shopify.ts    # Shopify client
│   ├── actions.ts    # Server Actions
│   └── ...
├── public/           # Static assets
│   ├── images/       # Product images
│   └── sw.js         # Service worker
└── ...
```

## Configuration

### Email Integration

Add your email service in `lib/actions.ts`:

```typescript
// Newsletter: subscribeToNewsletter()
// Contact: submitContactForm()
```

Recommended: Resend, SendGrid, or Postmark.

### Customization

- **Colors:** `app/globals.css`
- **Fonts:** `app/layout.tsx`
- **Products:** Import CSV from `files/` to Shopify

## Key Features

### Product Search
- Press `Ctrl+K` (⌘K on Mac)
- Fuzzy search with instant results
- ESC to close

### Wishlist
- Click heart icon to save products
- Persisted in localStorage
- Badge shows count

### Cart
- Add from product pages
- Drawer interface
- Redirects to Shopify checkout

### PWA
- Offline support for key pages
- Auto-registers in production

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Works on any Next.js hosting:
- Netlify
- Railway
- Fly.io
- Self-hosted

## Performance

- ISR revalidation: 1 hour
- Lighthouse scores: 95+
- Image optimization
- Route-based code splitting
- Automatic prefetching

## License

MIT License

## Author

**The Teleporter**
- Website: [dex.codes](https://dex.codes)
- Twitter: [@theteleporter_](https://x.com/theteleporter_)

---

Built for doll collectors worldwide
