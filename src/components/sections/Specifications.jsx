import React, { useState } from 'react';

const Specifications = () => {
  const [largeColor, setLargeColor] = useState('black');
  const [carryColor, setCarryColor] = useState('grey');

  const largeImageBaseUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr0C-SZKA8vd9u9L8-1zxK0jG3KX0CGXZRKQdH0z9WsfMVpVO_htAGPWCGfenTpIaJ77jEUvq4leSJDnMGimrN0xEeP2prkalLmLPghMLoOW5lJP9hMB5K3WopgBl8tiMn4VciViIQjNLITA3owWM6-V-f1KIRkhSFoWSjBG77yjQuS4JAeeqPIUcz_ShxwOZAuDp3IZLvYTmxCSpUOyxBELnv0952T3r1lUDYjZS4fK8gkCgIQcmcTdCs-2W3sB5My3MhEw4nfYQ';
  const carryImageBaseUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAosQAzSAkNz3kFmh00GFVTzNYdroJRTdFcS45vECjE2PTL_pf8chYO4l_Pnxd44EYtqhzJcQn7ozrtHEPuxyWAly0EBIy18qEkBLzB0JDB_0IkdgQetxNxEnB2WHfhNLEwr9EJ1HkNKJLXlIo73lv88PURme3tcqyHmOOqe-xgF1Llfch27WEOFGuyOTs5jnENenDJ2CeJ3ecclUeacnsGzOt87PtHRWv_PiQ_hgpUBgJklcVYgV293tz-Ko4GIYQyCPtC_xvqpSk';

  const getFilter = (color) => {
    switch(color) {
      case 'navy': return 'sepia(100%) hue-rotate(185deg) saturate(300%) brightness(0.9) contrast(1.1)';
      case 'blackout': return 'brightness(0.6) contrast(1.3) grayscale(100%)';
      case 'black': 
      default: return 'brightness(0.75) contrast(1.15) grayscale(80%)';
    }
  };

  return (
    <section id="specifications" className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto w-full relative z-10">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      {/* Header Section */}
      <div className="relative z-10 mb-20 text-center md:text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-8">
          <h2 className="font-headline text-5xl md:text-7xl font-light tracking-[0.15em] uppercase text-on-surface mb-4 leading-tight">
            Technical <br/>
            <span className="text-primary font-medium italic pr-4">Specifications</span>
          </h2>
          <p className="font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">
            Engineered precision for the modern traveler. Compare our flagship configurations designed for structural integrity and maximum spatial efficiency.
          </p>
        </div>
      </div>

      {/* Specifications Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Large Check-In Card */}
        <div className="group relative rounded-xl bg-surface-container-low border border-outline-variant/15 hover:border-outline-variant/40 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-[0_0_60px_rgba(241,201,125,0.04)]">
          {/* Product Image Area */}
          <div className="h-80 w-full relative bg-surface-container-lowest overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low z-10"></div>
            <img 
              src={largeImageBaseUrl} 
              alt="Large Check-In Suitcase" 
              style={{ 
                filter: getFilter(largeColor),
                WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 60%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 60%, transparent 100%)'
              }}
              className="h-full object-contain relative z-0 transition-all duration-700 group-hover:scale-105 opacity-90" 
            />
            <div className="absolute top-6 left-6 z-20">
              <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-primary border border-primary/30 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-md">Flagship</span>
            </div>
          </div>
          {/* Data Section */}
          <div className="p-10 flex-grow flex flex-col">
            <h3 className="font-headline text-3xl font-medium uppercase tracking-[0.1em] text-on-surface mb-8 pb-6 border-b border-surface-variant">
              Large Check-In
            </h3>
            <div className="space-y-8 flex-grow">
              {/* Dimensions */}
              <div>
                <h4 className="font-label text-xs uppercase tracking-[0.15em] text-primary mb-3">Dimensions</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-body text-2xl font-light text-on-surface">31.1<span className="text-sm text-on-surface-variant ml-1">in</span></p>
                    <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">Height</p>
                  </div>
                  <div>
                    <p className="font-body text-2xl font-light text-on-surface">20.9<span className="text-sm text-on-surface-variant ml-1">in</span></p>
                    <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">Width</p>
                  </div>
                  <div>
                    <p className="font-body text-2xl font-light text-on-surface">13.8<span className="text-sm text-on-surface-variant ml-1">in</span></p>
                    <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">Depth</p>
                  </div>
                </div>
              </div>
              {/* Volume & Weight */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-label text-xs uppercase tracking-[0.15em] text-primary mb-3">Volume</h4>
                  <p className="font-body text-3xl font-light text-on-surface">115<span className="text-lg text-on-surface-variant ml-1">L</span></p>
                </div>
                <div>
                  <h4 className="font-label text-xs uppercase tracking-[0.15em] text-primary mb-3">Weight</h4>
                  <p className="font-body text-3xl font-light text-on-surface">9.6<span className="text-lg text-on-surface-variant ml-1">lbs</span></p>
                </div>
              </div>
              {/* Materials & Colors */}
              <div>
                <h4 className="font-label text-xs uppercase tracking-[0.15em] text-primary mb-3">Material Matrix</h4>
                <p className="font-body text-sm text-on-surface-variant mb-4">Aerospace-grade polycarbonate composite shell with anodized aluminum corner guards.</p>
                <h4 className="font-label text-[10px] uppercase tracking-[0.15em] text-primary mb-3">Finishes</h4>
                <div className="flex gap-4">
                  <button onClick={() => setLargeColor('black')} aria-label="Black" className={`w-8 h-8 rounded-full bg-[#2A2A2A] border-2 shadow-inner transition-colors ${largeColor === 'black' ? 'border-primary outline outline-1 outline-offset-2 outline-primary' : 'border-transparent hover:border-surface-variant'}`}></button>
                  <button onClick={() => setLargeColor('blackout')} aria-label="Blackout" className={`w-8 h-8 rounded-full bg-[#111111] border-2 shadow-inner transition-colors ${largeColor === 'blackout' ? 'border-primary outline outline-1 outline-offset-2 outline-primary' : 'border-transparent hover:border-surface-variant'}`}></button>
                  <button onClick={() => setLargeColor('navy')} aria-label="Navy" className={`w-8 h-8 rounded-full bg-[#1A2639] border-2 shadow-inner transition-colors ${largeColor === 'navy' ? 'border-primary outline outline-1 outline-offset-2 outline-primary' : 'border-transparent hover:border-surface-variant'}`}></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carry-On Card */}
        <div className="group relative rounded-xl bg-surface-container-low border border-outline-variant/15 hover:border-outline-variant/40 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-[0_0_60px_rgba(241,201,125,0.04)] mt-0 lg:mt-12">
          {/* Product Image Area */}
          <div className="h-80 w-full relative bg-surface-container-lowest overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low z-10"></div>
            <img 
              src={carryImageBaseUrl} 
              alt="Carry-On Suitcase" 
              style={{ 
                filter: getFilter(carryColor),
                WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 60%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 60%, transparent 100%)'
              }}
              className="h-full object-contain relative z-0 transition-all duration-700 group-hover:scale-105 opacity-90" 
            />
            <div className="absolute top-6 left-6 z-20">
              <span className="font-headline text-[10px] tracking-[0.2em] uppercase text-on-surface border border-outline-variant/50 px-3 py-1 rounded-full bg-surface-variant/30 backdrop-blur-md">Agile</span>
            </div>
          </div>
          {/* Data Section */}
          <div className="p-10 flex-grow flex flex-col">
            <h3 className="font-headline text-3xl font-medium uppercase tracking-[0.1em] text-on-surface mb-8 pb-6 border-b border-surface-variant">
              Carry-On
            </h3>
            <div className="space-y-8 flex-grow">
              {/* Dimensions */}
              <div>
                <h4 className="font-label text-xs uppercase tracking-[0.15em] text-primary mb-3">Dimensions</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-body text-2xl font-light text-on-surface">23.0<span className="text-sm text-on-surface-variant ml-1">in</span></p>
                    <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">Height</p>
                  </div>
                  <div>
                    <p className="font-body text-2xl font-light text-on-surface">15.0<span className="text-sm text-on-surface-variant ml-1">in</span></p>
                    <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">Width</p>
                  </div>
                  <div>
                    <p className="font-body text-2xl font-light text-on-surface">10.0<span className="text-sm text-on-surface-variant ml-1">in</span></p>
                    <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">Depth</p>
                  </div>
                </div>
              </div>
              {/* Volume & Weight */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-label text-xs uppercase tracking-[0.15em] text-primary mb-3">Volume</h4>
                  <p className="font-body text-3xl font-light text-on-surface">42<span className="text-lg text-on-surface-variant ml-1">L</span></p>
                </div>
                <div>
                  <h4 className="font-label text-xs uppercase tracking-[0.15em] text-primary mb-3">Weight</h4>
                  <p className="font-body text-3xl font-light text-on-surface">6.5<span className="text-lg text-on-surface-variant ml-1">lbs</span></p>
                </div>
              </div>
              {/* Materials & Colors */}
              <div>
                <h4 className="font-label text-xs uppercase tracking-[0.15em] text-primary mb-3">Material Matrix</h4>
                <p className="font-body text-sm text-on-surface-variant mb-4">Ultra-lightweight Makrolon® polycarbonate with integrated USB charging port hub.</p>
                <h4 className="font-label text-[10px] uppercase tracking-[0.15em] text-primary mb-3">Finishes</h4>
                <div className="flex gap-4">
                  <button onClick={() => setCarryColor('black')} aria-label="Black" className={`w-8 h-8 rounded-full bg-[#2A2A2A] border-2 shadow-inner transition-colors ${carryColor === 'black' ? 'border-primary outline outline-1 outline-offset-2 outline-primary' : 'border-transparent hover:border-surface-variant'}`}></button>
                  <button onClick={() => setCarryColor('blackout')} aria-label="Blackout" className={`w-8 h-8 rounded-full bg-[#111111] border-2 shadow-inner transition-colors ${carryColor === 'blackout' ? 'border-primary outline outline-1 outline-offset-2 outline-primary' : 'border-transparent hover:border-surface-variant'}`}></button>
                  <button onClick={() => setCarryColor('navy')} aria-label="Navy" className={`w-8 h-8 rounded-full bg-[#1A2639] border-2 shadow-inner transition-colors ${carryColor === 'navy' ? 'border-primary outline outline-1 outline-offset-2 outline-primary' : 'border-transparent hover:border-surface-variant'}`}></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Features List (Bento-ish) */}
      <div className="mt-32 border-t border-surface-container-low pt-24">
        <h3 className="font-headline text-2xl font-light uppercase tracking-[0.2em] text-on-surface text-center mb-16">Universal Hardware Specs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {/* Key Feature */}
          <div className="bg-surface-container-low p-10 flex flex-col items-center text-center col-span-1 border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5"></div>
            <span className="material-symbols-outlined text-4xl text-primary mb-6 relative z-10">compress</span>
            <h4 className="font-headline text-sm uppercase tracking-widest text-on-surface mb-3 relative z-10">Integrated Vacuum Compression</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed relative z-10">Built-in vacuum compression on both sides. Comes with handheld vacuum compressor — "Compact. Powerful. Travel-Ready."</p>
          </div>
          {/* Spec Item 1 */}
          <div className="bg-surface-container-low p-10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">lock</span>
            <h4 className="font-headline text-sm uppercase tracking-widest text-on-surface mb-3">TSA Integrated Lock</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Flush-mounted combination lock engineered for seamless security profile.</p>
          </div>
          {/* Spec Item 2 */}
          <div className="bg-surface-container-low p-10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">radio_button_unchecked</span>
            <h4 className="font-headline text-sm uppercase tracking-widest text-on-surface mb-3">Aero-Trac™ Suspension</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Shock-absorbing dual spinner wheels designed for zero-friction movement.</p>
          </div>
          {/* Spec Item 3 */}
          <div className="bg-surface-container-low p-10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">layers</span>
            <h4 className="font-headline text-sm uppercase tracking-widest text-on-surface mb-3">Multi-Stage Handle</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Ergonomic pull handle with rigid aluminum tubing for dynamic stability.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
