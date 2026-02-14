import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename } from 'path';

const RAW_DIR = 'raw-images';
const PUBLIC = 'public/images';

// Map raw filenames to their target paths in public/images/
const mapping = {
  // Millet grain images → public/images/millets/
  'pearl-millet-grain.png': 'millets/pearl-millet-grain.webp',
  'finger-millet-grain.png': 'millets/finger-millet-grain.webp',
  'sorghum-grain.png': 'millets/sorghum-grain.webp',
  'foxtail-millet-grain.png': 'millets/foxtail-millet-grain.webp',
  'little-millet-grain.png': 'millets/little-millet-grain.webp',
  'kodo-millet-grain.png': 'millets/kodo-millet-grain.webp',
  'barnyard-millet-grain.png': 'millets/barnyard-millet-grain.webp',
  'proso-millet-grain.png': 'millets/proso-millet-grain.webp',
  'browntop-millet-grain.png': 'millets/browntop-millet-grain.webp',

  // Hero images → public/images/hero/
  'hero-main.png': 'hero/hero-main.webp',
  'hero-about.png': 'hero/hero-about.webp',
  'hero-recipes.png': 'hero/hero-recipes.webp',
  'hero-history.png': 'hero/hero-history.webp',
  'hero-ayurveda.png': 'hero/hero-ayurveda.webp',
  'hero-cooking.png': 'hero/hero-cooking.webp',
  'hero-sustainability.png': 'hero/hero-sustainability.webp',
};

async function convert() {
  // Ensure output dirs exist
  await mkdir(join(PUBLIC, 'millets'), { recursive: true });
  await mkdir(join(PUBLIC, 'hero'), { recursive: true });

  const files = await readdir(RAW_DIR);
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const target = mapping[file];
    if (!target) {
      console.log(`⏭  Skipping ${file} (no mapping)`);
      skipped++;
      continue;
    }

    const inputPath = join(RAW_DIR, file);
    const outputPath = join(PUBLIC, target);

    try {
      const info = await sharp(inputPath)
        .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const sizeMB = (info.size / 1024 / 1024).toFixed(2);
      console.log(`✅ ${file} → ${target} (${info.width}x${info.height}, ${sizeMB}MB)`);
      converted++;
    } catch (err) {
      console.error(`❌ Failed: ${file} — ${err.message}`);
    }
  }

  console.log(`\nDone! Converted: ${converted}, Skipped: ${skipped}`);
}

convert();
