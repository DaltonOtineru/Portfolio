import React from 'react';
import Navigation from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
