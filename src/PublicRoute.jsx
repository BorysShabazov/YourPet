import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from './Redux/auth/auth-selectors';

export default function PublicRoute({ children, ...routeProps }) {
  const { restricted } = routeProps;
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn && restricted ? <Navigate to="/user" /> : <>{children}</>;
}
