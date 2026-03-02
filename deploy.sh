#!/bin/bash

# ============================================
# Portfolio Gallery Deployment Script
# Plaster and Rendering Solutions
# March 1, 2026
# ============================================

echo "🚀 Starting Portfolio Gallery Deployment..."
echo ""

# Define paths
WORKSPACE_PATH="/sessions/magical-serene-volta"
PROJECT_PATH="$(pwd)"

echo "📁 Workspace: $WORKSPACE_PATH"
echo "📁 Project: $PROJECT_PATH"
echo ""

# ============================================
# 1. CREATE DIRECTORIES
# ============================================
echo "📂 Creating directory structure..."
mkdir -p components/sections
mkdir -p public/images/portfolio

# ============================================
# 2. COPY REACT COMPONENTS
# ============================================
echo "📋 Copying React components..."
cp "$WORKSPACE_PATH/PortfolioGallery.jsx" components/sections/PortfolioGallery.jsx
cp "$WORKSPACE_PATH/AboutUsSection.jsx" components/sections/AboutUsSection.jsx

if [ -f "components/sections/PortfolioGallery.jsx" ]; then
  echo "✅ PortfolioGallery.jsx copied"
else
  echo "❌ Failed to copy PortfolioGallery.jsx"
fi

if [ -f "components/sections/AboutUsSection.jsx" ]; then
  echo "✅ AboutUsSection.jsx copied"
else
  echo "❌ Failed to copy AboutUsSection.jsx"
fi

echo ""

# ============================================
# 3. COPY IMAGES
# ============================================
echo "🖼️  Copying portfolio images..."
cp "$WORKSPACE_PATH/mnt/website/public/images/portfolio"/*.jpg public/images/portfolio/ 2>/dev/null

IMAGE_COUNT=$(ls public/images/portfolio/*.jpg 2>/dev/null | wc -l)
echo "✅ Copied $IMAGE_COUNT portfolio images"

echo "🖼️  Copying About Us hero image..."
if [ -f "$WORKSPACE_PATH/mnt/website/public/images/about-us-hero.jpg" ]; then
  cp "$WORKSPACE_PATH/mnt/website/public/images/about-us-hero.jpg" public/images/
  echo "✅ about-us-hero.jpg copied"
else
  echo "⚠️  about-us-hero.jpg not found"
fi

echo ""

# ============================================
# 4. COPY DOCUMENTATION
# ============================================
echo "📚 Copying deployment guides..."
cp "$WORKSPACE_PATH/QUICK_START.md" ./QUICK_START.md
cp "$WORKSPACE_PATH/PORTFOLIO_SUMMARY.md" ./PORTFOLIO_SUMMARY.md
cp "$WORKSPACE_PATH/mnt/website/DEPLOYMENT_GUIDE.md" ./DEPLOYMENT_GUIDE.md

echo "✅ Documentation copied"
echo ""

# ============================================
# 5. SUMMARY
# ============================================
echo "=================================================="
echo "✨ Deployment Setup Complete!"
echo "=================================================="
echo ""
echo "✅ React Components:"
echo "   - components/sections/PortfolioGallery.jsx"
echo "   - components/sections/AboutUsSection.jsx"
echo ""
echo "✅ Images:"
echo "   - public/images/portfolio/ ($IMAGE_COUNT images)"
echo "   - public/images/about-us-hero.jpg"
echo ""
echo "✅ Documentation:"
echo "   - QUICK_START.md (Read this next!)"
echo "   - PORTFOLIO_SUMMARY.md"
echo "   - DEPLOYMENT_GUIDE.md"
echo ""
echo "=================================================="
echo ""
echo "📖 NEXT STEPS:"
echo ""
echo "1. Read QUICK_START.md for integration steps"
echo "2. Update your homepage to import the components"
echo "3. Test locally (npm run dev)"
echo "4. Commit and push to GitHub"
echo ""
echo "=================================================="
echo ""
echo "Ready to deploy! 🚀"
