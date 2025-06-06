import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8
      ${scrolled ? 'bg-black/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <ShoppingBag className="h-8 w-8 text-gold mr-2" />
          <span className="text-xl font-bold gold-gradient">KiraNutri</span>
        </div>
        
        <a 
          href="#offer" 
          className="text-sm md:text-base py-2 px-4 md:px-6 rounded-full bg-gold/10 border border-gold/30 
          text-gold hover:bg-gold/20 transition-all duration-300"
        >
          Comprar Agora
        </a>
      </div>
    </header>
  );
};

export default Header;