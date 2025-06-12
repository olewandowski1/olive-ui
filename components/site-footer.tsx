import LeftAlignedFooter from '@/registry/default/blocks/left-aligned-footer/components/left-aligned-footer';

export function SiteFooter() {
  return (
    <footer className='bottom-0 z-50 w-full backdrop-blur-lg'>
      <LeftAlignedFooter
        companyName='Olive UI'
        navLinks={[{ label: 'Blocks', href: '/blocks' }]}
        policyLinks={[]}
      />
    </footer>
  );
}
