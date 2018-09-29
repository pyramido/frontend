import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import bModal from 'bootstrap-vue/es/components/modal/modal';
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';
import './assets/scss/app.scss';
import App from './App';
import router from './router';
import store from './store';

import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// Components
Vue.component('b-modal', bModal);
Vue.directive('b-modal', bModalDirective);
const filter = function filtrer(text, length, pClamp) {
  const clamp = pClamp || '...';
  const node = document.createElement('div');
  node.innerHTML = text;
  const content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
