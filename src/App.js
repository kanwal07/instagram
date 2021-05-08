import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/notfound'));
const Dashboard = lazy(() => import('./pages/dashboard'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
