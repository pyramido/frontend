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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
