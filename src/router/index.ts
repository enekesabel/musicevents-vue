import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home/Home.vue';
import {Routes} from './routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: Routes.HOME,
      component: Home,
    },
    {
      path: '/artists',
      name: Routes.ARTIST_LIST,
      component: () => import('../views/artist_list/ArtistList.vue'),
    },
    {
      path: '/artists/:id',
      name: Routes.ARTIST_DETAILS,
      component: () => import('../views/artist_details/ArtistDetails.vue'),
    },
    {
      path: '/events',
      name: Routes.EVENT_LIST,
      component: () => import('../views/event_list/EventList.vue'),
    },
  ],
});
