# 🚀 Manual Deployment Guide

## If the script doesn't work, follow these exact steps:

### **Step 1: Create Required Directories**

```bash
# From your website project root:
mkdir -p components/sections
mkdir -p public/images/portfolio
```

---

### **Step 2: Copy React Components**

Replace `{SESSION_PATH}` with the actual path shown in your workspace.

```bash
# Copy PortfolioGallery.jsx
cp {SESSION_PATH}/PortfolioGallery.jsx components/sections/

# Copy AboutUsSection.jsx
cp {SESSION_PATH}/AboutUsSection.jsx components/sections/
```

**Where to find these files:**
- They're in your Claude session workspace
- Look for files named: `PortfolioGallery.jsx` and `AboutUsSection.jsx`

---

### **Step 3: Copy Images**

```bash
# Copy all portfolio images (9 images)
cp {SESSION_PATH}/mnt/website/public/images/portfolio/*.jpg public/images/portfolio/

# Copy About Us hero image
cp {SESSION_PATH}/mnt/website/public/images/about-us-hero.jpg public/images/
```

**Files to copy:**
- `IMG_3979.jpg`
- `IMG_4040.jpg`
- `IMG_4147.jpg`
- `IMG_3508.jpg`
- `IMG_4020.jpg`
- `IMG_3555.jpg`
- `IMG_3646.jpg`
- `IMG_4835.jpg`
- `project-before-1.jpg`
- `about-us-hero.jpg`

---

### **Step 4: Update Your Homepage**

**Find your homepage file** (usually one of these):
- `pages/index.jsx`
- `pages/index.tsx`
- `app/page.jsx`
- `src/pages/index.jsx`

**Add these imports at the top:**

```jsx
import PortfolioGallery from '@/components/sections/PortfolioGallery';
import AboutUsSection from '@/components/sections/AboutUsSection';
```

**Find where you render your sections** and add the components in this order:

```jsx
export default function Home() {
  return (
    <>
      {/* Existing Hero Section */}
      <HeroSection />

      {/* ADD THIS - Updated About Us */}
      <AboutUsSection />

      {/* Existing sections */}
      <WhatWeOffer />
      <ServiceComparison />

      {/* ADD THIS - New Portfolio Gallery */}
      <PortfolioGallery />

      {/* Existing sections */}
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
```

---

### **Step 5: Test Locally**

```bash
# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Open in browser
# Usually: http://localhost:3000
```

**Check:**
- ✅ All images load
- ✅ Portfolio section displays correctly
- ✅ Service filters work (click buttons)
- ✅ About Us section looks good
- ✅ Mobile responsive (resize browser)

---

### **Step 6: Commit and Push**

```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Add portfolio gallery and update about us section with hero image"

# Push to GitHub
git push origin main
```

---

### **Step 7: Verify Live Site**

1. Go to `https://plasterandrenderingsolutions.co.uk`
2. Scroll down to see the updated About Us section
3. Continue scrolling to see the new Portfolio Gallery
4. Test service filters and responsive design

---

## 🎯 Expected Results

### Portfolio Gallery Shows:
- ✅ 6 project cards in a grid
- ✅ Service type badges (green)
- ✅ Location info under each project
- ✅ Filter buttons at top
- ✅ Hover effects on cards

### About Us Section Shows:
- ✅ Large hero image on left
- ✅ Content on right
- ✅ Floating stats box (100+ Projects, 25Y Warranty)
- ✅ Benefit list with icons
- ✅ Call-to-action button

---

## 🚨 Troubleshooting

**Images not showing?**
- [ ] Verify files copied to `public/images/portfolio/`
- [ ] Check file paths in components match exactly
- [ ] Try `npm run build` to rebuild

**Components not rendering?**
- [ ] Check imports in homepage file
- [ ] Verify component files in `components/sections/`
- [ ] Check for syntax errors (use browser console)

**Styling looks wrong?**
- [ ] Ensure Tailwind CSS is working
- [ ] Check `tailwind.config.js` exists
- [ ] Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**GitHub not updating?**
- [ ] Check you pushed to correct branch (`main`)
- [ ] Wait a few minutes for deployment
- [ ] Check your hosting provider's deployment status

---

## 💡 Quick File Reference

Your components folder should look like:
```
components/
├── sections/
│   ├── PortfolioGallery.jsx  ← NEW
│   └── AboutUsSection.jsx    ← NEW
└── (other existing components)
```

Your public folder should look like:
```
public/
├── images/
│   ├── portfolio/            ← NEW
│   │   ├── IMG_3979.jpg
│   │   ├── IMG_4040.jpg
│   │   ├── ... (9 images total)
│   │
│   └── about-us-hero.jpg     ← NEW
└── (other existing files)
```

---

## ✅ Verification Checklist

- [ ] Components copied to `components/sections/`
- [ ] All 10 images in `public/images/`
- [ ] Homepage imports added
- [ ] Components added to JSX
- [ ] Local dev server running and tested
- [ ] Git commit created
- [ ] Changes pushed to GitHub
- [ ] Live site updated and verified

---

**Need help?** Check the QUICK_START.md or DEPLOYMENT_GUIDE.md for more info!
