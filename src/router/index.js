import Vue from 'vue';
import Router from 'vue-router';
import DashBoard from '@/components/dashBoard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DashBoard,
    },
  ],
});
