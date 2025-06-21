import { Metadata } from 'next';

import LeftAlignedHeader from '@/registry/default/blocks/left-aligned-header/components/left-aligned-header';

import { BlocksBrowser } from '@/components/blocks-browser';

export const metadata: Metadata = {
  title: 'Explore Blocks',
  description:
    'Explore the collection of UI blocks designed to help you build beautiful and functional user interfaces quickly and easily. Find pre-built components that are extendable and compliant with WCAG 2.1 AA standards.',
};

export default function BlocksPage() {
  return (
    <section className='space-y-8'>
      <LeftAlignedHeader
        caption='Browse Blocks'
        title='The collection of UI blocks'
        description='Explore our collection of UI blocks, designed to help you build beautiful and functional user interfaces quickly and easily.'
      />
      <BlocksBrowser />
    </section>
  );
}
