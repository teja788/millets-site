# Simply Millets

Next.js site for multilingual millet content, recipes, and reference pages.

## Local setup

1. Install dependencies with `npm install`.
2. Start local development with `npm run dev`.
3. Run checks with `npm run lint`.

## Production environment

Set this Vercel environment variable for the Production environment:

- `SITE_URL=https://simplymillets.com`

`SITE_URL` is used for canonical metadata, robots, the sitemap, and the IndexNow payload.

## IndexNow

This repo submits URLs to IndexNow in `postbuild`.

- The key file is hosted from `public/` at `/<key>.txt`.
- The postbuild script reads the built sitemap route output and submits those URLs.
- Submission runs only when `VERCEL_ENV=production`.
- Preview deployments and local builds are skipped automatically.
- The script validates that the key file content exactly matches the filename.

Manual Vercel step still required:

- Add `SITE_URL` in Vercel Production environment variables so the build uses the canonical domain.

Optional validation command:

```powershell
$env:VERCEL_ENV='production'
$env:SITE_URL='https://simplymillets.com'
$env:INDEXNOW_DRY_RUN='1'
node scripts/indexnow-submit.mjs
```
