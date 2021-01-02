import React from 'react';
import { Button } from './Button';
import '../css/App.css';
import '../css/HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/images/japan-gates.JPG" alt="background" />
      <h1>Faheem Warsalee</h1>
      <p>Second Year Computer Science Student</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          {" "}
          About Me{" "}
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          {" "}
          Projects{" "}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection
