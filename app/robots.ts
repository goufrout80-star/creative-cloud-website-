import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/imadmin/', '/api/admin/'],
    },
    sitemap: 'https://todayfilmmakers.com/sitemap.xml', // Adjust domain if needed
  };
}
