import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div
      className="w-full bg-[#ff5722] text-white text-center fixed top-0 left-0 z-50 shadow-md font-semibold cursor-pointer transition-colors
                 py-1 px-4 md:py-2 md:px-6 hover:bg-[#e64a19]"
    >
      <a
        href="#comprar"
        className="inline-block text-xs md:text-sm lg:text-base leading-tight"
        aria-label="Promoção Sérum de Niacinamida com 20% OFF"
      >
        ⚡ Promoção Imperdível: Sérum de Niacinamida com 20% OFF! Clique e aproveite!
      </a>
    </div>
  );
};

export default TopBanner;
