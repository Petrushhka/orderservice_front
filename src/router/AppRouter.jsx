import { Home } from '@mui/icons-material';
import React from 'react';
import MemberCreate from '../components/Membercreate';
import LoginPage from '../components/LoginPage';
import ProductList from '../components/ProductList';
import OrderPage from '../components/OrderPage';
import MyPage from '../components/Mypage';
import ProductCreate from '../components/ProductCreate';
import PrivateRouter from './PrivateRouter';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/member/create' element={<MemberCreate />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/product/list' element={<ProductList />} />
      <Route
        path='/order/cart'
        element={<PrivateRouter element={<OrderPage />} />}
      />
      <Route path='/mypage' element={<PrivateRouter element={<MyPage />} />} />
      <Route
        path='/product/manage'
        element={
          <PrivateRouter element={<ProductCreate />} requiredRole='ADMIN' />
        }
      />
    </Routes>
  );
};

export default AppRouter;
