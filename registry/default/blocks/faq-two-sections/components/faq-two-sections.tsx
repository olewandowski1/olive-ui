import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/registry/default/ui/accordion';

import { MaxWidthWrapper } from './max-width-wrapper';

type FAQTwoSectionsProps = {
  badgeText?: string;
  headingText?: string;
  faqDescription?: string;
  faqLinkText?: string;
  faqLinkHref?: string;
  questions?: {
    id: string;
    title: string;
    content: string;
  }[];
};

export default function FAQTwoSections({
  badgeText = 'Frequently Asked Questions',
  headingText = 'Do you need help?',
  faqDescription = 'This section contains answers to frequently asked questions. If you cannot find the answer to your question, feel free to reach out to us directly.',
  faqLinkText = 'Contact us',
  faqLinkHref = '#',
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
}: FAQTwoSectionsProps) {
  return (
    <section aria-labelledby='faq-heading'>
      <MaxWidthWrapper>
        <div className='grid gap-6 lg:grid-cols-2 sm:gap-8'>
          <div className='flex flex-col gap-6 sm:gap-8'>
            <span
              role='banner'
              aria-label='Section Identifier'
              className='text-sm font-medium text-primary'
            >
              {badgeText}
            </span>

            <h2
              id='faq-heading'
              className='text-3xl font-bold tracking-tighter text-pretty sm:text-4xl md:text-5xl'
            >
              {headingText}
            </h2>

            <p className='text-base/7 text-pretty text-foreground/80'>
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
          </div>

          <div className='w-full'>
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
                    className='py-2 text-left text-base/7 hover:no-underline'
                  >
                    {question.title}
                  </AccordionTrigger>
                  <AccordionContent
                    id={`faq-content-${question.id}`}
                    className='pb-2 text-left text-muted-foreground'
                  >
                    {question.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
