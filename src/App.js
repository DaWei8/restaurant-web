import React from 'react';
import NavBar from './NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import ProductsPage from './ProductsPage/ProductsPage';
import HomePage from './HomePage/HomePage';
import ContactPage from './ContactPage/ContactPage';
import './NavBar/NavBar.css';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
