import { cn } from '@/registry/new-york/lib/utils';

type HeadingProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        'text-4xl sm:text-5xl text-pretty font-semibold tracking-tight text-foreground/90',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
