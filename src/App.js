import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Favorite from './components/Favorite';
import Product from './components/Product';
import Backet from './components/Basket';

function App() {
  return (
    <div className="">
   <Header/>
   <Routes>
    <Route path='/' element={ <Menu/> }/>
    <Route path='/favorite' element={ <Favorite/> }/>
    <Route path='/product' element={ <Product/> }/>
    <Route path='/backet' element={ <Backet/> }/>
   </Routes>
    </div>
  );
}

export default App;
