import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#ff5722] text-white text-center py-2 md:py-3 px-4 fixed top-0 left-0 z-50 shadow-md font-semibold transition-colors">
      <a
        href="#offer"
        className="block text-xs sm:text-sm md:text-base hover:underline"
      >
        ⚡ Promoção Imperdível: Sérum de Niacinamida com 20% OFF! Clique e aproveite!
      </a>
    </div>
  );
};

export default TopBanner;
