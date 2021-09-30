import React from 'react';
import Login from '@/components/Auth/Login/index';
import Signup from '@/components/Auth/Signup/index';
import Dashboard from '@/components/Dashboard/index';
import NotFound from '@/components/NotFound/index';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const routes = [
  <PrivateRoute key="DashboardComponent" path="/" exact component={Dashboard} />,
  <PublicRoute key="LoginComponent" path="/login" restricted exact component={Login} />,
  <PublicRoute key="SignupComponent" path="/register" restricted exact component={Signup} />,
  <PublicRoute key="NotFoundComponent" path="*" restricted={false} component={NotFound} />,
];

export default routes;
