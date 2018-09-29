import api from './modules/api';

/**
 * Store configuration are generated from a function to ease testing.
 * @param {Object} options which will override the default configurations.
 * @return {Object} a Vuex store configuration
 */
export default function getConfig(options) {
  return {
    modules: { api },
    strict: process.env.NODE_ENV !== 'production',

    ...options,
  };
}
