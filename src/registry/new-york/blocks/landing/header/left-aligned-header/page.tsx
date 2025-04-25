import { MaxWidthWrapper } from './components/max-width-wrapper';

type LeftAlignedHeaderProps = {
  caption?: string;
  title?: string;
  description?: string;
};

export function LeftAlignedHeader({
  caption = 'Browse Blocks',
  title = 'The collection of UI blocks',
  description = 'Explore our collection of UI blocks, designed to help you build beautiful and functional user interfaces quickly and easily.',
}: LeftAlignedHeaderProps) {
  return (
    <MaxWidthWrapper>
      <div className='max-w-xl space-y-3 animate-appear'>
        <span className='text-sm font-medium text-primary'>{caption}</span>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
          {title}
        </h1>
        <p className='text-md text-muted-foreground sm:text-lg'>
          {description}
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
