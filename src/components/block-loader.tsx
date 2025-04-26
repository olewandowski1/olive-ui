import { RegistryItem } from 'shadcn/registry';

export async function BlockLoader({ component }: { component: RegistryItem }) {
  if (!component?.name) {
    return null;
  }

  const importPath = `@/registry/default/blocks/${component.name}/page`;

  try {
    const Component = (await import(importPath)).default;

    return <Component />;
  } catch (error) {
    console.error(`Failed to load component ${component.name}:`, error);
    return null;
  }
}
