import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full bg-[#ff5722] text-white text-center py-1 px-4 z-50 font-semibold cursor-pointer hover:bg-[#e64a19] transition-colors"
      style={{ height: '40px' }}
    >
      <a href="#offer" className="inline-block leading-[40px]">
        ⚡ Promoção Imperdível: Sérum de Niacinamida com 20% OFF! Clique e aproveite!
      </a>
    </div>
  );
};

export default TopBanner;
