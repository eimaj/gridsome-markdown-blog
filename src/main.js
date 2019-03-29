import DefaultLayout from '~/layouts/Default.vue';
import VueLocalStorage from 'vue-localstorage';
import HighlightDirective from './directives/highlight';

import './assets/styles/colors.scss';

export default function(Vue, { head }) {
  Vue.component('Layout', DefaultLayout);

  Vue.use(HighlightDirective);
  Vue.use(VueLocalStorage);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto+Mono',
  });
}
