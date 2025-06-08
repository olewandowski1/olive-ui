import { ArrowRight, LucideIcon } from 'lucide-react';

import { Button } from '@/registry/default/ui/button';

import { MaxWidthWrapper } from './max-width-wrapper';

type LeftAlignedFeatureWithImage1Props = {
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
  testimonial?: {
    name: string;
    role: string;
    content: string;
    imageUrl: string;
  };
};

export default function LeftAlignedFeatureWithImage1({
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
  testimonial = {
    name: 'Jane Doe',
    role: 'Product Manager',
    content:
      'This feature has transformed the way we work, making our processes more efficient and enjoyable. The attention to detail and user-centric design is evident in every aspect. Highly recommended!',
    imageUrl: 'https://github.com/shadcn.png',
  },
}: LeftAlignedFeatureWithImage1Props) {
  return (
    <section aria-labelledby='feature-heading'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-6 text-center sm:gap-8 lg:text-left'>
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

            <div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
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
                    <a
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
                    </a>
                  </Button>
                );
              })}
            </div>

            <blockquote
              className='max-w-lg pl-4 mt-6 border-l-4 border-primary/20'
              aria-labelledby='testimonial-author'
            >
              <p className='mb-3 text-sm italic text-muted-foreground text-start'>
                "{testimonial.content}"
              </p>
              <footer className='flex items-center gap-3'>
                <img
                  src={testimonial.imageUrl}
                  alt={`${testimonial.name} Profile Picture`}
                  className='object-cover w-10 h-10 rounded-full'
                  loading='lazy'
                />
                <div className='leading-none text-left'>
                  <cite
                    id='testimonial-author'
                    className='text-sm not-italic font-medium text-foreground'
                  >
                    {testimonial.name}
                  </cite>
                  <p className='text-xs text-muted-foreground'>
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </blockquote>
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
