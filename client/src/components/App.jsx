import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Activities from './routes/Activities.jsx';
import Profile from './routes/Profile.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import Challenges from './routes/Challenges.jsx';
import SingleChallenge from './routes/SingleChallenge.jsx';
import TestBadge from './threejs/TestBadge.js';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    let token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }

    return () => logout();
  }, []);

  const logout = e => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      window.location.href = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Router>
      <NavBar logout={logout}/>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Activities /> : <Login setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path='/profile' element={isAuthenticated ? <Profile /> : <Login setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path='/challenges' element={isAuthenticated ? <Challenges /> : <Login setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path='/singlechallenge' element={isAuthenticated ? <SingleChallenge /> : <Login setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path='/test' element={isAuthenticated ? <TestBadge /> : <Login setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path='/register' element={<Register setIsAuthenticated={setIsAuthenticated}/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;