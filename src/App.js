
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeteng={'Bienvenido!'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>

    </>
  );
}

export default App;
