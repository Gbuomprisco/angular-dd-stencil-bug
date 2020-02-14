import { defineCustomElements, applyPolyfills } from './loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
