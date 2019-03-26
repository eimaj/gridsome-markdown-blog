import DefaultLayout from '~/layouts/Default.vue';
import Highlight from 'vue-markdown-highlight';
import VueLocalStorage from 'vue-localstorage';

import 'highlight.js/styles/atom-one-dark.css';
import './assets/styles/colors.scss';

export default function(Vue, config) {
  Vue.component('Layout', DefaultLayout);

  Vue.use(Highlight);
  Vue.use(VueLocalStorage);

  console.log('config', config);

  config.head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto+Mono',
  });
}
