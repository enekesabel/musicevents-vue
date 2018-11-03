// styles
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
// scripts
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import Vuex from 'vuex';
import axios from 'axios';
import {
  DummyArtistApi,
  DummyEventApi,
  IArtistApi,
  IEventApi,
  RemoteArtistApi,
  RemoteEventApi,
} from '@s0me1/musicevents-core';
import {createStore} from '@/store/createStore';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

const FontAwesomeIcon = require('@fortawesome/vue-fontawesome').FontAwesomeIcon;
// tslint:disable-next-line
const VueMaterial = require('vue-material').default;

Vue.config.productionTip = false;

// plugins
Vue.use(VueMaterial); // using full material bundle till ts type definitions arrive
Vue.use(Vuex);

// font-awesome icons
library.add(faFacebookF);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// setting up api and store
const axiosInstance = axios.create();
const artistApi: IArtistApi = new DummyArtistApi(window.localStorage, new RemoteArtistApi(axiosInstance));
const eventApi: IEventApi = new DummyEventApi(window.localStorage, new RemoteEventApi(axiosInstance));
const store = createStore(artistApi, eventApi);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
