import { Route, Routes } from 'react-router-dom';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<p>layout</p>}>
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
