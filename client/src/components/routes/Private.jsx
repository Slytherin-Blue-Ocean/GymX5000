import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/Auth.jsx';

const PrivateRoute = ({children}) =>{
  const { isAuth, token} = useAuth();
  let location = useLocation();
  const curToken = localStorage.getItem('token');

  if (!curToken) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;