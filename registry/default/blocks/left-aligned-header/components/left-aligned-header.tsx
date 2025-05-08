import { MaxWidthWrapper } from './max-width-wrapper';

type LeftAlignedHeaderProps = {
  caption?: string;
  title?: string;
  description?: string;
};

export default function LeftAlignedHeader({
  caption = 'Example Caption',
  title = 'Example Title of  the Left Aligned Header',
  description = 'Example description of the left aligned header. This is a placeholder text that describes the left aligned header.',
}: LeftAlignedHeaderProps) {
  return (
    <MaxWidthWrapper>
      <div className='max-w-xl space-y-3'>
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
