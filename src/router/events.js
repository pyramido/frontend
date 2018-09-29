import Vue from 'vue';
import Router from 'vue-router';
import EventListing from '@/views/events/EventListing';
import EventPage from '@/views/events/EventPage';
import CreateEvent from '@/views/events/CreateEvent';

Vue.use(Router);

export default {
  path: '/events',
  component: {
    render: h => h('router-view'),
  },
  children: [
    {
      path: '',
      name: 'events',
      component: EventListing,
    },
    {
      path: 'create',
      name: 'event-create',
      component: CreateEvent,
    },
    {
      path: ':id',
      name: 'event-page',
      component: EventPage,
    },
  ],
};
