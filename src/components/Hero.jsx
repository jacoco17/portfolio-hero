import React from 'react';
import './Hero.css';
import heroImage from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="info">
          <h1>I'm John Francis A. Rivero</h1>
          <h2>I code cool websites</h2>
          <p>
I am an IT student of Western Mindanao State University and I love coding and eating </p>
          <div className="buttons">
            <button className="btn-primary">My Portfolio</button>
            <button className="btn-secondary">Contact Me</button>
          </div>
        </div>
        <div className="socials">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
