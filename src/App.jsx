import { Route, Routes } from 'react-router-dom';
import Components from './components';
import NoticesPage from './pages/NoticesPage/NoticesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MainPage from './pages/MainPage/MainPage';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegiserPage from './pages/RegiserPage/RegiserPage';
import UserPage from './pages/UserPage/UserPage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import NoticesCategoriesNav from './components/Notices/NoticesCategoriesNav';

// const test = import.meta.env.VITE_API_TEST;
const { SharedLayout, Svg } = Components;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />

          <Route path="register" element={<RegiserPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="user" element={<UserPage />} />

          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticesPage />}>
            {/* <Route path="/sell" element={<NoticesCategoriesNav />} />
            <Route path="/lost" element={<NoticesCategoriesNav />} />
            <Route path="/found" element={<NoticesCategoriesNav />} />
            <Route path="/in-good-hands" element={<NoticesCategoriesNav />} />
            <Route path="/favorite" element={<NoticesCategoriesNav />} />
            <Route path="/own" element={<NoticesCategoriesNav />} /> */}
          </Route>
          <Route path="add-pet" element={<AddPetPage />} />

          <Route path="friends" element={<OurFriendsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
