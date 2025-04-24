import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import MemberCreate from './components/Membercreate';
import LoginPage from './components/LoginPage';
import { AuthContextProvider } from './context/Usercontext';
import './App.css';
import ProductList from './components/ProductList';
const App = () => {
  return (
    <AuthContextProvider>
      <div className='App'>
        <Header />
        <div className='content-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/member/create' element={<MemberCreate />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/product/list' element={<ProductList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthContextProvider>
  );
};

export default App;
