import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="w-full bg-[#ff5722] text-white text-center py-2 px-4 fixed top-0 left-0 z-50 shadow-md font-semibold cursor-pointer hover:bg-[#e64a19] transition-colors">
      <a href="#offer" className="inline-block">
        ⚡ Promoção Imperdível: Sérum de Niacinamida com 20% OFF! Clique e aproveite!
      </a>
    </div>
  );
};

export default TopBanner;
