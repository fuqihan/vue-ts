import Vue from 'vue';
import VueRouter from 'vue-router';
import { makeHot, reload } from './util/hot-reload';
import { createRouter } from './router';
import store from './store';
import * as Element from 'element-ui';

const app = () => import('./page/app').then(({ AppComponent }) => AppComponent);

import './sass/main.scss';


import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);

new Vue({
  el: '#app-main',
  router: createRouter(),
  store,
  render: h => h(app)
});
