import { LucideIcon, Rocket, Shield, TrendingUp } from 'lucide-react';

import { MaxWidthWrapper } from './max-width-wrapper';

type CenteredFeatureWithItems2Props = {
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

export default function CenteredFeatureWithItems2({
  badgeText = 'What Makes Us Unique?',
  headingText = 'Uncover the Distinctive Features That Enhance Your Experience',
  sectionDescription = 'Dive into the unique features that differentiate us and enrich your experience. Each feature is crafted to deliver exceptional value and convenience, ensuring you enjoy a seamless journey with our offerings. Discover how our innovative solutions are tailored to meet your needs and exceed your expectations.',
  features = [
    {
      id: 1,
      title: 'Fast and Efficient',
      description:
        'Experience lightning-fast performance with our optimized solutions that save you time and effort.',
      icon: Rocket,
    },
    {
      id: 2,
      title: 'Productivity Boost',
      description:
        'Enhance your productivity with tools designed to streamline your workflow and maximize efficiency.',
      icon: TrendingUp,
    },
    {
      id: 3,
      title: 'Secure and Reliable',
      description:
        'Trust in our robust security measures that keep your data safe and secure.',
      icon: Shield,
    },
  ],
}: CenteredFeatureWithItems2Props) {
  return (
    <section aria-labelledby='feature-heading'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-start gap-6 mx-auto lg:items-center lg:text-center text-start sm:gap-8'>
          <span className='text-sm font-medium text-primary'>{badgeText}</span>

          <h2
            id='feature-heading'
            className='max-w-screen-md text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
          >
            {headingText}
          </h2>

          <p className='max-w-screen-md mx-auto text-base/7 text-pretty text-foreground/80'>
            {sectionDescription}
          </p>

          <div
            className='grid grid-cols-1 gap-8 lg:grid-cols-3'
            role='region'
            aria-labelledby='features-list-heading'
          >
            <h3 id='features-list-heading' className='sr-only'>
              List of key features and benefits
            </h3>

            {features.map(({ id, title, icon: Icon, description }) => (
              <article
                key={id}
                className='flex flex-col items-start gap-2 text-start'
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
