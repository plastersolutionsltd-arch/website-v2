# ✅ Deployment & Maintenance Checklist

## Before Each Update or Deployment

### 1. **Backup Current Version**
```bash
cp index.html index-backup-$(date +%Y%m%d-%H%M%S).html
```

### 2. **Run Image Verification**
```bash
bash VERIFY-IMAGES.sh
```
✅ All checks must pass before proceeding.

### 3. **Test Locally**
- Open `index.html` in a web browser
- **Test on HOME page:**
  - Hero image displays (silicone image)
  - Google Reviews section visible
  - All animations smooth
  - Mobile responsive on phone/tablet

- **Test EACH Service Page:**
  - Click "View Services"
  - Visit each of 6 services:
    1. Silicone Rendering → hero image displays
    2. Monocouche Rendering → hero image displays
    3. External Wall Insulation → hero image displays
    4. Internal Plastering → hero image displays
    5. Dry Lining & Boarding → hero image displays
    6. Project Gallery → hero image displays
  - Verify Google Reviews on each page
  - Test accordion FAQs opening/closing
  - Test cost calculator
  - Check responsive design

### 4. **Browser Compatibility**
- ✅ Chrome/Edge (primary)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

### 5. **Clear Browser Cache**
If images still don't show after code fix:
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear browser cache completely

## Common Issues & Solutions

### Images Not Displaying
1. Run `bash VERIFY-IMAGES.sh`
2. Check file extensions (case-sensitive: .jpeg, .jpg)
3. Hard refresh browser cache
4. Check browser console for error messages

### Make Changes
1. Always backup first (see step 1)
2. Never modify image filenames
3. If adding new images:
   - Place in `/images/hero/` folder
   - Update BOTH code locations (service data + HomePage)
   - Run verification script
   - Test thoroughly

### File Corruption
- Restore from backup file
- Compare line count with known-good version (should be 3,832 lines)
- Run verification script

## Critical Files (DO NOT DELETE)

```
✅ index.html (main application)
✅ VERIFY-IMAGES.sh (verification script)
✅ IMAGE-PATHS-CRITICAL.md (documentation)
✅ images/hero/ (all 6 hero images)
✅ DEPLOYMENT-CHECKLIST.md (this file)
```

## After Each Update

- [ ] Run `bash VERIFY-IMAGES.sh` (must show all ✅)
- [ ] Open index.html and test all pages
- [ ] Verify hero images display on all pages
- [ ] Check Google Reviews visible
- [ ] Test mobile responsiveness
- [ ] Clear browser cache if needed
- [ ] Keep backup of previous version

---

**Last Verified:** March 1, 2026
**Status:** ✅ ALL SYSTEMS OPERATIONAL
**Total Lines:** 3,832 (indicator of integrity)
