import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectAuth } from '../../Redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
  const { token } = useSelector(selectAuth);

  return token ? children : <Navigate to="/login" />;
}
