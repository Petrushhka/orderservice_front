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
import { CartContextProvider } from './context/CartContext';
import OrderPage from './components/OrderPage';
import MyPage from './components/Mypage';
import ProductCreate from './components/ProductCreate';
import AppRouter from './router/AppRouter';
const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <div className='App'>
          <Header />
          <div className='content-wrapper'>
            <AppRouter />
          </div>
          <Footer />
        </div>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
