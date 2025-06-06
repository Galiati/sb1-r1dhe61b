import React from 'react';
import { Sparkles, Droplets, MinusCircle, Shield, Gauge, Layers as LayersLinked } from 'lucide-react';

const benefitsData = [
  {
    icon: <Sparkles className="h-10 w-10 text-gold mb-4" />,
    title: "Reduz linhas finas e sinais da idade",
    description: "Restauração natural da elasticidade e firmeza da pele."
  },
  {
    icon: <MinusCircle className="h-10 w-10 text-gold mb-4" />,
    title: "Uniformiza a textura e o tom da pele",
    description: "Tratamento eficaz contra manchas e descolorações."
  },
  {
    icon: <LayersLinked className="h-10 w-10 text-gold mb-4" />,
    title: "Minimiza poros visíveis",
    description: "Refinamento da textura para uma pele mais lisa e uniforme."
  },
  {
    icon: <Droplets className="h-10 w-10 text-gold mb-4" />,
    title: "Hidratação profunda e duradoura",
    description: "Fórmula que retém a umidade por até 72 horas."
  },
  {
    icon: <Shield className="h-10 w-10 text-gold mb-4" />,
    title: "Proteção contra agressões externas",
    description: "Barreira eficaz contra poluição e radicais livres."
  },
  {
    icon: <Gauge className="h-10 w-10 text-gold mb-4" />,
    title: "Fortalecimento natural da barreira cutânea",
    description: "Recuperação da função protetora natural da pele."
  }
];

const BenefitsSection: React.FC = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="section-padding bg-black relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-lg text-center gold-text mb-12">
          Benefícios Transformadores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gold/10 rounded-xl p-6 
              hover:border-gold/30 transition-all duration-300 hover:transform hover:translate-y-[-4px]
              hover:shadow-gold/10 shadow-lg"
            >
              {benefit.icon}
              <h3 className="text-lg font-bold text-gold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToOffer}
            className="btn-gold"
          >
            Quero Esses Benefícios
          </button>
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/0 pointer-events-none"></div>
    </section>
  );
};

export default BenefitsSection;