import React from 'react'
import ProductDetailPage from '../page/ProductDetailPage';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({authenticate}) => {
  return authenticate === true ? <ProductDetailPage /> : <Navigate to="/login"/>
}

export default PrivateRoute;
