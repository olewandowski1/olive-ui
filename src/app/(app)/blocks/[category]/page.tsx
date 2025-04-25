import { notFound } from 'next/navigation';

import { CenteredHeader } from '@/registry/new-york/blocks/landing/header/centered-header/page';
import { Separator } from '@/registry/new-york/ui/separator';

import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { getCategory } from '@/lib/config';
import { getComponentsByNames } from '@/lib/utils';

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const currentCategory = getCategory((await params).category);

  if (!currentCategory) {
    notFound();
  }

  const categoryComponents = getComponentsByNames(
    currentCategory.components.map((comp) => comp.name)
  );

  return (
    <section>
      <MaxWidthWrapper>
        <div className='space-y-4 animate-appear'>
          <CenteredHeader
            caption={`${currentCategory.name} Blocks`}
            title={`${currentCategory.name} Examples`}
            description={`Explore our collection of ${currentCategory.name} blocks, designed to help you build beautiful and functional UIs quickly and easily.`}
          />

          <Separator />

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {categoryComponents.map((component) => {
              console.log(component);

              return <div key={component.name}> {component.name} </div>;
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
