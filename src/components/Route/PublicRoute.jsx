import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from '../../Redux/auth/auth-selectors';

export default function PublicRoute({ children, ...routeProps }) {
  const { restricted } = routeProps;
  const { token } = useSelector(selectAuth);
  return token && restricted ? <Navigate to="/user" /> : <>{children}</>;
}
