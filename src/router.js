import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ViewCompany from './views/ViewCompany.vue';
import EditCompany from './views/EditCompany.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/view/:id',
      name: 'view',
      component: ViewCompany,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditCompany,
    },
  ],
});
