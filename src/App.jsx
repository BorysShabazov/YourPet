import { Route, Routes } from 'react-router-dom';
import Components from './components';

import PetCardList from './components/PetCard/PetCardList';
import RegisterForm from './components/AuthForm/AuthForm';

import NoticesPage from './pages/NoticesPage/NoticesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MainPage from './pages/MainPage/MainPage';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegiserPage from './pages/RegiserPage/RegiserPage';
import UserPage from './pages/UserPage/UserPage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import PublicRoute from './components/Route/PublicRoute';
import PrivateRoute from './components/Route/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getRefresh } from './Redux/auth/auth-selectors';
import { useEffect } from 'react';
import { currentUser } from './Redux/auth/auth-operations';

// import PrivateRoute from './components/PrivateRoute/privateRoute';
// import NoticesCategoriesNav from './components/Notices/NoticesCategoriesNav';
// import { selectAuth } from './Redux/auth/auth-selectors';
// const test = import.meta.env.VITE_API_TEST;
const { SharedLayout } = Components;

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
          {/* <Route path="/notices/sell" element={<NoticesCategoriesNav />} />
            <Route path="/notices/lost" element={<NoticesCategoriesNav />} />
            <Route path="/notices/found" element={<NoticesCategoriesNav />} />

            <Route
              path="/notices/in-good-hands"
              element={<NoticesCategoriesNav />}
            />
            <Route
              path="/notices/favorite"
              element={<NoticesCategoriesNav />}
            />
            <Route path="/notices/own" element={<NoticesCategoriesNav />} /> */}

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
