import { notFound } from 'next/navigation';

import { getCategory } from '@/lib/config';
import { getComponentsByNames } from '@/lib/utils';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';

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

  // TODO: Implement the category page layout
  return (
    <section>
      <MaxWidthWrapper>
        <div className='animate-appear'> 123 </div>
      </MaxWidthWrapper>
    </section>
  );
}
