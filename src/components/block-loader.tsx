import { RegistryItem } from 'shadcn/registry';

export async function BlockLoader({ component }: { component: RegistryItem }) {
  if (!component?.name || !component?.categories) {
    return null;
  }

  const mainCategory = component.categories[0];
  const subCategory = component.categories[1];

  const importPath = `@/registry/new-york/blocks/${mainCategory}/${subCategory}/${component.name}/page.tsx`;

  try {
    const Component = (await import(importPath)).default;

    return <Component />;
  } catch (error) {
    console.error(`Failed to load component ${component.name}:`, error);
    return null;
  }
}
