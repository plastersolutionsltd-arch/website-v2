#!/bin/bash
# Image Verification Script - Run this before deploying
# Usage: bash VERIFY-IMAGES.sh

echo "🔍 VERIFYING IMAGE PATHS..."
echo ""

BASE="$(cd "$(dirname "$0")" && pwd)"
ERRORS=0

# Expected images
declare -A EXPECTED=(
    ["silicone-service.jpeg"]="Silicone"
    ["monocouche service.jpeg"]="Monocouche"
    ["ewi hero.jpeg"]="EWI"
    ["plasteringhero.jpeg"]="Plastering"
    ["drylining-service.jpg"]="Dry Lining"
    ["gallery-projects.jpeg"]="Gallery"
)

# Check files exist
echo "📁 File Existence Check:"
for filename in "${!EXPECTED[@]}"; do
    if [ -f "$BASE/images/hero/$filename" ]; then
        size=$(ls -lh "$BASE/images/hero/$filename" | awk '{print $5}')
        echo "  ✅ ${EXPECTED[$filename]}: $filename ($size)"
    else
        echo "  ❌ ${EXPECTED[$filename]}: MISSING - $filename"
        ((ERRORS++))
    fi
done

echo ""
echo "📝 Code Path Check:"

# Check code paths
codes=(
    "silicone-service.jpeg"
    "monocouche%20service.jpeg"
    "ewi%20hero.jpeg"
    "plasteringhero.jpeg"
    "drylining-service.jpg"
    "gallery-projects.jpeg"
)

for code_path in "${codes[@]}"; do
    if grep -q "$code_path" "$BASE/index.html"; then
        echo "  ✅ Found: $code_path"
    else
        echo "  ❌ Missing: $code_path"
        ((ERRORS++))
    fi
done

echo ""
if [ $ERRORS -eq 0 ]; then
    echo "✅ ALL CHECKS PASSED - Website is ready!"
else
    echo "❌ $ERRORS ERRORS FOUND - Fix before deploying"
fi

exit $ERRORS
