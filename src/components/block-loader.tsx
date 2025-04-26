import { RegistryItem } from 'shadcn/registry';

export async function BlockLoader({
  name,
}: {
  name: Pick<RegistryItem, 'name'>['name'];
}) {
  if (!name) {
    return null;
  }

  try {
    const Component = (
      await import(
        /* webpackInclude: /\/registry\/default\/blocks\/[^/]+\/page(\.tsx)?$/ */
        /* webpackChunkName: "block-[request]" */
        `@/registry/default/blocks/${name}/page`
      )
    ).default;

    return <Component />;
  } catch (error) {
    console.error(`Failed to load component ${name}:`, error);
    return null;
  }
}
