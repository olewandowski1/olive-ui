import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/registry/default/ui/button';

import { MaxWidthWrapper } from './max-width-wrapper';

type CallToActionCenteredProps = {
  badgeText?: string;
  headingText?: string;
  ctaHref?: string;
  ctaButtonText?: string;
};

export default function CallToActionCentered({
  badgeText = 'Join The Movement',
  headingText = 'Empower Your Journey with Our Solutions',
  ctaHref = '#',
  ctaButtonText = 'Get Started',
}: CallToActionCenteredProps) {
  return (
    <section aria-labelledby='call-to-action-heading' role='region'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-6 mx-auto text-center sm:gap-8'>
          <span className='text-sm font-medium text-primary'>{badgeText}</span>

          <h2
            id='call-to-action-heading'
            className='max-w-screen-md text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
          >
            {headingText}
          </h2>

          <Button size='lg' className='w-full sm:w-auto' asChild>
            <Link href={ctaHref}>
              {ctaButtonText}
              <ChevronRight
                className='-ms-1 opacity-60'
                size={16}
                aria-hidden='true'
              />
            </Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
