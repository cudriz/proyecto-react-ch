import './App.css'; 
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { DarkModeProvider } from '../Context/DarkModeContext';
import  {Navbar} from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
import { getProductos } from '../utils/firebase';
import { CarritoProvider } from '../Context/CarritoContext';

export const App = () => {
  getProductos()
  return (
    <>
      <BrowserRouter>
      <DarkModeProvider>
      <CarritoProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>   
        <ToastContainer/>
        </CarritoProvider>
        </DarkModeProvider>
      </BrowserRouter>  
    </>
  )
}