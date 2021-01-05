import React from 'react';
import '../../css/App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import About from '../About'

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Cards/>
    </>
  )
}

export default Home
