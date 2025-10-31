import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Portfolio from './component/Portfolio';
import About from './component/About';
import Contact from './component/contact';
import Footer from './component/Footer';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      
    </div>
  );
}

export default App;