import { GETTERS as t } from './types';

export default {
  [t.eventList]: ({ events }) => events.data.data || [],
  [t.currentEvent]: ({ currentEvent }) => (currentEvent || {}),
};
