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

// Define the block categories and their components
// This is a simplified version of the original code, focusing on the landing page blocks
export const landingBlockCategories = [
  {
    slug: 'header',
    name: 'Header',
    components: [{ name: 'left-aligned-header' }, { name: 'centered-header' }],
    isNew: false,
  },
  {
    slug: 'hero',
    name: 'Hero',
    components: [{ name: 'centered-hero-block' }],
    isNew: false,
  },
  {
    slug: 'footer',
    name: 'Footer',
    components: [
      { name: 'centered-footer' },
      { name: 'left-aligned-footer' },
      { name: 'left-aligned-footer-with-socials' },
    ],
    isNew: true,
  },
];

// Function to get a category by its slug
// This function is used to retrieve the category details based on the slug provided in the URL.
export function getCategory(slug: string): BlockCategoryType | undefined {
  return landingBlockCategories.find((category) => category.slug === slug);
}
