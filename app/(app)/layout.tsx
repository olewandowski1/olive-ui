import { SiteHeader } from '@/components/site-header';
import { Glow } from '@/components/ui/glow';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative flex flex-col min-h-screen'>
      <Glow variant='top' className='opacity-0 animate-appear-zoom' />
      <SiteHeader />
      <main className='z-10 flex flex-col flex-1 py-8 space-y-8'>
        {children}
      </main>
    </div>
  );
}
