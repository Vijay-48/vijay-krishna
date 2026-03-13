const BASE_URL = 'https://vijay-krishna.lovable.app';

const routes = [
  {
    url: '/',
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 1.0,
  },
  {
    url: '/classic',
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.8,
  },
];

export function generateSitemap() {
  const urls = routes
    .map(
      ({ url, lastModified, changeFrequency, priority }) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>\n`;
}

export { BASE_URL, routes };
