'use client';

import { Code, Component } from 'lucide-react';
import { RegistryItem } from 'shadcn/registry';

import { useIsMobile } from '@/registry/default/hooks/use-mobile';
import { Button } from '@/registry/default/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/registry/default/ui/drawer';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/registry/default/ui/tooltip';

import { BlockCLI } from '@/components/component-cli';
import { Icons } from '@/components/icons';
import { OpenInV0Button } from '@/components/open-in-v0-button';
import { siteConfig } from '@/lib/config';

type BlockViewerDockProps = {
  children: React.ReactNode;
  component: RegistryItem;
};

export function BlockViewerDock({ children, component }: BlockViewerDockProps) {
  const isMobile = useIsMobile();

  return (
    <div className='flex flex-col gap-1 md:gap-2'>
      <div className='flex items-center'>
        <span className='items-center hidden gap-2 font-mono text-sm font-medium text-primary md:flex'>
          <Component size={16} aria-hidden='true' />
          {component.name}
        </span>

        <div className='flex items-center ml-auto'>
          <div className='flex items-center gap-0.5'>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <OpenInV0Button name={component.name} />
                </TooltipTrigger>
                <TooltipContent> Open in v0 </TooltipContent>
              </Tooltip>
              <Drawer direction={isMobile ? 'bottom' : 'right'}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <DrawerTrigger asChild>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='flex items-center justify-center size-8'
                          aria-label='Get the block with Shadcn CLI'
                        >
                          <Code aria-hidden='true' />
                        </Button>
                      </DrawerTrigger>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent> Get with Shadcn CLI </TooltipContent>
                </Tooltip>

                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle> Installation </DrawerTitle>
                    <DrawerDescription>
                      Copy the command below to install this block using the
                      Shadcn CLI.
                    </DrawerDescription>
                  </DrawerHeader>

                  <div className='min-w-0 p-4'>
                    <BlockCLI name={component.name} />
                  </div>

                  <DrawerFooter className='flex flex-row items-center justify-center p-4'>
                    <Icons.logo className='size-6' />
                    <span className='inline-block font-bold'>
                      {siteConfig.name}
                    </span>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div className='border rounded-lg transition-all duration-300 overflow-hidden p-4 md:p-8 bg-gradient-to-b from-muted/30 via-muted/40 to-muted/30 mx-auto min-h-[324px] flex flex-col items-center justify-center w-full'>
        {children}
      </div>
    </div>
  );
}
