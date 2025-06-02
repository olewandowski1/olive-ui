import { LucideIcon, Star } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/registry/default/ui/avatar';
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
  ctaButtonText?: string;
  ratingSummary?: string;
  availableAvatars?: { imageSrc: string; name: string }[];
};

export default function HeroBlockWithRating({
  badgeIcon: BadgeIcon = Star,
  badgeText = 'Best Rated Service',
  headingText = 'Example Headling Text',
  headingTextHighliged = 'Example Highlighted Text',
  descriptionTextStart = 'Much longer example text that is used to describe the block and its features. If you want to highlight a part of the text, you can use the highlighted text below.',
  descriptionTextHighlighted = 'Example highlighted text',
  ctaButtonText = 'Read More',
  ratingSummary = 'Loved By The 500+ CEOs Worldwide',
  availableAvatars = [
    {
      imageSrc: 'https://github.com/shadcn.png',
      name: 'Example Avatar',
    },
    {
      imageSrc: 'https://github.com/shadcn.png',
      name: 'Example Avatar 2',
    },
    {
      imageSrc: 'https://github.com/shadcn.png',
      name: 'Example Avatar 3',
    },
  ],
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
              <BadgeIcon className='size-4' aria-hidden='true' />
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
              {descriptionTextHighlighted}.
            </span>
          </p>

          <div className='w-full max-w-80'>
            <ShinyButton
              href='/blocks'
              className='relative z-10 w-full h-12 text-base transition-shadow duration-300 shadow-lg hover:shadow-xl'
            >
              {ctaButtonText}
            </ShinyButton>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='flex flex-row items-center gap-4'>
              <div className='flex items-center -space-x-2'>
                {availableAvatars.map(({ imageSrc, name }) => (
                  <Avatar key={name} className='border-2 border-white'>
                    <AvatarImage src={imageSrc} />
                    <AvatarFallback>{name}</AvatarFallback>
                  </Avatar>
                ))}
              </div>

              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, index) => (
                  <Star size={16} key={index} color='#ffe234' fill='#ffe234' />
                ))}
              </div>
            </div>

            <span className='text-sm text-muted-foreground'>
              {ratingSummary}
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
