import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Em 2 semanas minha pele ficou outra! Nunca imaginei que fosse possível.",
    author: "Paula S., 33 anos",
    stars: 5
  },
  {
    quote: "Minha pele nunca esteve tão macia e uniforme! Recomendo para todas as amigas.",
    author: "Fernanda M., 41 anos",
    stars: 5
  },
  {
    quote: "Os poros diminuíram visivelmente e as linhas finas ao redor dos olhos sumiram!",
    author: "Carolina P., 29 anos",
    stars: 5
  },
  {
    quote: "Finalmente um produto que cumpre o que promete! Minha pele está radiante.",
    author: "Beatriz L., 38 anos",
    stars: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if(interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-black to-black/95">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg text-center gold-text mb-12">
          Histórias Reais de Transformação
        </h2>
        
        <div 
          className="relative overflow-hidden" 
          aria-live="polite"
          aria-atomic="true"
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-full px-4"
                aria-hidden={currentIndex !== index}
              >
                <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-xl p-8 md:p-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl italic mb-6 text-gray-100 max-w-prose mx-auto">"{testimonial.quote}"</p>
                  
                  <p className="text-gold font-semibold">— {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 
            text-gold rounded-full p-1 md:p-2 transition-all duration-300"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 
            text-gold rounded-full p-1 md:p-2 transition-all duration-300"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              aria-label={`Ver depoimento ${index + 1}`}
              aria-current={currentIndex === index}
              className={`w-3 h-3 rounded-full transition-all duration-300 
              ${currentIndex === index ? 'bg-gold' : 'bg-gold/30 hover:bg-gold/50'}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToOffer}
            className="btn-gold"
          >
            Quero Resultados Como Esses
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
