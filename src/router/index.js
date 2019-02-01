import Vue from 'vue';
import Router from 'vue-router';
import DashBoard from '@/pages/dashBoard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DashBoard,
    },
  ],
});
