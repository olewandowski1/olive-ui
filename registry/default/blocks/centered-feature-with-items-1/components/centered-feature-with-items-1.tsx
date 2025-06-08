import {
  Calendar,
  LucideIcon,
  PersonStandingIcon,
  Rocket,
  Shield,
} from 'lucide-react';

import { MaxWidthWrapper } from './max-width-wrapper';

type CenteredFeatureWithItems1Props = {
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

export default function CenteredFeatureWithItems1({
  badgeText = 'Why Choose Us?',
  headingText = 'Discover Unique Features That Power Your Experience',
  sectionDescription = 'Explore the exceptional features that set us apart and enhance your journey with us. Each feature is designed to provide you with unparalleled value and convenience. Experience the difference with our innovative solutions that cater to your needs and elevate your expectations.',
  features = [
    {
      id: 1,
      title: 'Lightning Fast Performance',
      description:
        'Experience unparalleled speed and efficiency with our cutting-edge technology.',
      icon: Rocket,
    },
    {
      id: 2,
      title: 'User-Friendly Interface',
      description:
        'Navigate effortlessly with our intuitive design that prioritizes user experience.',
      icon: PersonStandingIcon,
    },
    {
      id: 3,
      title: '24/7 Customer Support',
      description:
        'Get assistance anytime with our dedicated support team ready to help you.',
      icon: Calendar,
    },
    {
      id: 4,
      title: 'Secure and Reliable',
      description:
        'Trust in our robust security measures that keep your data safe and secure.',
      icon: Shield,
    },
  ],
}: CenteredFeatureWithItems1Props) {
  return (
    <section aria-labelledby='feature-heading'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-6 mx-auto text-center sm:gap-8'>
          <span className='text-sm font-medium text-primary'>{badgeText}</span>

          <h2
            id='feature-heading'
            className='max-w-screen-md text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
          >
            {headingText}
          </h2>

          <p className='max-w-screen-md mx-auto text-center text-base/7 text-pretty text-foreground/80'>
            {sectionDescription}
          </p>

          <div
            className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'
            role='region'
            aria-labelledby='features-list-heading'
          >
            <h3 id='features-list-heading' className='sr-only'>
              List of key features and benefits
            </h3>

            {features.map(({ id, title, icon: Icon, description }) => (
              <article
                key={id}
                className='flex flex-col items-center gap-2'
                aria-labelledby={`feature-title-${id}`}
                aria-describedby={`feature-description-${id}`}
              >
                <div
                  className='p-2 border rounded-md border-primary bg-primary/5'
                  role='img'
                  aria-label={`${title} Feature Icon`}
                >
                  <Icon className='size-6 text-primary/90' aria-hidden='true' />
                </div>

                <h4
                  id={`feature-title-${id}`}
                  className='font-bold text-foreground/90'
                >
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
