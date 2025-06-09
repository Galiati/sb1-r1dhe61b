import React, { useEffect, useState } from 'react';
import { TruckIcon, LockIcon, Clock, ShieldCheck, CreditCard } from 'lucide-react';

const OfferSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>('00:00:00');

  useEffect(() => {
    const offerDeadline = new Date();
    offerDeadline.setHours(offerDeadline.getHours() + 24); // 24 horas a partir de agora

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = offerDeadline.getTime() - now;

      if (distance <= 0) {
        setTimeLeft('00:00:00');
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    };

    updateTimer(); // inicial
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="offer"
      className="section-padding bg-gradient-to-b from-black/95 to-black relative"
      style={{ scrollMarginTop: '64px' }} // <-- aqui ajusta a margem de scroll para o banner fixo
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-black/40 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 md:p-10 lg:p-12 overflow-hidden relative">
          
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/40 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/40 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-lg"></div>
          
          <h2 className="heading-lg text-center gold-shimmer mb-4">
            Oferta Especial e Exclusiva
          </h2>

          <p className="text-center text-gray-300 mb-2">
            Aproveite essa oportunidade por tempo limitado!
          </p>

          <p className="text-center text-gold text-sm mb-8 font-bold">
            Oferta expira em: <span className="font-mono">{timeLeft}</span>
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full flex items-center justify-center relative">
                  <div className="w-72 h-72 md:w-88 md:h-88 bg-gradient-to-tr from-gold/30 to-transparent rounded-full flex items-center justify-center"></div>
                  <img
                    src="https://i.imgur.com/nXwKXWm.png"
                    alt="Produto Sérum"
                    className="absolute inset-0 m-auto object-contain pointer-events-none w-[25rem] h-[25rem]"
                    style={{ zIndex: 10 }}
                  />
                </div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-black font-bold py-1 px-4 rounded-full text-sm whitespace-nowrap">
                  Sérum KiraNutri
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="gold-text">Sérum KiraNutri</span> — Niacinamida 10%
              </h3>
              
              <div className="mb-6">
                <span className="text-gray-400 line-through text-lg">De R$149,90</span>
                <div className="flex items-end gap-2">
                  <span className="text-3xl md:text-4xl font-bold gold-text">Por R$89,90</span>
                  <span className="bg-gold/20 text-gold text-xs font-bold py-1 px-2 rounded-md mb-1">
                    ECONOMIZE R$30,00
                  </span>
                </div>
                <span className="text-green-400 text-sm font-medium">23% de desconto</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-gold/10 p-1 rounded-full">
                    <ShieldCheck className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Sérum de Niacinamida 30ml</p>
                    <p className="text-sm text-gray-400">Fórmula exclusiva com concentração ideal</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-gold/10 p-1 rounded-full">
                    <TruckIcon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">Frete grátis para todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://seguro.kiranutri.com.br/r/HUB4DVME6E" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold text-lg py-4 px-8 md:px-12 shadow-xl hover:shadow-gold/40"
            >
              Quero minha pele impecável agora!
            </a>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center">
                <LockIcon className="h-4 w-4 text-gold mr-1" />
                <span className="text-sm text-gray-300">Pagamento Seguro</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gold mr-1" />
                <span className="text-sm text-gray-300">Envio em 24h</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-4 w-4 text-gold mr-1" />
                <span className="text-sm text-gray-300">30 Dias de Garantia</span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-3">
              <CreditCard className="h-6 w-6 text-gold" />
              <span className="text-sm text-gray-300">
                Em até 3x sem juros no cartão ou 10% de desconto no PIX
              </span>
            </div>
            
            <p className="text-xs text-gray-500 mt-6">
              *Resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
