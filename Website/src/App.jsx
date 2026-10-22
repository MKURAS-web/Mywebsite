import React from 'react';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import AppCard from './components/card';
import AppCard1 from './components/card1';
import backgroundImage from './assets/back.jpg';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="hero">
      <img src={backgroundImage} alt="background" className="image" />
      <div className="hero-text">
        <h1>Welcome to our website</h1>
        <p>We create amazing digital experiences.</p>
      </div>
      <div className="hero-buttons">
        <button className="hero-button">Get Started</button>
        <button className="hero-button">Learn More</button>
        </div>
      </div>

      <div className="card-container">
      <AppCard />
      <AppCard1 />
      </div>
      <div className="head">
        <h1>Hello World!</h1>
      </div>
      <Footer />
    </div>

  );
}



export default App;