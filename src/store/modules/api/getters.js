import { GETTERS as t } from './types';

export default {
  [t.eventList]: ({ events }) => events,
  [t.currentEvent]: ({ currentEvent }) => currentEvent,
};
