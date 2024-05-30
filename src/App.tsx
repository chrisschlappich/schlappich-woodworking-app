import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header/>
      <div className="main-container">Main Container</div>
      <Footer/>
    </div>
  );
}

export default App;