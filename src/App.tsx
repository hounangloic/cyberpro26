import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import PackForm from "./components/PackForm";

import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import LoadingAnimation from './components/LoadingAnimation'; 
import Introduction from './components/Introduction';
import Expertise from './components/Expertise';
import Specialisation from './components/Specialisation';
import Tarifs from './components/Tarifs';
import FAQSection from './components/FAQSection';
import Realisations from './components/Realisations';
import About from './components/About';
import Testimonials from './components/Testimonials';
import MyGoogleMap from './components/MyGoogleMap';

function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
       {/* <Routes>
      
      <Route path="/pack-form/:packId" element={<PackForm />} />

    </Routes> */}

      <CssBaseline />
      <ScrollToTopButton />

      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          
          <Introduction />
          <Expertise />
          <About />
          
          <Specialisation />
          <FAQSection />
          <Realisations />
          <Tarifs />

          <Testimonials />
          <MyGoogleMap/>
          <Contact />
          <div style={{ marginBottom: '60px' }} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
