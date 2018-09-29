import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import About from './views/About';
import EventListing from './views/events/EventListing';
import EventPage from './views/events/EventPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/events',
      name: 'events',
      component: EventListing,
      children: [
        {
          path: ':id',
          name: 'event-page',
          component: EventPage,
        },
      ],
    },
  ],
});
