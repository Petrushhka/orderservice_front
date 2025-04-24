import React from 'react';
import Header from './components/Header';
import { Routes } from 'react-router-dom';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='content-wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
