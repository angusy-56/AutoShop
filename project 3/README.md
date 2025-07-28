# Mean Streets Performance - Automotive Repair Website

A modern, responsive website for Mean Streets Performance automotive repair shop built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, flat design with subtle animations and micro-interactions
- **Responsive**: Mobile-first design that works on all devices
- **Quote System**: Comprehensive quote request form with email notifications
- **Payment Processing**: Secure invoice payment via Stripe
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Ready**: Meta tags, Open Graph, and sitemap support
- **Accessible**: WCAG AA compliant design

## Pages

- **Home**: Hero section, services grid, testimonials, and CTA
- **About**: Company story, timeline, team, and values
- **Contact**: Business hours, contact info, and contact form
- **Quote**: Detailed quote request form
- **Pay Invoice**: Secure payment processing
- **Success/Cancel**: Payment result pages

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

**Required Environment Variables:**

#### SMTP Configuration (for quote emails)
- `SMTP_HOST`: Your SMTP server (e.g., smtp.gmail.com)
- `SMTP_PORT`: SMTP port (usually 587)
- `SMTP_USER`: Your email address
- `SMTP_PASS`: Your email password or app password
- `SMTP_FROM`: From email address

#### Stripe Configuration
- `STRIPE_SECRET_KEY`: Your Stripe secret key (use test key for development)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key

### 3. Stripe Setup

1. Create a [Stripe account](https://dashboard.stripe.com/register)
2. Get your API keys from the [Developers section](https://dashboard.stripe.com/apikeys)
3. For development, use test keys (they start with `sk_test_` and `pk_test_`)
4. Add the keys to your `.env.local` file

### 4. Email Setup

For Gmail:
1. Enable 2-factor authentication
2. Generate an app password
3. Use your Gmail address as `SMTP_USER`
4. Use the app password as `SMTP_PASS`

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## Customization

### Replace Placeholders

Search for `TODO:` comments throughout the codebase to find items that need customization:

- Logo: Replace placeholder in `components/Navigation.tsx` and `components/Footer.tsx`
- Contact information: Update phone, email, and address
- Business hours: Modify in `components/Footer.tsx` and `app/contact/page.tsx`
- Team photos: Add actual photos in `app/about/page.tsx`
- Google Maps: Embed actual map in `app/contact/page.tsx`

### Styling

The design uses CSS custom properties for easy theming:

```css
:root {
  --bg: #f7f8fb;        /* Background color */
  --card: #ffffff;      /* Card background */
  --ink: #0f172a;       /* Text color */
  --accent: #5aa7f0;    /* Accent color */
  --muted: #e9edf3;     /* Muted elements */
}
```

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`
4. Add environment variables in Netlify dashboard
5. Deploy

### Deploy to Vercel

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

## API Routes

- `/api/quote`: Handles quote form submissions and sends emails
- `/api/create-checkout-session`: Creates Stripe checkout sessions for payments

## Performance

The website is optimized for performance:

- Static generation with Next.js
- Optimized images
- Code splitting
- Minimal JavaScript bundle
- CSS optimization

Target Lighthouse scores: 90+ across all metrics.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Mean Streets Performance. All rights reserved.