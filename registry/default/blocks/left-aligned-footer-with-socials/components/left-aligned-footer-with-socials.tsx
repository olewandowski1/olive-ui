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
          <div className='flex flex-col w-full gap-6 sm:items-start md:flex-row md:justify-between'>
            <Link
              href='#'
              className='flex items-center self-start gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground'
              aria-label={`${companyName} Home Page`}
            >
              <LogoIcon className='size-6' aria-hidden='true' />
              <span className='inline-block font-bold'>{companyName}</span>
            </Link>

            <nav
              className='flex flex-wrap gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2'
              aria-label='Footer Navigation'
            >
              {navLinks?.map((link) => {
                const isCurrentPage = pathname === link.href;
                return (
                  <Link
                    href={link.href}
                    key={link.label}
                    className='px-2 py-1 text-sm font-normal transition-colors rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground'
                    aria-current={isCurrentPage ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div
              className='flex items-center gap-4'
              role='navigation'
              aria-label='Social Links'
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={index}
                    href={link.href}
                    className='p-2 transition-colors rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground'
                    aria-label={`Link to ${link.label}`}
                  >
                    <Icon className='size-5' aria-hidden='true' />
                  </Link>
                );
              })}
            </div>
          </div>

          <Separator className='w-full' decorative aria-hidden='true' />

          <div className='flex flex-col w-full gap-4 sm:items-start md:flex-row md:justify-between'>
            <div className='text-sm text-muted-foreground'>
              <span
                aria-label={`Copyright ${currentYear}. All Rights Reserved.`}
              >
                © {currentYear} All Rights Reserved.
              </span>
            </div>

            <div
              className='flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6'
              role='navigation'
              aria-label='Legal Links'
            >
              {policyLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className='px-2 py-1 text-sm transition-colors rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}
