import { ContactForm } from './contact-form';
import { MaxWidthWrapper } from './max-width-wrapper';

type ContactFormCenteredProps = {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
};

export default function ContactFormCentered({
  badgeText = 'Any questions?',
  headingText = 'Feel free to contact us',
  sectionDescription = 'We are here to help you with any questions or concerns you may have. Reach out to us today!',
}: ContactFormCenteredProps) {
  return (
    <section aria-labelledby='contact-form-heading'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center gap-8 text-center'>
          <span className='text-sm font-medium text-primary'>{badgeText}</span>

          <h2
            id='contact-form-heading'
            className='max-w-screen-md text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl'
          >
            {headingText}
          </h2>

          <p className='max-w-screen-md text-base leading-relaxed text-foreground/80'>
            {sectionDescription}
          </p>

          <div className='w-full text-start'>
            <ContactForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
