import { Check, LucideIcon, Rocket } from 'lucide-react';

import { Badge } from '@/registry/default/ui/badge';
import { Separator } from '@/registry/default/ui/separator';

import { MaxWidthWrapper } from './max-width-wrapper';
import { ShinyButton } from './shiny-button';

type CenteredHeroBlockProps = {
  badgeIcon?: LucideIcon;
  badgeText?: string;
  headingText?: string;
  headingTextHighliged?: string;
  descriptionTextStart?: string;
  descriptionTextHighlighted?: string;
  descriptionTextEnd?: string;
  listItems?: string[];
  ctaButtonText?: string;
};

export default function CenteredHeroBlock({
  badgeIcon: BadgeIcon = Rocket,
  badgeText = 'Example Badge Text To Be Replaced',
  headingText = 'Example Heading Text About the Block',
  headingTextHighliged = 'Example Highlighted Text About the Block',
  descriptionTextStart = 'First part of the description text',
  descriptionTextHighlighted = 'example highlighted text',
  descriptionTextEnd = '– the second part of the description text.',
  listItems = [
    'First Feature of the Product or Service',
    'Second Feature of the Product or Service',
    'Third Feature of the Product or Service',
  ],
  ctaButtonText = 'Call To Action',
}: CenteredHeroBlockProps) {
  return (
    <section>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-8 mx-auto text-center'>
          <Badge
            variant='outline'
            className='flex items-center justify-center space-x-1.5 h-7 text-foreground/90'
          >
            <span>
              <BadgeIcon className='size-4 opacity-60' aria-hidden='true' />
            </span>
            <Separator orientation='vertical' />
            <span className='text-xs font-normal text-foreground/90 line-clamp-1'>
              {badgeText}
            </span>
          </Badge>

          <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl text-pretty text-foreground/90'>
            <span>{headingText}</span>
            <br />
            <span className='text-transparent bg-gradient-to-r from-primary/80 to-primary bg-clip-text'>
              {headingTextHighliged}
            </span>
          </h1>

          <p className='mx-auto text-center text-base/7 max-w-prose text-pretty text-foreground/80'>
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

          <div className='w-full max-w-80'>
            <ShinyButton
              href='/blocks'
              className='relative z-10 w-full h-12 text-base transition-shadow duration-300 shadow-lg hover:shadow-xl'
            >
              {ctaButtonText}
            </ShinyButton>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
