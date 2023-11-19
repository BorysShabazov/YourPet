import { Route, Routes } from 'react-router-dom';
import Components from './components';
import PetCardList from './components/PetCard/PetCardList';

// const test = import.meta.env.VITE_API_TEST;
const { SharedLayout } = Components;

function App() {


  
  const petsData = [
    {
      image: "https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg",
      description: 'Сute dog looking for a home',
    },
    {
      image: "https://www.alouetteanimalhospital.ca/wp-content/uploads/sites/308/2022/06/pettips.jpg",
      description: 'Сute dog looking for a home',
    },
    {
      image: "https://static.toiimg.com/imagenext/toiblogs/photo/readersblog/wp-content/uploads/2021/12/adorable-cavalier-king-charles-spaniel-puppy-royalty-dog.jpg",
      description: 'Сute dog looking for a home',
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0090/3164/7287/files/Can-Dogs-Eat-Mango-HP-long_480x480.jpg?v=1649317684",
      description: 'Сute dog looking for a home',
    },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<PetCardList pets={petsData}/>}>
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
