import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CountUpdater from './components/CountUpdater.vue';

Vue.config.productionTip = false;

Vue.component('CountUpdater', CountUpdater);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
