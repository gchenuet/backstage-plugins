/*
 * Copyright SeatGeek
 * Licensed under the terms of the Apache-2.0 license. See LICENSE file in project root for terms.
 */
import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

/** @public */
export const entityScaffolderContentPlugin = createPlugin({
  id: 'entity-scaffolder-content',
  routes: {
    root: rootRouteRef,
  },
});

/** @public */
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
