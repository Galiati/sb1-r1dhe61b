import React from 'react';
import { ArrowDown, Check } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="gold-shimmer heading-xl mb-6 md:mb-8">
          O Segredo Revelado: Sua Pele Impecável Está a um Passo... e Você Ainda Não Sabia!
        </h1>
        
        <p className="body-text text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10">
          Um ritual simples, mas poderoso: descubra como recuperar a firmeza, a hidratação e o viço natural da sua pele — tudo em poucos dias!
        </p>
        
        <button 
          onClick={scrollToBenefits}
          className="btn-gold mb-10 md:mb-12 group"
        >
          Descubra o Segredo
          <ArrowDown className="inline-block ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </button>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base">
          <div className="flex items-center">
            <Check className="h-4 w-4 text-gold mr-1" />
            <span className="text-gray-300">Resultados em apenas 14 dias</span>
          </div>
          <div className="flex items-center">
            <Check className="h-4 w-4 text-gold mr-1" />
            <span className="text-gray-300">Satisfação garantida</span>
          </div>
          <div className="flex items-center">
            <Check className="h-4 w-4 text-gold mr-1" />
            <span className="text-gray-300">Frete grátis</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;