# KSP CU Sinar Sejahtera Website

Modern, responsive website for KSP CU Sinar Sejahtera - a Credit Union (Koperasi Simpan Pinjam) in Tarakan, Kalimantan Utara, Indonesia.

## 🌟 About

KSP CU Sinar Sejahtera is a trusted Credit Union founded on May 17, 2014, with legal entity status obtained on February 28, 2025. We serve 785+ active members with Rp 10 Billion in managed assets.

**Tagline**: SMART — Sejahtera, Mandiri, Amanah, Responsif, dan Terpercaya

## 🚀 Features

- **Interactive Calculators**: Loan and savings calculators with real-time calculations
- **Product Showcase**: Detailed information on 5 savings products and 2 loan products
- **News & Updates**: Latest news and announcements for members
- **Transparency**: Access to financial reports and governance documents
- **Membership Information**: Complete guide to joining the cooperative
- **Contact Forms**: Easy communication with the cooperative
- **Mobile-First Design**: Optimized for all devices
- **SEO Optimized**: Built for search engine visibility

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
ksp-cu-website/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── layanan/             # Services page
│   ├── keanggotaan/         # Membership page
│   ├── transparansi/        # Transparency page
│   ├── berita/              # News section
│   └── kontak/              # Contact page
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components (Header, Footer)
│   ├── sections/            # Page sections
│   ├── calculators/         # Financial calculators
│   ├── forms/               # Form components
│   └── shared/              # Shared components
├── lib/                     # Utilities and configurations
│   ├── config/              # Site configuration
│   ├── data/                # Static data (products, news)
│   ├── calculations.ts      # Calculator logic
│   ├── validations.ts       # Zod schemas
│   └── utils.ts             # Utility functions
├── types/                   # TypeScript type definitions
│   └── index.ts
├── public/                  # Static assets
│   ├── images/              # Images
│   ├── documents/           # PDFs (reports, forms)
│   └── icons/               # Icons
└── styles/                  # Global styles
    └── globals.css
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ksp-cu-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables file:
```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
EMAIL_API_KEY=your_email_service_api_key
EMAIL_FROM=noreply@example.com
EMAIL_TO=info@example.com
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Run ESLint:
```bash
npm run lint
```

## 📊 Key Features Implementation

### Loan Calculator
- Calculate monthly payments for business and consumer loans
- Interest rates: 1% (Produktif) and 1.5% (Konsumtif) per month
- Loan amounts: Rp 1M - Rp 50M
- Terms: 6-36 months
- Detailed payment schedule

### Savings Calculator
- Compound interest calculations
- 5 savings products with different rates (5% - 7% annual)
- Visual growth chart
- Flexible time periods (1-10 years)

### Products
**Savings Products**:
- Simpanan Saham (5% annual)
- Simpanan Sukarela (6% annual)
- Simpanan Harian (5.5% annual)
- Simpanan Pendidikan (7% annual)
- Simpanan Hari Raya (6.5% annual)

**Loan Products**:
- Pinjaman Produktif (1% monthly)
- Pinjaman Konsumtif (1.5% monthly)

## 🎨 Design System

### Colors
- **Primary (Navy Blue)**: `#1E3A8A` - Trust, stability
- **Secondary (Teal)**: `#0D9488` - Growth, prosperity
- **Accent (Coral)**: `#F97316` - Energy, CTAs

### Typography
- **Headings**: Plus Jakarta Sans
- **Body**: Inter

### Spacing
8px base grid system (xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px, 4xl: 96px)

## 🌐 Pages

- **/** - Homepage with hero, products overview, calculators, testimonials
- **/about** - Organization history, vision & mission, SMART values, board structure
- **/layanan** - Detailed savings and loan products, comparison table
- **/keanggotaan** - Membership benefits, requirements, registration process, FAQ
- **/transparansi** - Financial reports, RAT information, governance documents
- **/berita** - News listing and individual article pages
- **/kontak** - Contact form, office information, Google Maps

## 📱 Responsive Design

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

All components are mobile-first and fully responsive.

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper color contrast ratios
- Semantic HTML structure

## 🚀 Performance

Target metrics:
- **LCP**: < 2.5 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1
- **Lighthouse Score**: 90+ across all categories

## 📝 Content Management

### Adding News Articles
Edit `lib/data/news.ts` to add new articles:
```typescript
{
  slug: 'article-slug',
  title: 'Article Title',
  excerpt: 'Brief description',
  content: 'Full article content in markdown',
  featuredImage: '/images/news/image.jpg',
  date: '2025-01-15',
  category: 'Category',
  author: 'Author Name',
}
```

### Updating Products
Edit `lib/data/products.ts` to update product information, rates, and requirements.

### Site Configuration
Edit `lib/config/site.ts` to update contact information, social media links, and site statistics.

## 🔒 Security

- HTTPS enforced
- Input sanitization
- CSRF protection
- Rate limiting on forms
- Environment variables for sensitive data

## 📄 License

This project is proprietary and confidential. All rights reserved by KSP CU Sinar Sejahtera.

## 👥 Contact

**KSP CU Sinar Sejahtera**
- Address: Jl. Aki Pingka RT.02 No.02, Tarakan, Kalimantan Utara
- Phone: [TO BE PROVIDED]
- Email: [TO BE PROVIDED]
- Website: [TO BE PROVIDED]

## 🙏 Acknowledgments

Built with modern web technologies to serve our members better.

---

**Version**: 1.0.0  
**Last Updated**: January 2025
