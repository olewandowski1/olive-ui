import { Lightbulb, LucideIcon, Palette, Sparkles, Zap } from 'lucide-react';

import { cn } from '@/registry/default/lib/utils';
import { Card, CardContent, CardFooter } from '@/registry/default/ui/card';

import { MaxWidthWrapper } from './max-width-wrapper';

type BentoGrid3Props = {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
  cards?: {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
    imageUrl: string;
  }[];
};

export default function BentoGrid3({
  badgeText = 'Explore Our Features',
  headingText = 'Discover the Power of Our Unique Offerings',
  sectionDescription = 'Dive into our diverse range of features designed to enhance your experience. Each feature is crafted with precision to provide you with the best tools and functionalities, ensuring you get the most out of our platform.',
  cards = [
    {
      id: 1,
      title: 'Quick Start',
      description:
        'Get up and running in minutes with our intuitive setup process. Experience seamless integration and a user-friendly interface that allows you to focus on what matters most.',
      icon: Zap,
      className: 'md:col-span-1 md:row-span-2',
      imageUrl: '',
    },
    {
      id: 2,
      title: 'Advanced Features',
      description:
        'Unlock powerful tools and capabilities to take your projects to the next level.',
      icon: Sparkles,
      className: 'md:col-span-1',
      imageUrl: '',
    },
    {
      id: 3,
      title: 'Comprehensive Solutions',
      description:
        'End-to-end solutions designed to meet all your business requirements.',
      icon: Lightbulb,
      className: 'md:col-span-2',
      imageUrl: '',
    },
    {
      id: 4,
      title: 'Customization',
      description:
        'Tailor the platform to your specific needs with extensive customization options.',
      icon: Palette,
      className: 'md:col-span-2',
      imageUrl: '',
    },
    {
      id: 5,
      title: 'Scalability',
      description:
        'Easily scale your projects as your needs grow, ensuring that our platform can adapt to your requirements.',
      icon: Lightbulb,
      className: 'md:col-span-1',
      imageUrl: '',
    },
  ],
}: BentoGrid3Props) {
  return (
    <section aria-labelledby='feature-heading'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-6 mx-auto text-center'>
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

          <div className='grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2'>
            {cards.map(
              ({ id, title, description, icon: Icon, className, imageUrl }) => (
                <Card
                  key={id}
                  className={cn(
                    'overflow-hidden p-4 md:p-6 bg-transparent gap-4',
                    className
                  )}
                >
                  <CardContent className='flex flex-col items-start p-0 space-y-2'>
                    <h3 className='text-lg font-semibold text-start'>
                      {title}
                    </h3>
                    <p className='text-sm text-pretty text-muted-foreground text-start'>
                      {description}
                    </p>
                  </CardContent>
                  <CardFooter className='relative h-full p-0 mt-auto overflow-hidden border rounded-lg min-h-64'>
                    {imageUrl ? (
                      <>
                        <img
                          src={imageUrl}
                          alt={title}
                          className='object-contain w-full h-full p-4'
                        />
                        <div className='absolute inset-0 bg-gradient-to-br from-muted-foreground/5 via-muted-foreground/10 to-muted-foreground/20' />
                      </>
                    ) : (
                      <div className='flex items-center justify-center w-full h-full bg-gradient-to-br from-muted-foreground/5 via-muted-foreground/10 to-muted-foreground/20'>
                        <Icon className='size-12 text-muted-foreground/40' />
                      </div>
                    )}
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
