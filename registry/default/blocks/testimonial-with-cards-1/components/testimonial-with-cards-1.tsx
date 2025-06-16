import { UserRound } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/registry/default/ui/avatar';
import { Card, CardContent, CardFooter } from '@/registry/default/ui/card';

import { MaxWidthWrapper } from './max-width-wrapper';

export interface TestimonialWithCards1Props {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
  testimonialCards?: {
    quote: string;
    author: {
      name: string;
      title: string;
      imageUrl: string;
    };
  }[];
}

export default function TestimonialWithCards1({
  badgeText = 'What People Say',
  headingText = 'Join The Community of Developers Who Love Olive UI',
  sectionDescription = "Build beautiful and accessible user interfaces with ease. Here's what our users have to say about Olive UI.",
  testimonialCards = [
    {
      quote:
        '“Olive UI has completely changed the way I build user interfaces. The components are beautiful and easy to use.”',
      author: {
        name: 'Jane Doe',
        title: 'Frontend Engineer',
        imageUrl: 'https://github.com/shadcn.png',
      },
    },
    {
      quote:
        '“I love how Olive UI makes it easy to create responsive and accessible designs. The usage of Tailwind CSS is a game changer.”',
      author: {
        name: 'John Smith',
        title: 'UX Designer',
        imageUrl: 'https://github.com/shadcn.png',
      },
    },
    {
      quote:
        '“The components in Olive UI are not only visually appealing but also highly customizable. Easy to integrate into any project.”',
      author: {
        name: 'Alice Johnson',
        title: 'Senior Full Stack Engineer',
        imageUrl: 'https://github.com/shadcn.png',
      },
    },
  ],
}: TestimonialWithCards1Props) {
  return (
    <section role='region' aria-labelledby='testimonial-heading'>
      <h2 id='testimonial-heading' className='sr-only'>
        User testimonials
      </h2>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-6 text-center sm:gap-8'>
          <span className='text-sm font-medium text-primary'>{badgeText}</span>
          <h3 className='max-w-screen-md text-3xl font-bold tracking-tight text-pretty sm:text-4xl md:text-5xl'>
            {headingText}
          </h3>
          <p className='max-w-screen-md text-base/7 text-foreground/80'>
            {sectionDescription}
          </p>

          <div
            role='region'
            aria-labelledby='testimonial-cards-heading'
            className='grid w-full max-w-screen-sm gap-8 lg:max-w-screen-lg lg:grid-cols-3'
          >
            <h4 id='testimonial-cards-heading' className='sr-only'>
              User Testimonials
            </h4>
            {testimonialCards.map(({ quote, author }) => (
              <Card key={author.name}>
                <CardContent>
                  <blockquote className='text-lg font-semibold leading-7 tracking-tight text-start text-foreground/90'>
                    <p>{quote}</p>
                  </blockquote>
                </CardContent>
                <CardFooter className='flex items-start space-x-3'>
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
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold text-md text-foreground/90'>
                      {author.name}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {author.title}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
