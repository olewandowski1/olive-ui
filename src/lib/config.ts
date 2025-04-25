export const siteConfig = {
  name: 'Olive UI',
  url: 'https://olive-ui.vercel.app/',
  ogImage: 'https://olive-ui.vercel.app/og.jpg',
  description:
    'Olive UI is a design system and component library for building beautiful and accessible user interfaces with React and Tailwind CSS.',
  links: {
    twitter: '',
    github: 'https://olive-ui.vercel.app/',
  },
};

export type BlockCategoryType = {
  slug: string;
  name: string;
  components: { name: string }[];
  isNew?: boolean;
};

export const landingBlockCategories = [
  {
    slug: 'header',
    name: 'Header',
    components: [{ name: 'left-aligned-header' }],
    isNew: true,
  },
  {
    slug: 'hero',
    name: 'Hero',
    components: [{ name: 'centered-hero-block' }],
    isNew: true,
  },
];

export function getCategory(slug: string): BlockCategoryType | undefined {
  return landingBlockCategories.find((category) => category.slug === slug);
}
