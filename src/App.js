import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import ContactPage from './components/ContactPage/ContactPage';
import NavBar from './components/ui/NavBar';
import Footer from './components/ui/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/homepage' element={<Homepage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
