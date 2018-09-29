/* eslint-disable no-param-reassign */
import { MUTATIONS as t } from '@/store/modules/api/types';

/**
 * Mutations
 */
export default {
  [t.SET_CURRENT_EVENT](state, value) {
    state.currentEvent = value || [];
  },

  [t.SET_EVENT_LIST](state, value) {
    state.events = value;
  },
};
