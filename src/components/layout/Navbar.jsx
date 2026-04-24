import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Product', id: 'product' },
    { name: 'Market', id: 'market' },
    { name: 'Financials', id: 'financials' },
    { name: 'Future', id: 'future' },
    { name: 'Team', id: 'team' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-2xl bg-gradient-to-b from-surface-dim/80 to-transparent shadow-[0_8px_32px_rgba(0,0,0,0.5)]" style={{ fontSize: '16px' }}>
      <div className="flex justify-between items-center px-12 py-6 w-full max-w-[1600px] mx-auto">
        <div 
            className="text-xl font-bold tracking-[0.3em] text-primary uppercase font-headline cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SAMSONITE
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-headline tracking-[0.15em] uppercase text-xs">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>
        
        <button className="bg-gradient-primary text-on-primary-fixed font-headline tracking-[0.1em] text-sm px-6 py-2 rounded-md hover:opacity-90 transition-opacity uppercase">
          Pre-order
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
