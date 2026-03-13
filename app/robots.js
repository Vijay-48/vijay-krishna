import { BASE_URL } from './sitemap.js';

export function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;
}
