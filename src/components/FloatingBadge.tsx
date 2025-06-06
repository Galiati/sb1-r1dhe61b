import React, { useState, useEffect } from 'react';
import { TruckIcon, ShieldCheck } from 'lucide-react';

const FloatingBadge: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show badge after scrolling down 300px
      if (window.scrollY > 300 && !isVisible) {
        setIsVisible(true);
      } else if (window.scrollY <= 300 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);
  
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-500 ease-in-out 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
    >
      <div className="bg-black/90 backdrop-blur-sm border border-gold/30 rounded-full py-2 px-4 shadow-lg 
      flex items-center gap-3 hover:border-gold/50 transition-colors">
        <div className="flex items-center">
          <TruckIcon className="h-4 w-4 text-gold mr-1" />
          <span className="text-gold text-xs md:text-sm whitespace-nowrap">Frete Grátis</span>
        </div>
        
        <div className="h-4 w-px bg-gold/30"></div>
        
        <div className="flex items-center">
          <ShieldCheck className="h-4 w-4 text-gold mr-1" />
          <span className="text-gold text-xs md:text-sm whitespace-nowrap">Garantia de 30 dias</span>
        </div>
        
        <button 
          onClick={scrollToOffer}
          className="ml-2 bg-gold/20 hover:bg-gold/30 text-gold text-xs font-bold py-1 px-3 rounded-full 
          transition-colors whitespace-nowrap"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default FloatingBadge;