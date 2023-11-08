import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';

type AppPrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function AppPrivateRoute({ authorizationStatus, children }: AppPrivateRouteProps): JSX.Element {
  return authorizationStatus === AuthorizationStatus.NoAuth ? <Navigate to={AppRoute.SignIn} /> : children;
}

export default AppPrivateRoute;
