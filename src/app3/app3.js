import Vue from 'vue/dist/vue.min.js';
import singleSpaVue from 'single-spa-vue';
import Root from './root.component';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: domElementGetter(),
    template: '<div id="app3"><root></root></div>',
    components: {
      root: Root,
    },
  },
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];


function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app3');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app3';
    document.body.appendChild(el);
  }

  return el;
}