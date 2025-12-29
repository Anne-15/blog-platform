import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/Login/', '/Signup/', '/Riishi/AddProject/', '/Riishi/AddDesign/'],
    },
    sitemap: 'https://www.riishi.net/sitemap.xml',
  };
}
