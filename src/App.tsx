import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'
import data from './inventory.json'

function App() {
  return (
    <div className="app-container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products products={data} />} />
        <Route path="/product/:sku_id" element={<ProductDetail products={data} />} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;