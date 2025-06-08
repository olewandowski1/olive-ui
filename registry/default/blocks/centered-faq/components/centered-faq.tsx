import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/registry/default/ui/accordion';
import { Button } from '@/registry/default/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/default/ui/card';

import { MaxWidthWrapper } from './max-width-wrapper';

type CenteredFAQProps = {
  badgeText?: string;
  headingText?: string;
  faqDescription?: string;
  faqLinkText?: string;
  faqLinkHref?: string;
  ctaLinkHref?: string;
  questions?: {
    id: string;
    title: string;
    content: string;
  }[];
  ctaHeadingText?: string;
  ctaDescriptionText?: string;
  ctaButtonText?: string;
};

export default function CenteredFAQ({
  badgeText = 'Frequently Asked Questions',
  headingText = 'Do you need help? Here are some answers to common questions.',
  faqDescription = 'This section contains answers to frequently asked questions. If you cannot find the answer to your question, feel free to reach out to us directly.',
  faqLinkText = 'Contact us',
  faqLinkHref = '#',
  ctaLinkHref = '#',
  questions = [
    {
      id: '1',
      title: 'What is the purpose of this FAQ section?',
      content:
        'This FAQ section is designed to provide answers to common questions and help users find information quickly.',
    },
    {
      id: '2',
      title: 'How can I contact support if my question is not answered here?',
      content:
        'If you cannot find the answer to your question, feel free to reach out to us directly through our contact page.',
    },
    {
      id: '3',
      title: 'Can I suggest a new question for this FAQ?',
      content:
        'Yes, we welcome suggestions for new questions. Please contact us with your suggestion.',
    },
    {
      id: '4',
      title: 'How often is the FAQ updated?',
      content:
        'We strive to keep the FAQ updated with the most relevant and frequently asked questions. If you have a question that is not answered, please let us know.',
    },
    {
      id: '5',
      title: 'Is there a way to search for specific questions in the FAQ?',
      content:
        'Currently, there is no search functionality, but you can browse through the questions listed in this section.',
    },
  ],
  ctaHeadingText = 'Need more help?',
  ctaDescriptionText = 'If you need further assistance, feel free to reach out to us.',
  ctaButtonText = 'Contact Us',
}: CenteredFAQProps) {
  return (
    <section aria-labelledby='faq-heading'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-6 mx-auto text-center sm:gap-8'>
          <span
            role='banner'
            aria-label='Section Identifier'
            className='text-sm font-medium text-primary'
          >
            {badgeText}
          </span>

          <h2
            id='faq-heading'
            className='max-w-screen-md text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
          >
            {headingText}
          </h2>

          <p className='max-w-screen-md mx-auto text-center text-base/7 text-pretty text-foreground/80'>
            {faqDescription}{' '}
            <Link
              href={faqLinkHref}
              className='font-semibold underline rounded-sm underline-offset-2 hover:text-foreground/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              aria-describedby='faq-contact-description'
            >
              {faqLinkText}
            </Link>
            .
            <span id='faq-contact-description' className='sr-only'>
              Navigates to the contact page in the same tab
            </span>
          </p>

          <div className='w-full max-w-screen-md'>
            <h3 className='sr-only'>Frequently Asked Questions List</h3>
            <Accordion
              type='single'
              collapsible
              className='w-full'
              defaultValue='1'
            >
              {questions.map((question) => (
                <AccordionItem
                  value={question.id}
                  key={question.id}
                  className='py-2'
                >
                  <AccordionTrigger
                    aria-describedby={`faq-content-${question.id}`}
                    className='flex-col py-2 text-center md:flex-row text-base/7 hover:no-underline md:text-start'
                  >
                    {question.title}
                  </AccordionTrigger>
                  <AccordionContent
                    id={`faq-content-${question.id}`}
                    className='pb-2 text-center text-muted-foreground md:text-start'
                  >
                    {question.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card
            role='complementary'
            aria-labelledby='cta-heading'
            className='w-full max-w-screen-lg space-y-4 text-center bg-foreground/5'
          >
            <CardHeader className='mb-0 space-y-4'>
              <CardTitle id='cta-heading' className='font-bold'>
                <span>{ctaHeadingText}</span>
              </CardTitle>

              <CardDescription className='text-base/7 text-foreground/80'>
                {ctaDescriptionText}
              </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col items-center text-foreground/80'>
              <Button size='lg' className='group' asChild>
                <Link
                  href={ctaLinkHref}
                  className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  aria-describedby='cta-button-description'
                >
                  {ctaButtonText}
                  <ChevronRight
                    className='-me-1 ms-1 opacity-60 transition-transform group-hover:translate-x-0.5'
                    size={16}
                    strokeWidth={2}
                    aria-hidden='true'
                  />
                </Link>
              </Button>
              <span className='sr-only' id='cta-button-description'>
                Navigates to the contact page in the same tab
              </span>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
