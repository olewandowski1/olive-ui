'use client';

import { Menu } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { Icons } from '@/components/icons';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/registry/default/lib/utils';
import { Button } from '@/registry/default/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/registry/default/ui/drawer';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const onOpenChange = useCallback((open: boolean) => {
    setOpen(open);
  }, []);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild id='mobile-nav-trigger'>
        <Button
          variant='ghost'
          className='gap-4 px-0 text-base size-8 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <Menu className='size-4' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='max-h-[80svh] p-0' aria-describedby=''>
        <DrawerTitle className='flex items-center gap-2 p-6 mr-4 lg:mr-6'>
          <Icons.logo className='size-6 shrink-0' />
          <span className='inline-block font-bold'> Navigation </span>
        </DrawerTitle>

        <div className='p-6 overflow-auto'>
          <div className='flex flex-col space-y-3'>
            {NAV_ITEMS?.map((item) =>
              item.href && item.active ? (
                <MobileLink
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                >
                  {item.label}
                </MobileLink>
              ) : null
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

type MobileLinkProps = LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
};

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn('text-base', className)}
      {...props}
    >
      {children}
    </Link>
  );
}
