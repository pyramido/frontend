import { createNamespacedHelpers } from 'vuex';
import { generateNamespaceType } from '@/store/utils';

export const NAMESPACE = 'api';

export const ACTIONS = {
  fetchEventList: 'fetchEventList',
  fetchEvent: 'fetchEvent',
};

export const GETTERS = {
  eventList: 'eventList',
  currentEvent: 'currentEvent',

};

export const MUTATIONS = {
  SET_CURRENT_EVENT: 'SET_CURRENT_EVENT',
  SET_EVENT_LIST: 'SET_EVENT_LIST',
};

export const getType = generateNamespaceType(NAMESPACE);

/**
 * @type {Object}
 * @property {Function} mapGetters
 * @property {Function} mapActions
 * @property {Function} mapMutations
 * @property {Function} mapState
 */
export const helpers = createNamespacedHelpers(NAMESPACE);
