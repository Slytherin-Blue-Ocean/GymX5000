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
import PrivateRoute from './routes/Private.jsx';
import { AuthProvider } from './context/Auth.jsx';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          } />
          <Route path='/profile' element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }/>
          <Route path='/challenges' element={
            <PrivateRoute>
              <Challenges />
            </PrivateRoute>
          }/>
          <Route path='/singlechallenge' element={
            <PrivateRoute>
              <SingleChallenge />
            </PrivateRoute>
          }/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;