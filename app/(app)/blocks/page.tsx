import LeftAlignedHeader from '@/registry/default/blocks/left-aligned-header/page';

import { BlocksBrowser } from '@/components/blocks-browser';

export default function BlocksPage() {
  return (
    <section className='space-y-8'>
      <LeftAlignedHeader />
      <BlocksBrowser />
    </section>
  );
}
