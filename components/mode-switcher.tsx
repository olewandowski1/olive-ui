'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCallback } from 'react';

import { Button } from '@/registry/default/ui/button';

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant='ghost'
      className='px-0 size-8 group/toggle'
      onClick={toggleTheme}
    >
      <SunIcon className='hidden [html.dark_&]:block' />
      <MoonIcon className='hidden [html.light_&]:block' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
