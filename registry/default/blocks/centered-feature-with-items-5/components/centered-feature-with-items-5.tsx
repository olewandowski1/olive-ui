import { MaxWidthWrapper } from './max-width-wrapper';

type CenteredFeatureWithItems5Props = {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
  features?: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  }[];
};

export default function CenteredFeatureWithItems5({
  badgeText = 'Overview of Features',
  headingText = 'Features That Make a Difference in Your Experience',
  sectionDescription = 'Check out the unique features that set us apart and enhance your experience. Each feature is designed to provide exceptional value and convenience, ensuring you have a seamless journey with our offerings. Discover how our innovative solutions are tailored to meet your needs and exceed your expectations.',
  features = [
    {
      id: 1,
      title: 'Performance Optimization',
      description:
        'Experience lightning-fast performance with our cutting-edge optimization techniques. We ensure that every interaction is smooth and responsive, allowing you to focus on what matters most.',
      imageUrl: '/assets/feature-image.svg',
      imageAlt:
        'Performance optimization dashboard showing speed metrics and analytics',
    },
    {
      id: 2,
      title: 'User-Centric Design',
      description:
        'Our user-centric design approach guarantees an intuitive and engaging experience. Every element is thoughtfully crafted to enhance usability and accessibility, making it easy for you to navigate and enjoy our platform.',
      imageUrl: '/assets/feature-image.svg',
      imageAlt:
        'User interface design mockup with intuitive navigation and accessibility features',
    },
    {
      id: 3,
      title: 'Seamless Integration',
      description:
        'Integrate effortlessly with our platform using our robust APIs and tools. We provide comprehensive support to ensure that you can connect and extend our services to fit your unique requirements.',
      imageUrl: '/assets/feature-image.svg',
      imageAlt:
        'API integration diagram showing seamless connections between services',
    },
  ],
}: CenteredFeatureWithItems5Props) {
  return (
    <section aria-labelledby='feature-heading'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-6 mx-auto text-center sm:gap-8 lg:gap-12'>
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
            className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12'
            role='region'
            aria-labelledby='features-list-heading'
          >
            <h3 id='features-list-heading' className='sr-only'>
              List of key features and benefits
            </h3>

            {features.map(({ id, title, description, imageUrl, imageAlt }) => (
              <article
                key={id}
                className='flex flex-col items-center gap-2 text-center lg:items-start lg:text-start md:gap-3'
                aria-labelledby={`feature-title-${id}`}
                aria-describedby={`feature-description-${id}`}
              >
                <figure className='relative w-full max-w-xl p-4 border rounded-lg border-foreground/10 bg-foreground/5'>
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className='object-contain w-full h-auto rounded-lg aspect-video'
                    loading='lazy'
                    decoding='async'
                  />
                </figure>

                <h4
                  id={`feature-title-${id}`}
                  className='text-lg font-bold leading-none text-foreground/90'
                >
                  {title}
                </h4>

                <p
                  id={`feature-description-${id}`}
                  className='max-w-md text-sm font-normal text-foreground/80'
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
