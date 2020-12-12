import React from 'react';
import About from './dependencies/About';
import Hero from './dependencies/Hero';

export default function LandingPage() {
  return(
    <React.Fragment>
      <About />
      <Hero />
    </React.Fragment>
  );
}