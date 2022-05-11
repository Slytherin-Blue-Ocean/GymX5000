import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/Auth.jsx';

const PrivateRoute = ({children}) =>{
  const { isAuth } = useAuth();
  let location = useLocation();
  console.log(isAuth);
  return isAuth ? children : <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;