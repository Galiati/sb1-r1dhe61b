import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import OfferSection from './components/OfferSection';
import Footer from './components/Footer';
import FloatingBadge from './components/FloatingBadge';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection />
      </main>
      <FloatingBadge />
      <Footer />
    </div>
  );
}

export default App;