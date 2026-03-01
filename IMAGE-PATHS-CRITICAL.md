# 🚨 CRITICAL: Image Path Configuration

## DO NOT MODIFY WITHOUT VERIFICATION

This document exists to prevent image path mismatches that break the website.

### Current Configuration (VERIFIED MARCH 1, 2026)

All hero images must match EXACTLY:

| Service | Filename | Code Path | Location |
|---------|----------|-----------|----------|
| **Silicone** | `silicone-service.jpeg` | `images/hero/silicone-service.jpeg` | `/images/hero/` |
| **Monocouche** | `monocouche service.jpeg` | `images/hero/monocouche%20service.jpeg` | `/images/hero/` |
| **EWI** | `ewi hero.jpeg` | `images/hero/ewi%20hero.jpeg` | `/images/hero/` |
| **Plastering** | `plasteringhero.jpeg` | `images/hero/plasteringhero.jpeg` | `/images/hero/` |
| **Dry Lining** | `drylining-service.jpg` | `images/hero/drylining-service.jpg` | `/images/hero/` |
| **Gallery** | `gallery-projects.jpeg` | `images/hero/gallery-projects.jpeg` | `/images/hero/` |

### Key Rules

1. **File Extensions Matter** - Use exact case and extension (.jpeg, .jpg)
2. **Spaces in Filenames** - Browser converts to %20 automatically (don't manually add %20)
3. **Relative Paths Only** - Never use `/images/` (with leading slash) for local files
4. **Two Places to Update** - Image paths appear in:
   - Service data object (line ~967)
   - HomePage hero section (line ~2044)

### Before Making ANY Changes

Run verification:
```bash
ls -la /sessions/fervent-modest-brown/mnt/website/images/hero/
```

Compare with code:
```bash
grep "heroImage" /sessions/fervent-modest-brown/mnt/website/index.html
```

They must match EXACTLY (accounting for %20 encoding of spaces).

### If You Add a New Service

1. Place hero image in `/images/hero/` folder
2. Update BOTH locations in index.html
3. Run verification commands above
4. Test all service pages

**Last Updated:** March 1, 2026
**Verified By:** Claude Assistant
**Status:** ✅ ALL PATHS CORRECT
