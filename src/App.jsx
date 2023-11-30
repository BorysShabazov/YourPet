import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';

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

import { currentUser, logout } from './Redux/auth/auth-operations';
import PrivateRoute from './components/Route/PrivateRoute';
import setUpInterceptor from './helpers/axiosInterceptor';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setUpInterceptor(dispatch, logout);
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
              <PrivateRoute>
                <AddPetPage />
              </PrivateRoute>
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
