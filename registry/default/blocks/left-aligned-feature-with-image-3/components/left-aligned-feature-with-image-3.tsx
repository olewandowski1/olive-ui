import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/registry/default/ui/button';

import { MaxWidthWrapper } from './max-width-wrapper';

type LeftAlignedFeatureWithImage3Props = {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
  imageUrl?: string;
  imageAlt?: string;
  buttons?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary';
    icon?: LucideIcon;
  }[];
  stats?: {
    id: number;
    title: string;
    description: string;
  }[];
};

export default function LeftAlignedFeatureWithImage3({
  badgeText = 'Feature Highlights',
  headingText = 'Boost Your Experience with Our Key Features',
  sectionDescription = 'Dive into the unique features that differentiate us and enrich your experience. Each feature is crafted to deliver exceptional value and convenience, ensuring you enjoy a seamless journey with our offerings. Discover how our innovative solutions are tailored to meet your needs and exceed your expectations.',
  imageUrl = '/assets/feature-image.svg',
  imageAlt = 'Feature Showcase Illustration',
  buttons = [
    {
      label: 'Get Started',
      href: '#',
      variant: 'primary',
    },
    {
      label: 'Learn More',
      href: '#',
      variant: 'secondary',
      icon: ArrowRight,
    },
  ],
  stats = [
    {
      id: 1,
      title: '55%',
      description:
        'Increase in user engagement since employing our new features.',
    },
    {
      id: 2,
      title: '100%',
      description:
        'Satisfaction rate from users who have tried our new features.',
    },
  ],
}: LeftAlignedFeatureWithImage3Props) {
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

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8'>
              {stats.map(({ id, title, description }) => (
                <article
                  key={id}
                  className='flex flex-col max-w-xs gap-2'
                  aria-labelledby={`feature-title-${id}`}
                  aria-describedby={`feature-description-${id}`}
                >
                  <h4
                    id={`feature-title-${id}`}
                    className='text-3xl font-bold leading-none text-foreground/90 md:text-4xl'
                  >
                    {title}
                  </h4>

                  <p
                    id={`feature-description-${id}`}
                    className='text-sm font-normal text-foreground/80 line-clamp-2'
                  >
                    {description}
                  </p>
                </article>
              ))}
            </div>

            <div className='flex flex-col gap-3 lg:flex-row sm:gap-4'>
              {buttons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <Button
                    key={index}
                    variant={
                      button.variant === 'primary' ? 'default' : 'outline'
                    }
                    size='lg'
                    className='group'
                    asChild
                  >
                    <Link
                      href={button.href}
                      className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                    >
                      {button.label}
                      {Icon && (
                        <Icon
                          className='-me-1 ms-1 opacity-60 transition-transform group-hover:translate-x-0.5'
                          size={16}
                          strokeWidth={2}
                          aria-hidden='true'
                        />
                      )}
                    </Link>
                  </Button>
                );
              })}
            </div>
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
