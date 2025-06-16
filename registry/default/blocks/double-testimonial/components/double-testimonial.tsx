import { Slash, UserRound } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/registry/default/ui/avatar';
import { Separator } from '@/registry/default/ui/separator';

import { MaxWidthWrapper } from './max-width-wrapper';

export type Author = {
  name: string;
  title: string;
  imageUrl: string;
};

export interface DoubleTestimonialProps {
  firstTestimonial?: {
    quote: string;
    author: Author;
  };
  secondTestimonial?: {
    quote: string;
    author: Author;
  };
}

export default function DoubleTestimonial({
  firstTestimonial = {
    quote: `“Olive UI is a game-changer for scratch development.
      It provides a solid foundation with its design system and component
      library, making it easy to build beautiful and accessible
      user interfaces.”`,
    author: {
      name: 'Oliver J. Smith',
      title: 'Senior Software Engineer',
      imageUrl: 'https://github.com/shadcn.png',
    },
  },
  secondTestimonial = {
    quote: `“Olive UI has transformed the way I approach UI design.
      The components are not only beautiful but also highly
      customizable, making it a breeze to create unique
      interfaces.”`,
    author: {
      name: 'Emma L. Johnson',
      title: 'DX Engineer',
      imageUrl: 'https://github.com/shadcn.png',
    },
  },
}: DoubleTestimonialProps) {
  return (
    <section role='region' aria-labelledby='double-testimonial-heading'>
      <h2 id='double-testimonial-heading' className='sr-only'>
        Testimonials
      </h2>
      <MaxWidthWrapper className='flex flex-col items-center lg:flex-row lg:items-stretch lg:space-x-9'>
        <Testimonial
          quote={firstTestimonial.quote}
          author={firstTestimonial.author}
        />

        <Slash
          strokeWidth={0.2}
          aria-hidden='true'
          className='self-center hidden size-24 lg:block text-foreground/90'
        />

        <Separator className='block w-full lg:hidden my-9' />

        <Testimonial
          quote={secondTestimonial.quote}
          author={secondTestimonial.author}
        />
      </MaxWidthWrapper>
    </section>
  );
}

function Testimonial({ quote, author }: { quote: string; author: Author }) {
  const captionId = `testimonial-${author.name
    .toLowerCase()
    .replace(/\s+/g, '-')}-caption`;

  return (
    <figure
      aria-labelledby={captionId}
      className='flex flex-col items-center space-y-6 text-center'
    >
      <blockquote
        cite={author.name}
        className='max-w-screen-md text-lg font-semibold leading-7 tracking-tight text-foreground/90'
      >
        <p>{quote}</p>
      </blockquote>

      <figcaption
        id={captionId}
        className='flex flex-col items-center space-y-3'
      >
        <Avatar className='rounded-lg size-10'>
          <AvatarImage src={author.imageUrl} alt={author.name} />
          <AvatarFallback className='flex items-center justify-center rounded-lg size-10 bg-muted'>
            <UserRound
              className='size-6 text-muted-foreground'
              aria-hidden='true'
            />
            <span className='sr-only'>{author.name}'s avatar placeholder</span>
          </AvatarFallback>
        </Avatar>

        <div className='flex items-center space-x-2'>
          <p className='text-sm font-semibold text-foreground/90'>
            {author.name}
          </p>
          <Slash className='size-3 text-muted-foreground' aria-hidden='true' />
          <p className='my-auto text-xs text-muted-foreground'>
            {author.title}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
