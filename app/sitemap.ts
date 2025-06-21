import { MetadataRoute } from 'next';

import { landingBlockCategories } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const landingBlockCategoriesUrls = landingBlockCategories.map((category) => ({
    url: `https://olive-ui.vercel.app/blocks/${category.slug}`,
  }));

  return [
    { url: 'https://olive-ui.vercel.app/' },
    { url: 'https://olive-ui.vercel.app/blocks' },
    ...landingBlockCategoriesUrls,
  ];
}
