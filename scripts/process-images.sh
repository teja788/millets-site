#!/bin/bash
# ============================================================
# Millets Website — Image Processor
# ============================================================
# After generating images from Gemini/other AI tools,
# place them in /raw-images/ with the exact filenames from
# image-prompts.json (without extension — any format works).
#
# This script resizes and converts them to .webp for the website.
#
# Usage:
#   chmod +x scripts/process-images.sh
#   ./scripts/process-images.sh
# ============================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
RAW_DIR="$PROJECT_DIR/raw-images"
PUBLIC_DIR="$PROJECT_DIR/public/images"

echo ""
echo "🌾 Millets Website Image Processor"
echo "=================================="
echo ""
echo "  Raw images dir:  $RAW_DIR"
echo "  Output dir:      $PUBLIC_DIR"
echo ""

# Create directory structure
mkdir -p "$PUBLIC_DIR"/{hero,millets,recipes,sections,textures}

# Check for cwebp
if ! command -v cwebp &> /dev/null; then
  echo "⚠️  cwebp not found."
  echo "   Install with:"
  echo "     macOS:  brew install webp"
  echo "     Linux:  sudo apt install webp"
  echo "     Windows: download from https://developers.google.com/speed/webp/download"
  echo ""
  echo "   Falling back to copying files as-is."
  CONVERT=false
else
  echo "✅ cwebp found — will convert to .webp"
  CONVERT=true
fi

echo ""

# Counters
PROCESSED=0
SKIPPED=0
MISSING=0

# Process a single image
process_image() {
  local src="$1"
  local dest="$2"
  local width="$3"

  if [ ! -f "$src" ]; then
    ((MISSING++))
    return
  fi

  if [ "$CONVERT" = true ]; then
    cwebp -q 85 -resize "$width" 0 "$src" -o "$dest" 2>/dev/null
    if [ $? -eq 0 ]; then
      echo "  ✅ Converted: $(basename "$dest") (${width}px wide)"
      ((PROCESSED++))
    else
      echo "  ❌ Failed:    $(basename "$dest")"
      ((SKIPPED++))
    fi
  else
    cp "$src" "${dest%.*}.${src##*.}"
    echo "  📋 Copied:    $(basename "$src")"
    ((PROCESSED++))
  fi
}

# Find a raw image file by base name (tries multiple extensions)
find_raw() {
  local base="$1"
  for ext in png jpg jpeg webp PNG JPG JPEG WEBP; do
    if [ -f "$RAW_DIR/$base.$ext" ]; then
      echo "$RAW_DIR/$base.$ext"
      return
    fi
  done
  echo ""
}

# ----------------------------------------
# HERO IMAGES (1920px wide)
# ----------------------------------------
echo "📸 Processing hero images..."
for name in hero-main hero-about hero-recipes hero-history hero-ayurveda hero-sustainability hero-cooking hero-nutrition hero-glossary hero-faq hero-search; do
  src=$(find_raw "$name")
  if [ -n "$src" ]; then
    process_image "$src" "$PUBLIC_DIR/hero/$name.webp" 1920
  else
    echo "  ⏭️  Missing: $name"
    ((MISSING++))
  fi
done

# ----------------------------------------
# MILLET GRAIN IMAGES (800px wide, square)
# ----------------------------------------
echo ""
echo "📸 Processing millet grain images..."
for millet in pearl-millet finger-millet sorghum foxtail-millet little-millet kodo-millet barnyard-millet proso-millet browntop-millet; do
  src=$(find_raw "${millet}-grain")
  if [ -n "$src" ]; then
    process_image "$src" "$PUBLIC_DIR/millets/${millet}-grain.webp" 800
  else
    echo "  ⏭️  Missing: ${millet}-grain"
    ((MISSING++))
  fi
done

# ----------------------------------------
# MILLET PLANT IMAGES (1200px wide)
# ----------------------------------------
echo ""
echo "📸 Processing millet plant images..."
for millet in pearl-millet finger-millet sorghum foxtail-millet little-millet kodo-millet barnyard-millet proso-millet browntop-millet; do
  src=$(find_raw "${millet}-plant")
  if [ -n "$src" ]; then
    process_image "$src" "$PUBLIC_DIR/millets/${millet}-plant.webp" 1200
  else
    echo "  ⏭️  Missing: ${millet}-plant"
    ((MISSING++))
  fi
done

# ----------------------------------------
# MILLET COOKED IMAGES (1200px wide)
# ----------------------------------------
echo ""
echo "📸 Processing millet cooked dish images..."
for millet in pearl-millet finger-millet sorghum foxtail-millet little-millet kodo-millet barnyard-millet proso-millet browntop-millet; do
  src=$(find_raw "${millet}-cooked")
  if [ -n "$src" ]; then
    process_image "$src" "$PUBLIC_DIR/millets/${millet}-cooked.webp" 1200
  else
    echo "  ⏭️  Missing: ${millet}-cooked"
    ((MISSING++))
  fi
done

# ----------------------------------------
# RECIPE IMAGES (800px wide)
# ----------------------------------------
echo ""
echo "📸 Processing recipe images..."
for recipe in ragi-porridge foxtail-millet-upma jowar-dosa bajra-roti millet-poha little-millet-rice foxtail-millet-biryani kodo-millet-pongal barnyard-millet-khichdi ragi-mudde jowar-bhakri millet-adai ragi-cookies ragi-laddu millet-murukku jowar-pakoda ragi-halwa bajra-ladoo millet-payasam ragi-malt kambu-koozh multi-millet-roti jowar-roti; do
  src=$(find_raw "$recipe")
  if [ -n "$src" ]; then
    process_image "$src" "$PUBLIC_DIR/recipes/$recipe.webp" 800
  else
    echo "  ⏭️  Missing: $recipe"
    ((MISSING++))
  fi
done

# ----------------------------------------
# SECTION IMAGES (various sizes)
# ----------------------------------------
echo ""
echo "📸 Processing section & decorative images..."
for name in icon-nutrition icon-history icon-ayurveda icon-sustainability icon-cooking icon-farming; do
  src=$(find_raw "$name")
  if [ -n "$src" ]; then
    process_image "$src" "$PUBLIC_DIR/sections/$name.webp" 400
  else
    echo "  ⏭️  Missing: $name"
    ((MISSING++))
  fi
done

for name in map-india-millets about-mission water-comparison climate-resilience nutrition-comparison cooking-tools; do
  src=$(find_raw "$name")
  if [ -n "$src" ]; then
    process_image "$src" "$PUBLIC_DIR/sections/$name.webp" 1200
  else
    echo "  ⏭️  Missing: $name"
    ((MISSING++))
  fi
done

# Texture / background images
for name in grain-texture timeline-bg; do
  src=$(find_raw "$name")
  if [ -n "$src" ]; then
    process_image "$src" "$PUBLIC_DIR/textures/$name.webp" 1920
  else
    echo "  ⏭️  Missing: $name"
    ((MISSING++))
  fi
done

# Special: OG image and favicon source
src=$(find_raw "og-image")
if [ -n "$src" ]; then
  process_image "$src" "$PUBLIC_DIR/hero/og-image.webp" 1200
else
  echo "  ⏭️  Missing: og-image"
  ((MISSING++))
fi

src=$(find_raw "favicon-source")
if [ -n "$src" ]; then
  process_image "$src" "$PUBLIC_DIR/sections/favicon-source.webp" 512
else
  echo "  ⏭️  Missing: favicon-source"
  ((MISSING++))
fi

# SVG files (just copy, no conversion)
if [ -f "$RAW_DIR/wave-divider.svg" ]; then
  cp "$RAW_DIR/wave-divider.svg" "$PUBLIC_DIR/textures/wave-divider.svg"
  echo "  ✅ Copied:    wave-divider.svg"
  ((PROCESSED++))
else
  echo "  ⏭️  Missing: wave-divider.svg"
  ((MISSING++))
fi

# ----------------------------------------
# SUMMARY
# ----------------------------------------
echo ""
echo "=================================="
echo "🌾 Image Processing Complete!"
echo ""
echo "  ✅ Processed: $PROCESSED"
echo "  ⏭️  Missing:   $MISSING"
echo "  ❌ Skipped:   $SKIPPED"
echo ""
echo "  Output:  $PUBLIC_DIR/"
echo ""
echo "  Missing images will show warm gradient"
echo "  placeholders on the site — no broken images!"
echo "=================================="
echo ""
