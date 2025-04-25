import { SiteHeader } from '@/components/site-header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col flex-1'>
      <SiteHeader />
      <main className='flex flex-col flex-1'>{children}</main>
      {/* TODO: SiteFooter */}
    </div>
  );
}
