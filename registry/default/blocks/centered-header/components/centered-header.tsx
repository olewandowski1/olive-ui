import { MaxWidthWrapper } from './max-width-wrapper';

type CenteredHeaderProps = {
  caption?: string;
  title?: string;
  description?: string;
};

export default function CenteredHeader({
  caption = 'Example Caption',
  title = 'Example Title of the Centered Header',
  description = 'Example description of the centered header. This is a placeholder text that describes the centered header.',
}: CenteredHeaderProps) {
  return (
    <MaxWidthWrapper>
      <div className='max-w-xl mx-auto space-y-3 text-center'>
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
