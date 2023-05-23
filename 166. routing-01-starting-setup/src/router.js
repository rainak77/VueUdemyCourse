import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    // { path: '/teams', component: TeamsList,alias:'/' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('User beforeEnter');
        next();
      },
    },
    // { path: '/teams/:teamId', component: TeamMembers, props: true },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedposition) {
    if (savedposition) {
      return savedposition;
    }
    return { top: 0, left: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');

  if (to.meta.needsAuth) {
    console.log('needs auth');
    next();
  } else {
    next();
  }
});
router.afterEach(function (to,from) {
    //sending analytics data
    console.log_('global aftereach');
    console.log(to,from);
});

export default router;