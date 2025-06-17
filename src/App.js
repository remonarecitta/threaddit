import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import women from './Components/Assets/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg'
import men from './Components/Assets/portrait-tourist-takesoff-sunglasses-saying-wow-staring-impressed-camera-checking-out-cool.jpg'
import accessories from './Components/Assets/others.png'
import SignUp from './Pages/SignUp';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner ={men} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner ={women}  category="women"/>}/>
        <Route path='/accessories' element={<ShopCategory banner={accessories} category="accessories"/>}/>
        <Route path='/product/:productId' element ={<Product/>} >
        </Route>
         <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
