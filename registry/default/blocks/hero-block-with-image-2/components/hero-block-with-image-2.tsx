import { Check, LucideIcon, Stamp, StarIcon } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/registry/default/ui/badge';
import { Button } from '@/registry/default/ui/button';
import { Separator } from '@/registry/default/ui/separator';

import { MaxWidthWrapper } from './max-width-wrapper';

type HeroSectionWithImageProps = {
  badgeIcon?: LucideIcon;
  badgeText?: string;
  headingText?: string;
  headingTextHighlighted?: string;
  descriptionTextStart?: string;
  descriptionTextHighlighted?: string;
  descriptionTextEnd?: string;
  listItems?: string[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  imageUrl?: string;
  imageAlt?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryHref?: string;
  secondaryHref?: string;
};

export default function HeroSectionWithImage2({
  badgeIcon: BadgeIcon = Stamp,
  badgeText = 'Example Badge Text To Be Replaced',
  headingText = 'Example Heading Text',
  headingTextHighlighted = 'Highlighted Text',
  descriptionTextStart = 'First part of the description text',
  descriptionTextHighlighted = 'example highlighted text',
  descriptionTextEnd = '– the second part of the description text.',
  listItems = [
    'First Feature of the Product or Service',
    'Second Feature of the Product or Service',
    'Third Feature of the Product or Service',
  ],
  primaryButtonText = 'Get Started',
  secondaryButtonText = 'Learn More',
  imageUrl = '/hero-image.svg',
  imageAlt = 'Hero Section Image',
  primaryHref = '#',
  secondaryHref = '#',
}: HeroSectionWithImageProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <div className='grid items-center grid-cols-1 gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16'>
          <div className='flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left'>
            <Badge
              variant='outline'
              className='flex items-center justify-center space-x-1.5 h-7 text-foreground/90'
            >
              <span>
                <BadgeIcon className='size-4' aria-hidden='true' />
              </span>
              <Separator orientation='vertical' />
              <span className='text-xs font-normal text-foreground/90 line-clamp-1'>
                {badgeText}
              </span>
            </Badge>

            <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-pretty text-foreground/90'>
              <span>{headingText}</span>
              <br />
              <span className='text-transparent bg-gradient-to-r from-primary/80 to-primary bg-clip-text'>
                {headingTextHighlighted}
              </span>
            </h1>

            <p className='text-base/7 lg:text-lg/8 max-w-prose text-pretty text-foreground/80'>
              {descriptionTextStart}{' '}
              <span className='font-semibold text-transparent bg-gradient-to-r from-primary/80 to-primary bg-clip-text'>
                {descriptionTextHighlighted}
              </span>{' '}
              {descriptionTextEnd}
            </p>

            <ul className='flex flex-col items-start space-y-2 text-left text-base/7 text-foreground/80'>
              {listItems.map((item) => (
                <li key={item} className='flex gap-1.5 items-center text-left'>
                  <Check className='size-4 shrink-0 text-primary/90' />
                  {item}
                </li>
              ))}
            </ul>

            <div className='flex flex-col w-full gap-3 sm:flex-row sm:w-auto'>
              <Button size='lg' className='w-full sm:w-auto' asChild>
                <Link href={primaryHref}>
                  <StarIcon
                    className='-ms-1 opacity-60'
                    size={16}
                    aria-hidden='true'
                  />
                  {primaryButtonText}
                </Link>
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='w-full sm:w-auto'
                asChild
              >
                <Link href={secondaryHref}>{secondaryButtonText}</Link>
              </Button>
            </div>
          </div>

          <div className='flex justify-center order-last lg:justify-end'>
            <div className='relative w-full max-w-xl'>
              <img
                src={imageUrl}
                alt={imageAlt}
                className='object-contain w-full h-auto rounded-lg aspect-square'
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
