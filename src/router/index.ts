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
      name: Routes.FAVOURITE_ARTISTS,
      component: () => import('../views/favourite_artists/FavouriteArtists.vue'),
    },
    {
      path: '/artists/:id',
      name: Routes.ARTIST_DETAILS,
      props: true,
      component: () => import('../views/artist_details/ArtistDetails.vue'),
    },
    {
      path: '/events',
      name: Routes.FAVOURITE_EVENTS,
      component: () => import('../views/favourite_events/FavouriteEvents.vue'),
    },
  ],
});
