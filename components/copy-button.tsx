'use client';

import { cn } from '@/registry/default/lib/utils';
import { Button } from '@/registry/default/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/registry/default/ui/tooltip';

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

export const CopyButton = ({
  componentSource,
  className,
}: {
  componentSource: string | null;
  className?: string;
}) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className={cn('', className)}>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='transition-none text-muted-foreground hover:text-foreground hover:bg-transparent disabled:opacity-100'
              onClick={() => copyToClipboard(componentSource || '')}
              aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
              disabled={isCopied}
            >
              <div
                className={cn(
                  'transition-all',
                  isCopied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                )}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='none'
                  aria-hidden='true'
                >
                  <path
                    fill='#10B981'
                    d='M14.548 3.488a.75.75 0 0 1-.036 1.06l-8.572 8a.75.75 0 0 1-1.023 0l-3.429-3.2a.75.75 0 0 1 1.024-1.096l2.917 2.722 8.06-7.522a.75.75 0 0 1 1.06.036Z'
                  />
                </svg>
              </div>
              <div
                className={cn(
                  'absolute transition-all',
                  isCopied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                )}
              >
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='none'
                  aria-hidden='true'
                >
                  <path d='M3 2.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5ZM10 1H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm3 5.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-1H5v1a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1v1.5Z' />
                </svg>
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent className='px-2 py-1 text-xs'>Copy</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
