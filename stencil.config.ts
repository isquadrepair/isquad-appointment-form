import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'isquad-appointment-form',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'https://isquadrepairsandiego.com',
    },
  ],
  buildEs5: 'prod',
};
