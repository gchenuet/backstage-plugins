import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const entityScaffolderContentPlugin = createPlugin({
  id: 'entity-scaffolder-content',
  routes: {
    root: rootRouteRef,
  },
});

export const EntityScaffolderContent = entityScaffolderContentPlugin.provide(
  createRoutableExtension({
    name: 'EntityScaffolderContent',
    component: () =>
      import('./components/EntityScaffolderContent').then(
        m => m.EntityScaffolderContent,
      ),
    mountPoint: rootRouteRef,
  }),
);
