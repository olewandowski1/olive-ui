import { Slash, UserRound } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/registry/default/ui/avatar';

import { MaxWidthWrapper } from './max-width-wrapper';

export type Author = {
  name: string;
  title: string;
  imageUrl: string;
};

export interface SingleTestimonialProps {
  quote?: string;
  author?: Author;
}

export default function SingleTestimonial({
  quote = `“Olive UI is a game-changer for scratch development.
    It provides a solid foundation with its design system and component
    library, making it easy to build beautiful and accessible user
    interfaces.”`,
  author = {
    name: 'Oliver J. Smith',
    title: 'Senior Software Engineer',
    imageUrl: 'https://github.com/shadcn.png',
  },
}: SingleTestimonialProps) {
  const headingId = `single-testimonial-${author.name
    .toLowerCase()
    .replace(/\s+/g, '-')}-heading`;

  return (
    <section role='region' aria-labelledby={headingId}>
      <h2 id={headingId} className='sr-only'>
        Testimonial from {author.name}
      </h2>
      <MaxWidthWrapper className='flex flex-col items-center justify-center space-y-9'>
        <figure className='flex flex-col items-center space-y-6 text-center'>
          <blockquote
            cite={author.name}
            className='max-w-screen-md text-lg font-semibold leading-7 tracking-tight text-foreground/90'
          >
            <p>{quote}</p>
          </blockquote>
          <figcaption className='flex flex-col items-center space-y-3'>
            <Avatar className='w-10 h-10 rounded-lg'>
              <AvatarImage src={author.imageUrl} alt={author.name} />
              <AvatarFallback className='flex items-center justify-center w-10 h-10 rounded-lg bg-muted'>
                <UserRound
                  className='w-6 h-6 text-muted-foreground'
                  aria-hidden='true'
                />
                <span className='sr-only'>
                  {author.name}'s avatar placeholder
                </span>
              </AvatarFallback>
            </Avatar>
            <div className='flex items-center space-x-2'>
              <p className='text-sm font-semibold text-foreground/90'>
                {author.name}
              </p>
              <Slash
                className='w-3 h-3 text-muted-foreground'
                aria-hidden='true'
              />
              <p className='text-xs text-muted-foreground'>{author.title}</p>
            </div>
          </figcaption>
        </figure>
      </MaxWidthWrapper>
    </section>
  );
}
