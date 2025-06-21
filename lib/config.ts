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
  isComingSoon?: boolean;
};

// Define the block categories and their components
// This is a simplified version of the original code, focusing on the landing page blocks
export const landingBlockCategories = [
  {
    slug: 'header',
    name: 'Header Section',
    components: [{ name: 'left-aligned-header' }, { name: 'centered-header' }],
    isNew: false,
  },
  {
    slug: 'hero',
    name: 'Hero Section',
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
    name: 'Footer Section',
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
  {
    slug: 'bento-grid',
    name: 'Bento Grid Section',
    components: [
      { name: 'bento-grid-1' },
      { name: 'bento-grid-2' },
      { name: 'bento-grid-3' },
      { name: 'bento-grid-4' },
    ],
    isNew: false,
  },
  {
    slug: 'testimonial',
    name: 'Testimonial Section',
    components: [
      { name: 'single-testimonial' },
      { name: 'double-testimonial' },
      { name: 'testimonial-with-cards-1' },
    ],
    isNew: false,
    isComingSoon: false,
  },
  {
    slug: 'call-to-action',
    name: 'Call to Action Section',
    components: [
      { name: 'call-to-action-centered' },
      { name: 'call-to-action-centered-description' },
      { name: 'call-to-action-simple' },
    ],
    isNew: false,
    isComingSoon: false,
  },
  {
    slug: 'pricing',
    name: 'Pricing Section',
    components: [{ name: 'pricing-3-plans-1' }, { name: 'pricing-2-plans-1' }],
    isNew: false,
    isComingSoon: false,
  },
  {
    slug: 'team',
    name: 'Team Section',
    components: [{ name: 'team-grid-cards' }],
    isNew: false,
    isComingSoon: false,
  },
  {
    slug: 'contact',
    name: 'Contact Section',
    components: [
      { name: 'contact-form-centered' },
      { name: 'contact-info-no-form' },
    ],
    isNew: false,
    isComingSoon: false,
  },
  {
    slug: 'newsletter',
    name: 'Newsletter Section',
    components: [],
    isNew: false,
    isComingSoon: true,
  },
  {
    slug: 'banner',
    name: 'Banner Section',
    components: [],
    isNew: false,
    isComingSoon: true,
  },
  {
    slug: 'coming-soon',
    name: 'Coming Soon Section',
    components: [],
    isNew: false,
    isComingSoon: true,
  },
];

// Function to get a category by its slug
// This function is used to retrieve the category details based on the slug provided in the URL.
export function getCategory(slug: string): BlockCategoryType | undefined {
  return landingBlockCategories.find((category) => category.slug === slug);
}
