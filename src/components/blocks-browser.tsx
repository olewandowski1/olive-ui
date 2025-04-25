import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card';

import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { landingBlockCategories } from '@/lib/config';

export function BlocksBrowser() {
  return (
    <MaxWidthWrapper>
      <div className='space-y-4 animate-appear'>
        <h1 className='text-lg font-semibold tracking-tighter md:text-xl'>
          Landing Page Blocks
        </h1>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {landingBlockCategories
            .sort((a, b) => {
              if (a.isNew && !b.isNew) return -1;
              if (!a.isNew && b.isNew) return 1;
              return 0;
            })
            .map((category) => {
              const href = `/blocks/${category.slug}`;

              return (
                <Link href={href} key={category.slug} className='no-underline'>
                  <CategoryCard
                    slug={category.slug}
                    name={category.name}
                    componentsCount={category.components.length}
                    isNew={category.isNew}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

type CategoryCardProps = {
  slug: string;
  name: string;
  componentsCount: number;
  isNew?: boolean;
};

function CategoryCard({ slug, name, componentsCount }: CategoryCardProps) {
  const imageBasePath = `/blocks/${slug}`;
  const altText = `Beautiful ${name} Blocks`;

  return (
    <Card className='flex flex-col h-full gap-0.5 p-0 overflow-hidden bg-transparent border-0 rounded-xl group'>
      <div className='relative w-full h-48 overflow-hidden transition-shadow duration-200 ease-in-out border rounded-xl group-hover:shadow-sm'>
        <ImageComponent imageBasePath={imageBasePath} alt={altText} />
      </div>

      <CardHeader className='flex-grow px-1 py-0 tracking-tight'>
        <CardTitle className='font-medium text-md'>{name}</CardTitle>
        <CardDescription className='text-xs text-muted-foreground'>
          {`${componentsCount} ${componentsCount === 1 ? 'Block' : 'Blocks'}`}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
type ImageComponentProps = {
  imageBasePath: string;
  alt: string;
};

function ImageComponent({ imageBasePath, alt }: ImageComponentProps) {
  return (
    <>
      <Image
        src={`${imageBasePath}.svg`}
        alt={alt}
        fill
        sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
        className='object-contain p-4 md:p-6 bg-muted/30'
      />
    </>
  );
}
