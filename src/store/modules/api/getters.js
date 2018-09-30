import { GETTERS as t } from './types';

export default {
  [t.eventList]: ({ events }) => events.data || [],
  [t.currentEvent]: ({ currentEvent }) => ((currentEvent && currentEvent.data) || {}),
};
