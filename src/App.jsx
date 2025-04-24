import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import MemberCreate from './components/Membercreate';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='content-wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/member/create' element={<MemberCreate />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
