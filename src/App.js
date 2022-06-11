import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/products" element={<Products />}/>
          <Route exact path="/services" element={<Services />}/>
          <Route exact path="/sign-up" element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
