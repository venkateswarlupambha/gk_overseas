import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import UniversityList from './components/UniversityList';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Countries />
              <Testimonials />
              <Contact />
              <FAQ />
            </>
          } />
          <Route path="/universities/:country" element={<UniversityList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;