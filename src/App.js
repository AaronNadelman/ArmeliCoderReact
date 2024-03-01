
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import FinalizarCompra from "./components/FinalizarCompra/FinalizarCompra"

import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeteng={'Bienvenido!'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/FinalizarCompra' element={<FinalizarCompra />} />
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
