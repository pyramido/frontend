import Vue from 'vue';
import Vuex from 'vuex';
import getConfig from './config';

Vue.use(Vuex);

export default new Vuex.Store(getConfig());
