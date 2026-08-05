import { openMilletReference } from '@/data/open-millet-reference';

export function GET() {
  return Response.json(openMilletReference, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'Content-Disposition': 'inline; filename="simply-millets-open-names-reference.json"',
    },
  });
}
