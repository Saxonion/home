import Vue from 'vue';
import Router from 'vue-router';
import DashBoard from '@/pages/dashBoard';
import EchartDemo from '@/components/echartDemo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DashBoard,
    },
    {
      path: '/a',
      component: EchartDemo,
    },
  ],
});
