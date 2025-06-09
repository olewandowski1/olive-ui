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
    components: [
      { name: 'centered-hero-block' },
      { name: 'hero-block-with-image-1' },
      { name: 'hero-block-with-image-2' },
      { name: 'hero-block-with-image-3' },
      { name: 'hero-block-with-image-4' },
      { name: 'hero-block-with-rating' },
    ],
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
    isNew: false,
  },
  {
    slug: 'faq',
    name: 'FAQ Section',
    components: [{ name: 'centered-faq' }, { name: 'faq-two-sections' }],
    isNew: false,
  },
  {
    slug: 'feature',
    name: 'Feature Section',
    components: [
      { name: 'centered-feature-with-items-1' },
      { name: 'centered-feature-with-items-2' },
      { name: 'centered-feature-with-items-3' },
      { name: 'centered-feature-with-items-4' },
      { name: 'centered-feature-with-items-5' },
      { name: 'left-aligned-feature-with-image-1' },
      { name: 'left-aligned-feature-with-image-2' },
      { name: 'left-aligned-feature-with-image-3' },
    ],
    isNew: false,
  },
];

// Function to get a category by its slug
// This function is used to retrieve the category details based on the slug provided in the URL.
export function getCategory(slug: string): BlockCategoryType | undefined {
  return landingBlockCategories.find((category) => category.slug === slug);
}
