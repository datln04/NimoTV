/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const StreamManager = lazyLoad(
  () => import('./index'),
  module => module.StreamManager,
);
