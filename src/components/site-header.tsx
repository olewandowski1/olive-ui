import Link from 'next/link';

import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { MobileNav } from '@/components/mobile-nav';
import { ModeSwitcher } from '@/components/mode-switcher';
import { siteConfig } from '@/lib/config';
import { Button } from '@/registry/default/ui/button';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full backdrop-blur-lg'>
      <MaxWidthWrapper className='flex items-center h-16 gap-2 md:gap-4'>
        <MainNav />
        <MobileNav />
        <div className='flex items-center gap-2 ml-auto md:flex-1 md:justify-end'>
          <Button asChild variant='ghost' size='icon' className='px-0 size-8'>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
            >
              <Icons.gitHub className='size-4' />
              <span className='sr-only'>GitHub</span>
            </Link>
          </Button>
          <ModeSwitcher />
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
