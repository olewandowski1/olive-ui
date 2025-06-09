import { Accessibility, Computer, LucideIcon } from 'lucide-react';

import { MaxWidthWrapper } from './max-width-wrapper';

type LeftAlignedFeatureWithImage2Props = {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
  imageUrl?: string;
  imageAlt?: string;
  features?: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
};

export default function LeftAlignedFeatureWithImage2({
  badgeText = 'Feature Highlights',
  headingText = 'Boost Your Experience with Our Key Features',
  sectionDescription = 'Dive into the unique features that differentiate us and enrich your experience. Each feature is crafted to deliver exceptional value and convenience, ensuring you enjoy a seamless journey with our offerings. Discover how our innovative solutions are tailored to meet your needs and exceed your expectations.',
  imageUrl = '/assets/feature-image.svg',
  imageAlt = 'Feature Showcase Illustration',
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
  ],
}: LeftAlignedFeatureWithImage2Props) {
  return (
    <section aria-labelledby='feature-heading'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-6 sm:gap-8'>
            <span className='text-sm font-medium text-primary'>
              {badgeText}
            </span>

            <h2
              id='feature-heading'
              className='text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
            >
              {headingText}
            </h2>

            <p className='text-base/7 text-pretty text-foreground/80'>
              {sectionDescription}
            </p>

            {features.map(({ id, title, icon: Icon, description }) => (
              <article
                key={id}
                className='flex flex-row items-start gap-2 md:gap-4 text-start'
                aria-labelledby={`feature-title-${id}`}
                aria-describedby={`feature-description-${id}`}
              >
                <div
                  className='p-2 border rounded-md border-primary bg-primary/5'
                  role='img'
                  aria-label={`${title} Feature Icon`}
                >
                  <Icon className='size-5 text-primary/90' aria-hidden='true' />
                </div>

                <div className='flex flex-col gap-1'>
                  <h4
                    id={`feature-title-${id}`}
                    className='font-bold leading-none text-foreground/90'
                  >
                    {title}
                  </h4>

                  <p
                    id={`feature-description-${id}`}
                    className='max-w-sm text-sm font-normal text-foreground/80 line-clamp-2'
                  >
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <figure className='relative w-full'>
            <img
              src={imageUrl}
              alt={imageAlt}
              className='w-full h-auto rounded-lg sm:p-4 lg:p-8 object-cover aspect-[4/3]'
              loading='lazy'
              decoding='async'
            />
          </figure>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
