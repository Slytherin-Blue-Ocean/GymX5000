import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Auth.jsx';

const PrivateRoute = ({children}) =>{
  const auth = useAuth();
  console.log(auth);
  return isAuthenticated ? children : <Navigate to='/login' />;
};

export default PrivateRoute;