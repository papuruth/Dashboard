import Auth from '@/components/Auth/index';
import Dashboard from '@/components/Dashboard/index';

const routes = [
  {
    key: 'DashboardComponent',
    path: '/',
    exact: true,
    component: Dashboard,
  },
  {
    key: 'LoginComponent',
    path: '/login',
    exact: true,
    component: Auth,
  },
  {
    key: 'SignupComponent',
    path: '/register',
    exact: true,
    component: Auth,
  },
];

export default routes;
