# Plaster & Rendering Solutions - SEO & GMB Setup Guide

## 🗂️ Photo Folder Structure

Create this folder structure in your website directory:

```
/website/
├── /images/
│   ├── /hero/              # Homepage and service page hero images
│   │   ├── home-hero.jpg
│   │   ├── silicone-hero.jpg
│   │   ├── monocouche-hero.jpg
│   │   ├── ewi-hero.jpg
│   │   ├── plastering-hero.jpg
│   │   ├── drylining-hero.jpg
│   │   └── gallery-hero.jpg
│   │
│   ├── /projects/          # Before & After project photos
│   │   ├── /silicone/
│   │   │   ├── silicone-before-1.jpg
│   │   │   ├── silicone-after-1.jpg
│   │   │   └── ...
│   │   ├── /monocouche/
│   │   ├── /ewi/
│   │   ├── /plastering/
│   │   └── /drylining/
│   │
│   ├── /testimonials/      # Client testimonial images
│   │   ├── client-john-smith.jpg
│   │   └── ...
│   │
│   ├── /logos/             # Branding assets
│   │   ├── logo-green.png
│   │   ├── logo-white.png
│   │   └── favicon.ico
│   │
│   └── /case-studies/      # Full case study images
│       ├── project-dore.jpg
│       ├── project-grenoside.jpg
│       └── ...
```

**Photo Optimization Tips:**
- Use WebP format for faster loading (with JPG fallback)
- Compress images to 100-200KB maximum
- Name files descriptively: `silicone-rendering-sheffield-before.jpg`
- Add alt text describing the service and location
- Use high-quality images (at least 1200x800px for hero images)

---

## 📍 Google My Business (GMB) Integration

### 1. **Update the SEO Schema in Your HTML**

Find the schema section in `index.html` and update with your actual GMB details:

```javascript
// Replace these placeholder values:
"streetAddress": "[Your Street Address]",      // Add your full address
"addressLocality": "Sheffield",
"addressRegion": "South Yorkshire",
"postalCode": "[Your Postcode]",               // Add your postcode

// Update hours to match your GMB:
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "09:00",
    "closes": "13:00"
  }
]

// Update your GMB Map URL:
"sameAs": [
  "https://www.google.com/maps/place/[YOUR+GMB+NAME]",  // Search GMB name on Google Maps and paste the URL
]
```

### 2. **Update Contact Page Hours**

Edit the Business Hours section in the contact form to match your GMB hours.

### 3. **Get Your GMB URL**

1. Open Google My Business
2. Go to "Info" section
3. Copy the "Business Profile" URL
4. Update the schema `"sameAs"` field with this URL

### 4. **Link Your Website**

In Google My Business:
1. Click "Edit Profile"
2. Add your website URL: `https://www.plasterandrenderingsolutions.com`
3. Verify the connection

---

## 🎯 Sheffield SEO Optimization Checklist

### ✅ Local Keywords to Target
- "rendering Sheffield" / "plasterers Sheffield"
- "silicone render Sheffield" / "monocouche Sheffield"
- "EWI Sheffield" / "external wall insulation Sheffield"
- "dry lining Sheffield" / "internal plastering Sheffield"
- "plastering contractor near me" (South Yorkshire)
- "rendering company Sheffield"
- "plaster repair Sheffield"

### ✅ Local SEO Actions

**1. Schema Markup Updates** (Already added!)
- ✅ LocalBusiness schema
- ✅ Organization schema
- ✅ AggregateRating (5.0 stars)
- ⏳ Add ServiceArea schema (update with specific Sheffield postcodes)

**2. Google My Business Optimization**
- Upload 10+ high-quality photos to GMB
- Post monthly updates about new projects
- Respond to all reviews within 24 hours
- Add detailed business description with keywords
- Verify business phone and address

**3. Local Citations**
- Ensure business name, address, phone are consistent across:
  - Your website
  - Google My Business
  - Local directories (Yell, Yelp, Trustpilot, etc.)
  - Industry directories (BSA, NFRC, etc.)

**4. Content Optimization**
- Add location-specific pages:
  - `/services/rendering-dore-sheffield`
  - `/services/plastering-grenoside`
  - `/services/ewi-chapeltown`
  - Include local area names in headings and content
  - Target long-tail keywords with location names

**5. Review Generation**
- Ask satisfied clients to leave Google reviews
- Respond to all reviews (positive and negative)
- Aim for 5+ new reviews per month
- Your current 5.0 stars with 10 reviews is excellent - keep building!

---

## 🔗 Enhanced Animation Features Added

Your site now includes:

### **Animation Types**
- ✅ Fade-up on scroll
- ✅ Slide-in effects (left/right)
- ✅ Scale-in animations
- ✅ Float effects on static elements
- ✅ Glow effects on logo
- ✅ Smooth button hover with ripple effect
- ✅ Enhanced transitions between pages

### **Micro-Interactions**
- Button lift effect on hover (3px upward)
- Smooth shadow transitions
- Color transitions on links
- Staggered animations for list items
- Smooth accordion opens/closes for FAQs

---

## 📊 SEO Metrics to Monitor

### Monthly Tracking
1. **Google Search Console**
   - Monitor Sheffield-related keywords
   - Track impressions and click-through rate
   - Check for any indexing issues

2. **Google Analytics**
   - Track local traffic (Sheffield, South Yorkshire)
   - Monitor service page performance
   - Track conversion rate from contact form
   - Monitor bounce rate and time on page

3. **Google My Business**
   - Track profile views and phone calls
   - Monitor direction requests
   - Check review trends

### Target Goals (First 6 Months)
- Rank in top 3 for "plastering Sheffield"
- Rank in top 5 for "rendering Sheffield"
- 20+ monthly GMB profile views
- 10+ monthly phone calls from Google
- 25+ new Google reviews

---

## 🚀 Additional Recommendations

### **1. Add Service Area Schema**
Add this to expand Sheffield coverage:
```javascript
"areaServed": {
  "@type": "City",
  "name": "Sheffield",
  "geo": {
    "@type": "GeoShape",
    "box": "53.3703,-1.5166 53.3803,-1.4666" // Sheffield coordinates
  }
}
```

### **2. Video Content**
- Create short before/after project videos
- Post to YouTube with Sheffield keyword tags
- Embed on service pages

### **3. Blog Content**
Create monthly blog posts:
- "Silicone Rendering vs Monocouche for Sheffield Homes"
- "EWI Benefits for South Yorkshire Properties"
- "Internal Plastering Timeline and Cost Guide"

### **4. Mobile Optimization**
- Test on mobile devices
- Ensure all CTAs are clickable on mobile
- Verify loading speed on 4G

### **5. Local Backlinks**
- Partner with local building suppliers
- Get listed in Sheffield business directories
- Reach out to property management companies

---

## 📞 GMB Settings Checklist

- [ ] Business name matches exactly with registration
- [ ] Phone number is verified
- [ ] Address matches your registration documents
- [ ] Hours are up to date
- [ ] Service areas include: Sheffield, Dore, Crosspool, Grenoside, Hillsborough, Chapeltown
- [ ] At least 10 high-quality photos uploaded
- [ ] Website URL added and verified
- [ ] Google review link shared (get customers to leave reviews)
- [ ] Q&A section enabled with common questions answered
- [ ] Posts updated monthly with new projects

---

## 🔧 Technical SEO Checklist

- [x] Responsive design (mobile-friendly)
- [x] Fast loading speed
- [x] SSL certificate (HTTPS)
- [x] Schema markup (LocalBusiness, Organization)
- [ ] XML sitemap created
- [ ] robots.txt optimized
- [ ] Google Search Console set up
- [ ] Google Analytics installed
- [ ] Page meta descriptions optimized (160 characters)
- [ ] All images have alt text

---

## 📝 Next Steps

1. **Update schema with your GMB details** (address, postcode, hours)
2. **Organize and upload photos** to folder structure
3. **Optimize GMB profile** with photos and description
4. **Create location-specific service pages** for Dore, Grenoside, etc.
5. **Monitor monthly SEO metrics**
6. **Request Google reviews** from satisfied clients

---

**Questions?** Refer to this guide and update the schema sections with your actual business details.
