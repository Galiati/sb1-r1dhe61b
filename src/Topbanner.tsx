import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-black bg-opacity-90 text-white flex items-center justify-center z-50 px-4">
      <a
        href="#offer"
        className="gold-text font-semibold cursor-pointer hover:underline"
      >
        Aproveite a oferta exclusiva e compre agora!
      </a>
    </div>
  );
};

export default TopBanner;
