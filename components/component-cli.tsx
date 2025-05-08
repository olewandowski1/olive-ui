'use client';

import { useState } from 'react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/registry/default/ui/tabs';

import { CopyButton } from '@/components/copy-button';
import { siteConfig } from '@/lib/config';

export function BlockCLI({ name }: { name: string }) {
  const [packageManager, setPackageManager] = useState<
    'pnpm' | 'npm' | 'yarn' | 'bun'
  >('npm');

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add ${siteConfig.url}r/${name}.json`,
    npm: `npx shadcn@latest add ${siteConfig.url}r/${name}.json`,
    yarn: `npx shadcn@latest add ${siteConfig.url}r/${name}.json`,
    bun: `bunx --bun shadcn@latest add ${siteConfig.url}r/${name}.json`,
  };

  return (
    <div className='relative'>
      <Tabs
        value={packageManager}
        onValueChange={(value) => {
          setPackageManager(value as 'pnpm' | 'npm' | 'yarn' | 'bun');
        }}
        className='gap-0'
      >
        <TabsList className='justify-start w-full border-b rounded-none rounded-t-lg bg-muted'>
          <TabsTrigger value='pnpm'>pnpm</TabsTrigger>
          <TabsTrigger value='npm'>npm</TabsTrigger>
          <TabsTrigger value='yarn'>yarn</TabsTrigger>
          <TabsTrigger value='bun'>bun</TabsTrigger>
        </TabsList>

        {Object.entries(commands).map(([pkg, command]) => (
          <TabsContent className='relative m-0' key={pkg} value={pkg}>
            <pre className='p-4 pr-12 font-mono text-xs truncate rounded-b-lg bg-muted/50'>
              {command}
            </pre>
            <CopyButton
              className='absolute top-2 right-2'
              componentSource={
                commands[packageManager as keyof typeof commands]
              }
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
