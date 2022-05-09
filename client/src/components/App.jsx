import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Home from './routes/Home.jsx';
import Profile from './routes/Profile.jsx';
import Login from './routes/Login.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    let token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Router>
      <NavBar logout={logout}/>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <Login setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path='/profile' element={isAuthenticated ? <Profile /> : <Login setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;