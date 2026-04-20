import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-surface-container-lowest border-t border-surface-variant">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-bold tracking-[0.3em] uppercase text-on-surface font-headline">
          SAMSONITE
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-body text-xs tracking-wider leading-relaxed text-on-surface-variant">
          <a className="hover:text-primary transition-colors duration-200" href="#">Sustainability</a>
          <a className="hover:text-primary transition-colors duration-200" href="#">Warranty</a>
          <a className="hover:text-primary transition-colors duration-200" href="#">Global Support</a>
          <a className="hover:text-primary transition-colors duration-200" href="#">Privacy Policy</a>
        </div>
        <div className="font-body text-xs tracking-wider leading-relaxed text-on-surface-variant/70">
          © 2026 Samsonite Cinematic Engineering. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
