import { notFound } from 'next/navigation';

import CenteredHeader from '@/registry/default/blocks/centered-header/page';
import { Separator } from '@/registry/default/ui/separator';

import { BlockLoader } from '@/components/block-loader';
import { BlockViewerDock } from '@/components/block-viewer-dock';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { getCategory, landingBlockCategories } from '@/lib/config';
import { getComponentsByNames } from '@/lib/utils';

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return landingBlockCategories.map((category) => ({
    category: category.slug,
  }));
}

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
        <div className='space-y-8 animate-appear'>
          <CenteredHeader
            caption={`${currentCategory.name} Blocks`}
            title={`${currentCategory.name} Examples`}
            description={`Explore our collection of ${currentCategory.name} blocks, designed to help you build beautiful and functional UIs quickly and easily.`}
          />

          <Separator />

          <div className='flex flex-col gap-4 md:gap-8'>
            {categoryComponents.map((component) => (
              <BlockViewerDock key={component.name} component={component}>
                <BlockLoader name={component.name} />
              </BlockViewerDock>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
