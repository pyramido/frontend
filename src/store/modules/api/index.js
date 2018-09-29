import { exportModule } from '@/store/utils';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import {
  NAMESPACE, GETTERS, ACTIONS, helpers,
} from './types';

export {
  NAMESPACE,
  GETTERS,
  ACTIONS,
  helpers,
};

/**
 * Manages the content received from our API.
 */
export default exportModule(NAMESPACE, {
  namespaced: true,
  state: () => ({
    currentEvent: null,
    events: {
      data: [],
    },
  }),
  getters,
  mutations,
  actions,
});
