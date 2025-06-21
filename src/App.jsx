import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Internships from './pages/Internships';
import Jobs from './pages/Jobs';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AddNew from './pages/AddNew';
import Login from './pages/Login';
import Register from './pages/Register';

import { AuthProvider } from './auth/AuthContext'; // ✅ Add this line
import InternshipDetails from './pages/InternshipDetails';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/internships/:slug" element={<InternshipDetails />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
};

export default App;
