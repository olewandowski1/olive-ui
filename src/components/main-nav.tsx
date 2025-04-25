'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/lib/config';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/registry/new-york/lib/utils';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='hidden md:flex'>
      <Link href='/' className='flex items-center gap-2 mr-4 lg:mr-6'>
        <Icons.logo className='size-6' />
        <span className='inline-block font-bold'>{siteConfig.name}</span>
      </Link>
      <nav className='flex items-center gap-4 text-sm xl:gap-6'>
        {NAV_ITEMS.map((item) =>
          item.active ? (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80 flex items-center',
                pathname?.startsWith(item.href)
                  ? 'text-foreground'
                  : 'text-foreground/80'
              )}
            >
              {item.label}
            </Link>
          ) : null
        )}
      </nav>
    </div>
  );
}
