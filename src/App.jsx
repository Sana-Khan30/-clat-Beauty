// App.jsx
import React, { useState } from 'react';
import { Sparkles } from "lucide-react";
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';
import Makeup from './components/Makeup.jsx';
import Hair from './components/Hair.jsx';
import Skincare from './components/Skincare.jsx';
import Brides from './components/Brides.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-black text-gray-100">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero />
      <Services />
      <Makeup />
      <Hair />
      <Skincare />
      <Brides />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
