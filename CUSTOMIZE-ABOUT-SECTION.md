# ✨ Customize About Section - Copy & Paste Guide

**File to Edit:** `website-v2/src/components/AboutSection.tsx`

---

## 🖼️ Change Which Images Show

**Currently showing (lines 7-12):**
```jsx
const aboutImages = [
  "/images/case-studies/IMG_0009.jpeg",
  "/images/case-studies/IMG_0011.jpeg",
  "/images/case-studies/IMG_2473.jpg",
  "/images/case-studies/IMG_1641.jpeg",
  "/images/case-studies/IMG_0291.jpeg",
];
```

**To see what other images you have:**
```bash
ls website-v2/public/images/case-studies/
```

**Example: Use different images**
```jsx
const aboutImages = [
  "/images/case-studies/IMG_0025.jpeg",
  "/images/case-studies/IMG_1597.jpeg",
  "/images/case-studies/IMG_1642_HEIC.png",
  "/images/case-studies/IMG_2298.jpeg",
  "/images/case-studies/IMG_2398.jpeg",
];
```

**To show MORE images:**
```jsx
const aboutImages = [
  "/images/case-studies/IMG_0009.jpeg",
  "/images/case-studies/IMG_0011.jpeg",
  "/images/case-studies/IMG_2473.jpg",
  "/images/case-studies/IMG_1641.jpeg",
  "/images/case-studies/IMG_0291.jpeg",
  "/images/case-studies/IMG_0025.jpeg",  // Add more!
  "/images/case-studies/IMG_1597.jpeg",  // Add more!
];
```

---

## 📝 Change Heading Text

**Current (line 36):**
```jsx
<h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
  About <span className="gradient-text italic">Our Work</span>
</h2>
```

**Change to:**
```jsx
<h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
  Our <span className="gradient-text italic">Portfolio</span>
</h2>
```

**Or:**
```jsx
<h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
  Recent <span className="gradient-text italic">Projects</span>
</h2>
```

---

## 📄 Change Description Text

**Current (lines 39-42):**
```jsx
<p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
  With over a decade of experience in premium rendering and plastering solutions,
  we've transformed countless properties across Sheffield and beyond.
</p>
```

**Change to:**
```jsx
<p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
  Our award-winning team combines traditional craftsmanship with modern techniques
  to deliver exceptional results on every project.
</p>
```

**Or:**
```jsx
<p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
  From stunning residential transformations to large-scale commercial projects,
  see the quality and precision that defines Plaster and Rendering Solutions.
</p>
```

---

## 📊 Change Stats Numbers & Labels

**Current (lines 54-57):**
```jsx
{[
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
]}
```

**Change to:**
```jsx
{[
  { number: "600+", label: "Happy Clients" },
  { number: "20+", label: "Years in Business" },
  { number: "5★", label: "Average Rating" },
]}
```

**Or:**
```jsx
{[
  { number: "2000+", label: "Properties Transformed" },
  { number: "99%", label: "On-Time Completion" },
  { number: "25yr", label: "Warranty Coverage" },
]}
```

---

## 🎨 Change Hover Text on Images

**Current (line 59):**
```jsx
<p className="text-white font-semibold">Quality Craftsmanship</p>
```

**Change to:**
```jsx
<p className="text-white font-semibold">Premium Results</p>
```

**Or:**
```jsx
<p className="text-white font-semibold">Expert Finishing</p>
```

---

## 🔢 Change Number of Columns in Grid

**Current (line 50):**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

**To show 2 columns on desktop:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
```

**To show 4 columns on desktop:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
```

---

## 🎯 Complete Examples

### Example 1: Simple About Section
Replace the entire AboutSection component with:

```jsx
export function AboutSection() {
  const aboutImages = [
    "/images/case-studies/IMG_0009.jpeg",
    "/images/case-studies/IMG_0011.jpeg",
    "/images/case-studies/IMG_2473.jpg",
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Recent Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutImages.map((image, i) => (
            <img
              key={i}
              src={image}
              alt="Project"
              className="rounded-lg w-full h-64 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Example 2: About Section with More Stats
```jsx
export function AboutSection() {
  const aboutImages = [
    "/images/case-studies/IMG_0009.jpeg",
    "/images/case-studies/IMG_0011.jpeg",
    "/images/case-studies/IMG_2473.jpg",
    "/images/case-studies/IMG_1641.jpeg",
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Award-Winning Quality
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of homeowners and businesses
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {aboutImages.map((image, i) => (
            <img
              key={i}
              src={image}
              alt="Project"
              className="rounded-lg w-full h-48 object-cover"
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-green-600 mb-2">500+</p>
            <p className="text-gray-600">Projects Done</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600 mb-2">15+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600 mb-2">100%</p>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 🎬 Preview Changes

After editing, just:
1. Save file (Cmd+S or Ctrl+S)
2. Website auto-updates
3. Refresh browser if needed

---

## 🚀 Advanced Customizations

### Add a Call-to-Action Button
```jsx
<div className="text-center mt-12">
  <Link href="/contact">
    <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition">
      View Our Services
    </button>
  </Link>
</div>
```

### Change Background Color
Change this line:
```jsx
<section className="py-24 bg-white dark:bg-zinc-950">
```

To:
```jsx
<section className="py-24 bg-slate-50 dark:bg-zinc-900">  {/* Light gray */}
```

Or:
```jsx
<section className="py-24 bg-emerald-50 dark:bg-emerald-950">  {/* Green tint */}
```

### Add More Spacing
```jsx
<section className="py-32 bg-white dark:bg-zinc-950">  {/* More padding */}
```

---

## ❓ Quick Troubleshooting

**Images not showing?**
- Check image names in the list
- Make sure files exist in `website-v2/public/images/case-studies/`
- Restart dev server: `npm run dev`

**Text looks wrong?**
- Save file again
- Clear browser cache (Cmd+Shift+Delete)
- Refresh page

**Can't find the file?**
- Path: `website-v2/src/components/AboutSection.tsx`
- Open in your code editor

---

## 📋 Checklist

After editing:
- [ ] Changed images (if wanted)
- [ ] Changed heading text (if wanted)
- [ ] Changed description (if wanted)
- [ ] Changed stats (if wanted)
- [ ] Saved file
- [ ] Refreshed website
- [ ] Images load correctly
- [ ] Text looks good

---

**Done! Your About section is customized.** 🎉
