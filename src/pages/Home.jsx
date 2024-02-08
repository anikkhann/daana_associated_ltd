import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import OurServices from '../components/OurServices';
const Home = () => {



  return (
    <>
      <div className="w-full overflow-hidden">
        <Header />
        <Navbar  />
        <About />
        <OurServices/>
        {/* Add your other components here */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
