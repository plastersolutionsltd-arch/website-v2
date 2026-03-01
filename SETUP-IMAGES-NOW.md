# Setup Images: Step-by-Step Instructions
## Get Your Images Working in 10 Minutes

---

## ⚡ Quick Start (Copy & Paste)

### Step 1: Create Image Directories

Run these commands from the `website-v2` folder:

```bash
# Navigate to website-v2
cd website-v2

# Create directory structure
mkdir -p public/images/hero
mkdir -p public/images/case-studies
mkdir -p public/images/testimonials
mkdir -p public/images/icons
```

### Step 2: Copy Images

Copy all images from the `../images` folder:

```bash
# Copy hero images
cp ../images/hero/*.jpg public/images/hero/ 2>/dev/null || true
cp ../images/hero/*.jpeg public/images/hero/ 2>/dev/null || true
cp ../images/hero/*.png public/images/hero/ 2>/dev/null || true

# Copy case study images
cp ../images/case-studies/*.jpg public/images/case-studies/ 2>/dev/null || true
cp ../images/case-studies/*.jpeg public/images/case-studies/ 2>/dev/null || true
cp ../images/case-studies/*.png public/images/case-studies/ 2>/dev/null || true
```

### Step 3: Verify Images Copied

```bash
ls -la public/images/hero/
ls -la public/images/case-studies/
```

You should see your image files listed!

---

## 🔧 Code Changes Required

### Change 1: Update HeroSection.tsx

**File Location:** `src/components/HeroSection.tsx`

**Replace lines 95-110 with:**

```jsx
{/* Right Column: Imagery & Floating Cards */}
<motion.div
    style={{ y: y2 }}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full"
>
    {/* Main Hero Asset */}
    <div className="absolute inset-0 rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-zinc-800 border-2 border-white dark:border-zinc-800 shadow-2xl">
        <img
            src="/images/hero/hero-main.jpg"
            alt="Premium Rendering Finish"
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            loading="lazy"
            onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
            }}
        />
        {/* Elegant overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>

    {/* Floating Trust Badge */}
    <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 -left-12 glass-card p-4 rounded-xl shadow-xl flex items-center gap-4"
    >
        <div className="w-12 h-12 rounded-full bg-emerald-500 dark:bg-lime-400 flex items-center justify-center text-white dark:text-slate-900 font-bold text-xl">
            25
        </div>
        <div>
            <p className="font-display font-bold text-slate-800 dark:text-white text-sm">Year Warranty</p>
            <p className="text-xs text-slate-500 dark:text-slate-300">Manufacturer Backed</p>
        </div>
    </motion.div>

    {/* Floating Rating Badge */}
    <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 -right-8 glass-card p-4 rounded-xl shadow-xl"
    >
        <div className="flex gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-emerald-500 dark:text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
        <p className="font-display font-bold text-slate-800 dark:text-white text-sm">5.0 Star Rating</p>
        <p className="text-xs text-slate-500 dark:text-slate-300">100% Client Satisfaction</p>
    </motion.div>
</motion.div>
```

### Change 2: Update ServiceSections.tsx

**File Location:** `src/components/ServiceSections.tsx`

**Replace lines 26-38 with:**

```jsx
{/* Image Container */}
<div className="h-48 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden relative">
    <div className="absolute inset-0 bg-slate-200 dark:bg-zinc-800" /> {/* Skeleton */}
    <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop";
        }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
</div>

{/* Content */}
<div className="p-4 sm:p-6 md:p-8 relative">
    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-lime-400 transition-colors">
        {title}
    </h3>
    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
        {description}
    </p>
```

### Change 3: Update Home Page Padding

**File Location:** `src/app/page.tsx`

**Replace lines 33 with:**

```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
```

---

## ✅ Testing Steps

### Test 1: Verify Files Exist

```bash
# Check if images are in public folder
ls -lh public/images/hero/
```

### Test 2: Run Development Server

```bash
npm run dev
```

Visit: `http://localhost:3000`

### Test 3: Check Mobile View

1. Open DevTools (F12)
2. Click responsive design mode (Cmd+Shift+M)
3. Select iPhone 12 Pro
4. Scroll down to see:
   - ✅ Hero image visible on mobile
   - ✅ Service card images responsive
   - ✅ Text readable on small screens
   - ✅ No horizontal scrolling

### Test 4: Check Different Sizes

| Device | Width | What to Check |
|--------|-------|---------------|
| iPhone SE | 375px | Image visible, text readable |
| iPad | 768px | 2-column layout |
| MacBook | 1024px+ | 3-column layout |

---

## 🐛 Troubleshooting

### Problem: Images Not Loading

**Check:**
1. Images are in `public/images/` folder
2. Image names match code (case-sensitive on Linux)
3. Browser console shows no 404 errors

**Fix:**
```bash
# Verify files exist
find public/images -type f -name "*.jpg" | head -10

# Check permissions
ls -lh public/images/hero/
```

### Problem: Responsive Design Looks Wrong

**Check:**
1. DevTools is showing mobile view (375px)
2. Cache is cleared (Cmd+Shift+Delete)
3. Browser window is narrow enough

**Fix:**
```bash
# Restart dev server
npm run dev
```

### Problem: Images Look Blurry

**Check:**
1. Image resolution is adequate (at least 1200px wide for hero)
2. Using `object-cover` in CSS

**Fix:**
- Use higher resolution images
- Check file size isn't too compressed

---

## 📊 Directory Structure After Setup

```
website-v2/
├── public/
│   └── images/
│       ├── hero/
│       │   ├── hero-main.jpg
│       │   ├── monocouche service.jpeg
│       │   ├── silicone service.jpg
│       │   └── gallery-projects.jpeg
│       ├── case-studies/
│       │   ├── before-1.jpg
│       │   ├── after-1.jpg
│       │   └── ... (other images)
│       └── svg/
│           └── (icon svgs)
├── src/
│   ├── app/
│   │   ├── page.tsx          ← Updated padding
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── components/
│       ├── HeroSection.tsx    ← Updated (shows on mobile)
│       ├── ServiceSections.tsx← Updated (responsive heights)
│       └── ...
└── package.json
```

---

## 🎯 Done?

After completing all steps:

- [ ] Images copied to `public/images/`
- [ ] HeroSection.tsx updated
- [ ] ServiceSections.tsx updated
- [ ] page.tsx padding updated
- [ ] Dev server running
- [ ] Tested on mobile view
- [ ] Tested on tablet view
- [ ] Tested on desktop view

---

## 🚀 Next Optimizations

Once images work:

1. **Add Next.js Image Component** (for automatic optimization)
   - Replaces `<img>` with `<Image>`
   - Automatic WebP conversion
   - Lazy loading

2. **Optimize File Sizes**
   - Compress images
   - Use appropriate formats (JPEG for photos, PNG for graphics)

3. **Run Lighthouse Audit**
   - Identifies performance bottlenecks
   - Suggests improvements

---

## ❓ Questions?

Review these files:
- `IMAGE-INTEGRATION-GUIDE.md` - Complete guide
- `RESPONSIVE-QUICK-FIXES.md` - Quick fixes reference
- `next.config.ts` - Next.js configuration

**Your site is almost there! 🚀**
