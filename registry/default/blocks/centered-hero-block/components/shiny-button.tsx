import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/registry/default/lib/utils';

type ShinyButtonProps = {} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ShinyButton({
  children,
  className,
  href,
  ...props
}: ShinyButtonProps) {
  return (
    <Link
      href={href ?? '#'}
      className={cn(
        'group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-primary/90 px-8 text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2',
        className
      )}
      {...props}
    >
      <span className='relative z-10 flex items-center gap-2'>
        {children}
        <ChevronRight
          className='-me-1 ms-1 size-4 shrink-0 opacity-60 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]'
          strokeWidth={2}
        />
      </span>

      <div className='ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-12 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]' />
    </Link>
  );
}
