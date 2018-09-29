import { Events } from '@/api';
import { MUTATIONS, ACTIONS as t } from './types';

export default {
  [t.fetchEventList]({ commit }) {
    return Events.fetch()
      .then(data => commit(MUTATIONS.SET_EVENT_LIST, data));
  },

  [t.fetchEvent]({ commit }, id) {
    return Events.fetch(id)
      .then(data => commit(MUTATIONS.SET_CURRENT_EVENT, data));
  },
};
