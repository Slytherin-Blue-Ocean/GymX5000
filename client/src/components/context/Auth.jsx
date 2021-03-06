import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');

  const checkIfToken = () =>{
    const curToken = localStorage.getItem('token');
    if (curToken) {
      setIsAuth(true);
      setToken(curToken);
    }
  };

  const login = curToken => {
    setToken(curToken);
    localStorage.setItem('token', curToken);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    setToken('');
  };

  useEffect(()=>{
    checkIfToken();
  }, []);

  const value = {
    isAuth,
    token,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>{
  return useContext(AuthContext);
};