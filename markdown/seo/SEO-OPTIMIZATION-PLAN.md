# P&R Solutions Website - SEO Optimization Plan
**Date:** March 3, 2026
**Website:** plasterandrenderingsolutions.co.uk
**Current Status:** Single-page React SPA (5,160 lines) with 6 services, basic SEO implemented
**Goal:** Multi-page routing with dedicated SEO per service page

---

## 📊 Current State Analysis

### ✅ What's Working Well
- **Existing Services:** 6 fully-featured service pages (Silicone, Monocouche, EWI, Plastering, Dry Lining, + 1 more)
- **Core SEO Elements:** Homepage has solid meta tags, Open Graph, Twitter Card, JSON-LD schema
- **Content Structure:** Rich service data with FAQs, systems, and detailed descriptions
- **Architecture:** Client-side routing already implemented, well-organized component structure
- **Quality:** Professional content, good keyword targeting for Sheffield plastering market

### ⚠️ Current SEO Gaps
| Issue | Impact | Severity |
|-------|--------|----------|
| **No unique URLs per service** | All services load as single page + hash (#service-x) | HIGH |
| **No page-specific meta tags** | Every page has identical title/description | HIGH |
| **No dedicated canonical URLs** | Search engines can't distinguish service pages | HIGH |
| **No individual schema markup** | Search results show generic schema, not service-specific | MEDIUM |
| **No separate HTML pages** | Harder for crawlers to index service pages independently | MEDIUM |
| **No page-specific Open Graph** | Social sharing shows generic home page info | MEDIUM |
| **No service page sitemaps** | Sitemap only lists homepage | LOW |

### 🎯 SEO Opportunity
Your competitor analysis suggests you're targeting:
- **Primary:** "plasterer Sheffield", "plastering Sheffield", "silicone render Sheffield"
- **Secondary:** "monocouche Sheffield", "EWI Sheffield", "dry lining Sheffield"
- **Tertiary:** "float and skim Sheffield", "rendering Sheffield"

**Current Blocker:** Search engines treat all services as single page, so you can't dominate individual service keywords.

---

## 🛠️ Recommended Implementation Approach

### 1. **Routing Framework: React Router v6**
**Why:**
- Industry standard for React SPAs
- Works seamlessly with Vercel
- Mature ecosystem, excellent documentation
- Enables client-side rendering with SEO optimization
- Easy to implement with current codebase

**Routes to Create:**
```
/ → HomePage
/services → Services Hub (service cards)
/silicone-render/ → Silicone Service Detail
/monocouche-render/ → Monocouche Service Detail
/internal-plastering/ → Plastering Service Detail
/external-wall-insulation/ → EWI Service Detail
/dry-lining/ → Dry Lining Service Detail
/float-and-skim/ → Float & Skim Service Detail (if exists)
/contact → Contact Page
/faq → FAQ Page
/privacy → Privacy Policy
/terms → Terms of Service
```

### 2. **Meta Tag Management: React Helmet Async**
**Library:** `react-helmet-async`
- Dynamically manage all head tags per route
- Supports server-side rendering (future enhancement)
- Simple integration with existing React code

**Per-Route Meta Tags:**
- `<title>` (unique)
- `<meta name="description">` (unique)
- `<meta name="keywords">` (service-specific)
- `<link rel="canonical">` (route-specific)
- `<meta property="og:*">` (Open Graph, unique)
- `<script type="application/ld+json">` (Schema.org, unique)

### 3. **Code Organization**
```
src/
├── components/
│   ├── Layout.jsx           (Header, Footer, Navigation)
│   ├── SEOMeta.jsx          (Meta tag injection component)
│   ├── Services/
│   │   ├── ServiceList.jsx  (Services hub page)
│   │   ├── ServiceDetail.jsx (Dynamic service page)
│   │   └── serviceData.js   (All 6 service configurations)
│   ├── Home.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   └── Policies/
│       ├── Privacy.jsx
│       └── Terms.jsx
├── hooks/
│   └── useSEO.js            (Custom hook for SEO management)
├── data/
│   ├── seoKeywords.js       (Keywords per service)
│   ├── schemaMarkup.js      (JSON-LD generators)
│   └── routes.js            (Route configuration)
├── App.jsx                  (Router setup)
└── index.html               (Keep as minimal entry point)
```

### 4. **SEO Data Structure Per Service**

Each service will have:
```javascript
{
  id: 'silicone-render',
  slug: '/silicone-render/',

  // SEO Meta Tags
  seo: {
    title: 'Silicone Render Sheffield | Professional Rendering | P&R Solutions',
    description: 'Premium silicone rendering services in Sheffield with 25-year warranty. Weather-resistant, breathable, self-cleaning external render. Free quote 07595 399525',
    keywords: ['silicone render Sheffield', 'silicone rendering Sheffield', 'external rendering Sheffield', 'weather-resistant render', 'self-cleaning render Sheffield'],
    canonicalUrl: 'https://www.plasterandrenderingsolutions.co.uk/silicone-render/',
  },

  // Content (existing)
  title: 'Silicone Render',
  subtitle: '...',
  content: '...',

  // Open Graph
  og: {
    title: 'Premium Silicone Rendering in Sheffield',
    description: '25-year warranty on silicone render installation. Weather-resistant & self-cleaning.',
    image: 'https://www.plasterandrenderingsolutions.co.uk/images/hero/silicone-service.jpeg',
  },

  // Schema Markup (auto-generated)
  schema: {
    '@type': 'Service',
    'name': 'Silicone Render',
    'description': '...',
    'areaServed': { '@type': 'City', 'name': 'Sheffield' },
    'provider': { '@type': 'LocalBusiness', 'name': 'Plaster and Rendering Solutions Limited' }
  }
}
```

---

## 📋 Target Keywords by Service

### Service 1: Silicone Render
**Primary:** silicone render Sheffield, silicone rendering Sheffield, premium render Sheffield
**Secondary:** weather-resistant rendering, self-cleaning render, durable external render
**Long-tail:** silicone render cost Sheffield, silicone render warranty, silicone render installation Sheffield

**Title:** `Silicone Render Sheffield | Professional Rendering Services | P&R Solutions`
**Meta:** `Premium silicone rendering services in Sheffield with 25-year warranty. Weather-resistant, breathable, self-cleaning. Free quote.`

---

### Service 2: Monocouche Render
**Primary:** monocouche render Sheffield, monocouche rendering Sheffield, single-coat render
**Secondary:** rapid render application, durable render, cost-effective rendering
**Long-tail:** monocouche vs acrylic Sheffield, monocouche installation cost, monocouche durability

**Title:** `Monocouche Render Sheffield | Single-Coat Rendering | P&R Solutions`
**Meta:** `Professional monocouche rendering services in Sheffield. Single-coat application, 20-25 year durability. Rapid installation, exceptional finish.`

---

### Service 3: Internal Plastering
**Primary:** plasterer Sheffield, internal plastering Sheffield, float and skim Sheffield
**Secondary:** plasterboard finishing, wall plastering, ceiling plastering
**Long-tail:** internal plastering cost Sheffield, plastering quote Sheffield, re-plastering services

**Title:** `Internal Plastering Sheffield | Float & Skim Services | P&R Solutions`
**Meta:** `Professional internal plastering services in Sheffield. Float, skim, re-plastering for walls & ceilings. Expert finishes. Free quote.`

---

### Service 4: External Wall Insulation (EWI)
**Primary:** EWI Sheffield, external wall insulation Sheffield, thermal insulation
**Secondary:** energy efficiency, insulation installation, building regulations
**Long-tail:** EWI cost Sheffield, EWI savings, EWI installation Sheffield, mineral wool EWI

**Title:** `External Wall Insulation (EWI) Sheffield | Energy Efficiency | P&R Solutions`
**Meta:** `Professional EWI installation in Sheffield. Energy-efficient systems, thermal insulation, improved property value. 25-35% heating savings.`

---

### Service 5: Dry Lining
**Primary:** dry lining Sheffield, dry lining services Sheffield, internal boarding
**Secondary:** plasterboard installation, stud walls, partition walls
**Long-tail:** dry lining cost Sheffield, dry lining installer Sheffield, acoustic boarding

**Title:** `Dry Lining Sheffield | Professional Boarding Services | P&R Solutions`
**Meta:** `Professional dry lining and boarding services in Sheffield. Internal walls, ceilings, stud work. Expert installation & finishing.`

---

### Service 6: Float and Skim (if separate page)
**Primary:** float and skim Sheffield, plastering Sheffield, wall finishing
**Secondary:** skimming services, plaster finishing, drywall finishing
**Long-tail:** float and skim cost Sheffield, plastering quote, replastering services

**Title:** `Float & Skim Plastering Sheffield | Expert Wall Finishing | P&R Solutions`
**Meta:** `Professional float and skim plastering services in Sheffield. Expert wall finishes, re-plastering, drywall completion. Free quote.`

---

## 🔧 Technical Implementation Checklist

### Phase 1: Setup & Dependencies
- [ ] Install `react-router-dom@6`
- [ ] Install `react-helmet-async`
- [ ] Install `react-helmet` (optional, for CSR support)
- [ ] Verify build process (likely Vite or Webpack)
- [ ] Update package.json scripts

### Phase 2: Route Configuration
- [ ] Create `src/routes/routeConfig.js` with all routes
- [ ] Update `App.jsx` to use `<BrowserRouter>` + `<Routes>`
- [ ] Create route components for each service
- [ ] Implement dynamic routing with `useParams()`

### Phase 3: SEO Components
- [ ] Create `SEOMeta.jsx` component
- [ ] Create `useSEO.js` custom hook
- [ ] Implement per-route meta tag injection
- [ ] Add canonical URL tags
- [ ] Implement Open Graph tags per route

### Phase 4: Schema Markup
- [ ] Create schema generator functions
- [ ] Add Service schema for each service page
- [ ] Add BreadcrumbList schema for navigation
- [ ] Implement Organization schema with service collection

### Phase 5: Deployment & Verification
- [ ] Build locally (`npm run build`)
- [ ] Test all routes with React Router
- [ ] Verify meta tags with browser DevTools
- [ ] Submit URLs to Google Search Console
- [ ] Update sitemap.xml with new routes
- [ ] Deploy to Vercel
- [ ] Monitor with Google Search Console

---

## 📱 Responsive & Mobile SEO

### Current Strengths
- ✅ Mobile-first design philosophy
- ✅ Responsive service cards
- ✅ Touch-friendly navigation
- ✅ Fast loading (Vercel CDN)

### Enhancements
- [ ] Ensure breadcrumb navigation on service pages
- [ ] Add "back to services" navigation
- [ ] Mobile-optimized service content
- [ ] Fast Core Web Vitals (monitor with PageSpeed Insights)

---

## 📊 Expected SEO Impact

### Before Implementation
- 1 indexed page (homepage)
- 0 service-specific rankings
- Limited keyword opportunities
- Generic meta tags across all content

### After Implementation
- **6+ indexed pages** (1 home + 6 services = 7 pages minimum)
- **6 unique keyword opportunities** (one per service)
- **Service-specific meta tags** for each page
- **Unique schema markup** for each service
- **Dedicated landing pages** for local search
- **Higher click-through rates** (unique titles/descriptions)

### Realistic Timeline
- **Weeks 1-2:** Initial indexing of new routes
- **Weeks 2-4:** First rankings for branded keywords ("P&R Solutions [service]")
- **Months 2-3:** Local keyword rankings ("silicone render Sheffield")
- **Months 3-6:** Competitive keyword improvements ("plasterer Sheffield")

---

## 🚀 Implementation Priority

| Priority | Task | Effort | ROI |
|----------|------|--------|-----|
| P0 | Setup React Router + routes | 2-3 hours | 🔴 Critical |
| P0 | Create SEOMeta component | 2-3 hours | 🔴 Critical |
| P0 | Update service data with SEO fields | 2-4 hours | 🔴 Critical |
| P1 | Implement per-route meta tags | 2-3 hours | 🟠 High |
| P1 | Add Service schema markup | 2-3 hours | 🟠 High |
| P1 | Update canonical URLs | 1-2 hours | 🟠 High |
| P2 | Generate dynamic sitemap.xml | 1-2 hours | 🟡 Medium |
| P2 | Create robots.txt | 30 mins | 🟡 Medium |
| P3 | Setup GSC monitoring | 30 mins | 🟢 Low |
| P3 | Create analytics dashboard | 1-2 hours | 🟢 Low |

---

## 📂 File Structure After Refactor

```
/Users/gloves/Projects/my-project/website/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── SEO/
│   │   │   ├── SEOMeta.jsx
│   │   │   └── SchemaMarkup.jsx
│   │   ├── Services/
│   │   │   ├── ServiceList.jsx
│   │   │   ├── ServiceDetail.jsx
│   │   │   └── serviceData.js (contains all 6 services)
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Policies.jsx
│   │   └── Common/
│   │       └── ErrorBoundary.jsx
│   ├── hooks/
│   │   ├── useSEO.js
│   │   └── useServiceData.js
│   ├── data/
│   │   ├── seoKeywords.js
│   │   └── routeConfig.js
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   └── index.jsx
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── images/
│       └── hero/
├── package.json
└── index.html (minimal, only entry point)
```

---

## ✅ Next Steps

1. **Review this plan** - Let me know if you want any adjustments
2. **Confirm routing preference** - React Router v6 recommended
3. **Start implementation** - I can:
   - Create the new file structure
   - Implement React Router
   - Set up SEO components
   - Add per-service meta tags and schema
   - Generate new routes for each service

**Estimated Total Time:** 4-6 hours for complete implementation

**Questions?**
- Any specific routing library preference?
- Want to use TypeScript?
- Need help with Vercel deployment configuration?

---

**Last Updated:** March 3, 2026
**Status:** Ready for implementation approval