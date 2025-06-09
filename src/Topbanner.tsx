import React from 'react';

const TopBanner: React.FC = () => {
  const scrollToOffer = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="w-full bg-[#ff5722] text-white text-center py-2 px-4 fixed top-0 left-0 z-50 shadow-md font-semibold hover:bg-[#e64a19] transition-colors cursor-pointer"
      onClick={scrollToOffer}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') scrollToOffer(e);
      }}
      aria-label="Ir para seção de compra"
    >
      ⚡ Promoção Imperdível: Sérum de Niacinamida com 20% OFF! Clique e aproveite!
    </div>
  );
};

export default TopBanner;
