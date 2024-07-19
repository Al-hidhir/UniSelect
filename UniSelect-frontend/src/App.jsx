import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/About/About';
import Contact from './pages/contact/Contact';
import Sign from './pages/sign/Sign';
import Registration from './pages/registration/regi';
import AdminDashboard from './pages/adminDashboard/admin';
import './App.css';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signIn" element={<Sign setToken={setToken} />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/admin" element={<AdminDashboard token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
