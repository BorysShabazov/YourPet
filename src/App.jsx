import { Route, Routes } from 'react-router-dom';
import Components from './components';
import AddPetPage from './pages/AddPetPage/AddPetPage';

// const test = import.meta.env.VITE_API_TEST;
const { SharedLayout } = Components;

function App() {
  return (
    <>
      <AddPetPage />
      {/* <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<p>current page</p>} />
          <Route path="/second" element={<p>second page</p>}>
            <Route path=":half" element={<p>half</p>} />
          </Route>

          <Route path="*" element={<p>not found</p>} />
        </Route>
      </Routes> */}
    </>
  );
}
export default App;
