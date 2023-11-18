import { Route, Routes } from 'react-router-dom';
import Components from './components';
import RegisterForm from './components/RegisterForm/RegisterForm';
import NoticesPage from './pages/NoticesPage/NoticesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import NewsPage from './pages/NewsPage/NewsPage';
import MainPage from './pages/MainPage/MainPage';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';

// const test = import.meta.env.VITE_API_TEST;
const { SharedLayout, Svg } = Components;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout></SharedLayout>}>
          <Route path="/first" element={<p>current page</p>} />
          <Route path="/second" element={<p>second page</p>}>
            <Route path=":half" element={<p>half</p>} />
          </Route>

          <Route index element={<MainPage />} />
          {/* <Route path="/singin" element={<AuthForma />} />
    <Route path="/singup" element={<AuthForma isLogIn={false} />} /> */}
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
