import { MUTATIONS, ACTIONS as t } from '@/store/modules/api/types';
import { Events } from '@/api';

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
