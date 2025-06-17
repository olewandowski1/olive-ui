import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/registry/default/ui/button';

import { MaxWidthWrapper } from './max-width-wrapper';

type CallToActionSimpleProps = {
  headingText?: string;
  sectionDescription?: string;
  ctaHref?: string;
  ctaButtonText?: string;
  helperyHref?: string;
  helperyButtonText?: string;
};

export default function CallToActionSimple({
  headingText = 'Elevate Your Experience',
  sectionDescription = 'Elevate your experience with our exclusive offerings. Discover how we can help you achieve your goals and transform your journey.',
  ctaHref = '#',
  ctaButtonText = 'Get Started',
  helperyHref = '#',
  helperyButtonText = 'Learn More',
}: CallToActionSimpleProps) {
  return (
    <section aria-labelledby='call-to-action-heading' role='region'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center justify-between gap-6 mx-auto md:flex-row sm:gap-8'>
          <div className='flex flex-col items-center max-w-screen-sm gap-3 text-center md:items-start md:text-left'>
            <h2
              id='call-to-action-heading'
              className='text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
            >
              {headingText}
            </h2>
            <p className='mx-auto text-base/7 text-pretty text-foreground/80'>
              {sectionDescription}
            </p>
          </div>

          <div className='flex flex-col w-full gap-3 sm:flex-row sm:w-auto'>
            <Button size='lg' className='w-full sm:w-auto' asChild>
              <Link href={ctaHref}>{ctaButtonText}</Link>
            </Button>
            <Button
              variant='ghost'
              size='lg'
              className='w-full sm:w-auto'
              asChild
            >
              <Link href={helperyHref}>
                {helperyButtonText}
                <ChevronRight
                  className='-me-1 opacity-60'
                  size={16}
                  aria-hidden='true'
                />
              </Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
