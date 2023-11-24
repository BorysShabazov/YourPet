import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from '../../Redux/auth/auth-selectors';

export default function PublicRoute({ children, ...routeProps }) {
  const { restricted } = routeProps;
  const { token } = useSelector(selectAuth);
  if (token && restricted) {
    return (
      <Navigate to="/user" state={{ fromPage: window.location.pathname }} />
    );
  }

  return <>{children}</>;
}
