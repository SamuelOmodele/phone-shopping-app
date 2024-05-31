import React from 'react';
import './App.css';
import Navbar from './components/nav_bar/Navbar';
import WelcomePage from './components/welcomePage/WelcomePage';
import NewestProduct from './components/newest_product/NewestProduct';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Phones from './components/all_phones_/AllPhones';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Navbar section='home' />
            <WelcomePage />
            <NewestProduct />
            <Footer />
          </>
        } />
        <Route path='/phones' element={
          <>
            <Navbar section='phones' />
            <Phones />
          </>
        } />

      </Routes>

    </div>
  );
}

export default App;
