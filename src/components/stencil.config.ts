import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    {
      type: 'dist'
    }
  ],
  extras: {
    cloneNodeFix: true
  }
};
