import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PasswordReset from './components/PasswordReset';
import PasswordResetPage from './components/PasswordResetPage';
import Footer from './components/Footer';

function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/subscribe" element={<Subscribe  />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<PasswordReset />} />
        <Route path="/passwordreset" element={<PasswordResetPage />} />
        <Route path="/passwordresetpage" element={<PasswordResetPage />} />
</Routes>
      <Footer />
    </Router>
  );
}

export default App;
