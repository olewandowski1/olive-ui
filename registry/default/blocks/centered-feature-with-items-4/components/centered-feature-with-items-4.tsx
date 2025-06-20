import {
  Accessibility,
  Blocks,
  Code,
  Computer,
  LucideIcon,
  TrendingUp,
  TrendingUpDown,
} from 'lucide-react';

import { MaxWidthWrapper } from './max-width-wrapper';

type CenteredFeatureWithItems4Props = {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
  features?: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
};

export default function CenteredFeatureWithItems4({
  badgeText = 'Feature Highlights',
  headingText = 'Boost Your Experience with Our Key Features',
  features = [
    {
      id: 1,
      title: 'Accessibility First',
      description:
        'Everything we build is designed with accessibility in mind, inclusive for all users.',
      icon: Accessibility,
    },
    {
      id: 2,
      title: 'Responsive Design',
      description:
        'Our solutions adapt seamlessly to any device, ensuring a consistent experience.',
      icon: Computer,
    },
    {
      id: 3,
      title: 'Top-Level Performance',
      description:
        'Experience lightning-fast performance with our optimized solutions that save you time.',
      icon: TrendingUp,
    },
    {
      id: 4,
      title: 'Customizable Features',
      description:
        'Tailor our solutions to fit your specific needs with a range of customizable options.',
      icon: Blocks,
    },
    {
      id: 5,
      title: 'Sleek Design',
      description:
        'Enjoy a modern and sleek design that enhances usability and visual appeal.',
      icon: TrendingUpDown,
    },
    {
      id: 6,
      title: 'Developer Friendly',
      description:
        'Built with developers in mind, our solutions are easy to integrate and extend.',
      icon: Code,
    },
  ],
}: CenteredFeatureWithItems4Props) {
  return (
    <section aria-labelledby='feature-heading'>
      <MaxWidthWrapper>
        <div className='flex flex-col gap-6 mx-auto lg:items-center lg:text-center sm:gap-8'>
          <span className='text-sm font-medium text-primary'>{badgeText}</span>

          <h2
            id='feature-heading'
            className='max-w-screen-md text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
          >
            {headingText}
          </h2>

          <div
            className='grid grid-cols-1 gap-8 py-4 md:grid-cols-2 lg:grid-cols-3 md:py-8'
            role='region'
            aria-labelledby='features-list-heading'
          >
            <h3 id='features-list-heading' className='sr-only'>
              List of key features and benefits
            </h3>

            {features.map(({ id, title, icon: Icon, description }) => (
              <article
                key={id}
                className='flex flex-col gap-2 text-start md:gap-3'
                aria-labelledby={`feature-title-${id}`}
                aria-describedby={`feature-description-${id}`}
              >
                <h4
                  id={`feature-title-${id}`}
                  className='flex items-center gap-2 font-bold leading-none md:gap-3 text-foreground/90'
                >
                  <Icon
                    className='inline-block text-pretty text-primary size-5'
                    aria-hidden='true'
                    role='presentation'
                  />
                  {title}
                </h4>

                <p
                  id={`feature-description-${id}`}
                  className='text-sm font-normal text-foreground/80'
                >
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
