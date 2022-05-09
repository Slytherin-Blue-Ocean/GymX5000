import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Home from './routes/Home.jsx';
import Profile from './routes/Profile.jsx';
import Login from './routes/Login.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;