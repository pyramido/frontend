import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue'
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
