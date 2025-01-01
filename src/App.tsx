import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CV from './components/CV';

function App() {
  return (
    <Router basename="/Portfolio-2.0">
      <Routes>
        <Route path="/cv" element={<CV />} />
        <Route path="/" element={
          <div className="min-h-screen">
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;