import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
import MainPage from './pages/MainPage/MainPage';
import PublicRoute from './components/Route/PublicRoute';

const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const OurFriendsPage = lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage'),
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegiserPage = lazy(() => import('./pages/RegiserPage/RegiserPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage'));
const PrivateRoute = lazy(() => import('./components/Route/PrivateRoute'));

import { useDispatch, useSelector } from 'react-redux';
import { getRefresh } from './Redux/auth/auth-selectors';
import { useEffect } from 'react';
import { currentUser } from './Redux/auth/auth-operations';
import Loader from './components/Loader/Loader';

// import PrivateRoute from './components/PrivateRoute/privateRoute';
// import NoticesCategoriesNav from './components/Notices/NoticesCategoriesNav';
// import { selectAuth } from './Redux/auth/auth-selectors';
// const test = import.meta.env.VITE_API_TEST;

// const { token } = useSelector(selectAuth);
// const navigate = useNavigate();
// const onLogin = () => navigate('/login');

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(getRefresh);

  // handle refresh page
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegiserPage />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            index
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="user"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices/:categoryName" element={<NoticesPage />} />

          <Route
            path="add-pet"
            element={
              // <PrivateRoute>
              <AddPetPage />
              // </PrivateRoute>
            }
          />

          <Route path="friends" element={<OurFriendsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
