import {
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  Mail,
  Phone,
  Pin,
  X,
  Youtube,
} from 'lucide-react';

import { buttonVariants } from '@/registry/default/ui/button';

import { MaxWidthWrapper } from './max-width-wrapper';

type ContactInfoNoFormProps = {
  badgeText?: string;
  headingText?: string;
  sectionDescription?: string;
  socialMediaLinks?: {
    platform: string;
    url: string;
    icon: LucideIcon;
  }[];
  companyInfo?: {
    address?: string;
    phone?: string;
    email?: string;
  };
};

export default function ContactInfoNoForm({
  badgeText = 'Contact Us',
  headingText = 'Get in Touch with Our Team',
  sectionDescription = 'We are here to help you with any questions or concerns you may have. ' +
    'Reach out to us on our social media channels or call us directly. ' +
    'Our team is ready to assist you with any inquiries.',
  socialMediaLinks = [
    { platform: 'Facebook', url: '#', icon: Facebook },
    { platform: 'X', url: '#', icon: X },
    { platform: 'Instagram', url: '#', icon: Instagram },
    { platform: 'LinkedIn', url: '#', icon: Linkedin },
    { platform: 'YouTube', url: '#', icon: Youtube },
  ],
  companyInfo = {
    address: '123 Main St, Anytown, USA',
    phone: '+1 (555) 123-4567',
    email: 'contact@example.com',
  },
}: ContactInfoNoFormProps) {
  return (
    <section aria-labelledby='contact-info-heading' role='region'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16'>
          <div className='flex flex-col items-center space-y-6 text-center lg:items-start lg:text-left'>
            <span className='text-sm font-medium text-primary'>
              {badgeText}
            </span>
            <h2
              id='contact-info-heading'
              className='max-w-screen-md text-3xl font-bold tracking-tight text-pretty sm:text-4xl md:text-5xl'
            >
              {headingText}
            </h2>
            <p className='max-w-screen-md text-base/7 text-foreground/80'>
              {sectionDescription}
            </p>
            <div className='flex flex-wrap justify-center gap-3 lg:justify-start'>
              {socialMediaLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={link.platform}
                  className={buttonVariants({
                    variant: 'outline',
                    size: 'icon',
                  })}
                >
                  <link.icon className='opacity-60' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>

          <div className='flex justify-center p-6 border rounded-lg bg-card lg:p-8'>
            <div className='flex flex-col justify-between w-full max-w-md space-y-6 lg:items-start'>
              {companyInfo.address && (
                <div className='flex flex-col items-center space-y-3 lg:space-x-3 lg:items-start lg:flex-row'>
                  <div
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'icon',
                    })}
                  >
                    <Pin className='opacity-60' aria-hidden='true' />
                  </div>
                  <div className='flex flex-col text-center lg:text-start'>
                    <span className='text-sm font-medium text-foreground/90'>
                      Office Location
                    </span>
                    <span className='underline underline-offset-2 text-md text-foreground/80'>
                      {companyInfo.address}
                    </span>
                  </div>
                </div>
              )}
              {companyInfo.email && (
                <div className='flex flex-col items-center space-y-3 lg:space-x-3 lg:items-start lg:flex-row'>
                  <div
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'icon',
                    })}
                  >
                    <Mail className='opacity-60' aria-hidden='true' />
                  </div>
                  <div className='flex flex-col text-center lg:text-start'>
                    <span className='text-sm font-medium text-foreground/90'>
                      E-mail Address
                    </span>
                    <span className='underline underline-offset-2 text-md text-foreground/80'>
                      {companyInfo.email}
                    </span>
                  </div>
                </div>
              )}
              {companyInfo.phone && (
                <div className='flex flex-col items-center space-y-3 lg:space-x-3 lg:items-start lg:flex-row'>
                  <div
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'icon',
                    })}
                  >
                    <Phone className='opacity-60' aria-hidden='true' />
                  </div>
                  <div className='flex flex-col text-center lg:text-start'>
                    <span className='text-sm font-medium text-foreground/90'>
                      Phone Number
                    </span>
                    <span className='underline underline-offset-2 text-md text-foreground/80'>
                      {companyInfo.phone}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
