import { RegistryItem } from 'shadcn/registry';

import { BlockLoader } from '@/components/block-loader';
import { BlockViewerDock } from '@/components/block-viewer-dock';

type BlockViewerProps = {
  component: RegistryItem;
};

export function BlockViewer({ component }: BlockViewerProps) {
  return (
    <BlockViewerDock component={component}>
      <BlockLoader component={component} />
    </BlockViewerDock>
  );
}
