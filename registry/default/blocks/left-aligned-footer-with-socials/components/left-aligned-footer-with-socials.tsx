'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  type LucideIcon,
  Slash,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Separator } from '@/registry/default/ui/separator';

import { MaxWidthWrapper } from './max-width-wrapper';

type LeftAlignedFooterWithSocialsProps = {
  LogoIcon?: LucideIcon;
  companyName?: string;
  navLinks?: Array<{ label: string; href: string }>;
  socialLinks?: Array<{ label: string; href: string; icon: LucideIcon }>;
  policyLinks?: Array<{ label: string; href: string }>;
};

export default function LeftAlignedFooterWithSocials({
  LogoIcon = Slash,
  companyName = 'Company Name',
  navLinks = [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Features',
      href: '#',
    },
    {
      label: 'Support',
      href: '#',
    },
    {
      label: 'Contact',
      href: '#',
    },
  ],
  socialLinks = [
    {
      label: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      label: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      label: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      label: 'Instagram',
      href: '#',
      icon: Instagram,
    },
  ],
  policyLinks = [
    {
      label: 'Privacy Policy',
      href: '#',
    },
    {
      label: 'Terms of Service',
      href: '#',
    },
    {
      label: 'Cookies',
      href: '#',
    },
  ],
}: LeftAlignedFooterWithSocialsProps) {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <MaxWidthWrapper>
      <footer role='contentinfo' aria-label='Site Footer' className='py-8'>
        <div className='flex flex-col space-y-8'>
          <div className='flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-start'>
            <Link
              href='#'
              className='flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2'
              aria-label={`${companyName} Home Page`}
            >
              <LogoIcon className='size-6' aria-hidden='true' />
              <span className='inline-block font-bold'>{companyName}</span>
            </Link>

            <nav
              className='flex flex-col items-center gap-4 md:flex-row md:gap-x-6 md:gap-y-2'
              aria-label='Footer Navigation'
            >
              {navLinks?.map((link) => {
                const isCurrentPage = pathname === link.href;
                return (
                  <Link
                    href={link.href}
                    key={link.label}
                    className='px-2 py-1 text-sm font-normal transition-colors rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2'
                    aria-current={isCurrentPage ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <nav
              className='flex items-center justify-center gap-4 md:justify-start'
              aria-label='Social Media Links'
            >
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className='p-2 transition-colors rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2'
                    aria-label={`Visit our ${link.label} page`}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <Icon className='size-5' aria-hidden='true' />
                  </Link>
                );
              })}
            </nav>
          </div>

          <Separator className='w-full' role='separator' aria-hidden='true' />

          <div className='flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between md:items-start'>
            <div className='text-sm text-center text-muted-foreground md:text-left'>
              <span>
                © {currentYear} {companyName}. All Rights Reserved.
              </span>
            </div>

            <nav
              className='flex flex-col items-center gap-4 md:flex-row md:gap-x-6'
              aria-label='Legal and Policy Links'
            >
              {policyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className='px-2 py-1 text-sm transition-colors rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}
