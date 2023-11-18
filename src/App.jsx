import { Route, Routes } from 'react-router-dom';
import Components from './components';
import RegisterForm from './components/RegisterForm/RegisterForm';

// const test = import.meta.env.VITE_API_TEST;
const { SharedLayout } = Components;

function App() {
  return (
    <>
      <Routes>
        <Route path="/reg" element={<RegisterForm />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<p>current page</p>} />
          <Route path="/second" element={<p>second page</p>}>
            <Route path=":half" element={<p>half</p>} />
          </Route>

          <Route path="*" element={<p>not found</p>} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
