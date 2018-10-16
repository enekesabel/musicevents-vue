// styles
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

// scripts
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// using full material bundle till ts type definitions arrive
import VueMaterial from 'vue-material';

Vue.config.productionTip = false;

// plugins
Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
