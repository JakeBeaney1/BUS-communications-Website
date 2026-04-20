import React from 'react';

const OurProduct = () => {
  return (
    <section id="product" className="relative w-full overflow-hidden bg-surface-container-low pt-32 pb-24 px-6 md:px-12">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        {/* Header Section */}
        <header className="mb-24 relative z-10 max-w-4xl">
          <p className="font-label text-primary tracking-[0.2em] uppercase text-sm mb-4 font-bold flex items-center gap-3">
            <span className="w-8 h-[1px] bg-primary"></span>
            Company Overview
          </p>
          <h2 className="font-headline text-5xl md:text-7xl font-light tracking-[0.1em] leading-tight text-on-surface">
            ABOUT US:<br/>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">THE FUTURE OF LUGGAGE</span>
          </h2>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
          
          {/* Column 1: History (Spans 4 columns) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-panel liquid-glass rounded-xl p-8 h-full flex flex-col justify-between shadow-[0_20px_60px_rgba(241,201,125,0.06)] relative overflow-hidden group min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-lowest/80 pointer-events-none z-0"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYSEFwGY3SKJ--Rxd9UysCy72nHNEof6NTLLWjWKVdDaUKgRtdMQXIiFs4SHvL5RothewHvwH0tFieoIpL9AbVc_mCMtMHAzZH8-TSP4lr7voC_S41svGas0pKBt_HOqfoIZg_s92ftAFyjUxiFbZ2L6c9ka7RcQx47WjETth-FyHArdrIA_rX-CPQZOWPHytumN9VH_kznIVLcY3xO3fd1jTDbKdDmWeGfyTls5t8lwVtpfxOEOwUc2tu-A5QLzcw-HJz3miAFj8" 
                alt="Vintage Samsonite history" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-700 z-0" 
              />
              <div className="relative z-10">
                <h3 className="font-headline text-2xl uppercase tracking-widest text-on-surface mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history</span>
                  FOUNDED IN 1910
                </h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                  For over a century, we have engineered travel solutions that withstand the test of time and terrain. From early wooden trunks to aerospace-grade polycarbonate, our lineage is defined by relentless innovation and uncompromising structural integrity.
                </p>
              </div>
              <div className="relative z-10 mt-12 pt-6 border-t border-outline-variant/30">
                <div className="font-headline text-5xl font-light text-primary tracking-tight mb-2">114</div>
                <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold">Years in Business</div>
              </div>
            </div>
          </div>

          {/* Column 2: What We Built (Spans 5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="glass-panel liquid-glass rounded-xl p-8 h-full shadow-[0_20px_60px_rgba(241,201,125,0.06)] relative overflow-hidden">
              <h3 className="font-headline text-2xl uppercase tracking-widest text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">architecture</span>
                WHAT WE BUILT
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm mb-8">
                The Freeform series represents a paradigm shift in luggage architecture. By utilizing an advanced injection-molding process, we achieved unprecedented strength-to-weight ratios, eliminating unnecessary bulk while maximizing interior capacity.
              </p>
              
              {/* Diagram Placeholder */}
              <div className="w-full aspect-[4/3] bg-surface-container-lowest rounded-lg border border-outline-variant/20 relative overflow-hidden group">
                {/* Abstract Technical Lines */}
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(241,201,125,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(241,201,125,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="material-symbols-outlined text-4xl text-outline-variant mb-3 group-hover:text-primary transition-colors duration-500 font-light">view_in_ar</span>
                  <span className="font-label text-xs uppercase tracking-widest text-outline-variant">Freeform Structural Analysis</span>
                </div>
                {/* Technical callouts */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-label text-[10px] text-primary uppercase tracking-widest">Polycarbonate Shell</span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Stress Distribution</span>
                  <div className="w-8 h-[1px] bg-on-surface-variant/50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: The Problem (Spans 3 columns) */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {/* Top Card: Problem Description */}
            <div className="glass-panel liquid-glass rounded-xl p-6 shadow-[0_20px_60px_rgba(241,201,125,0.06)] bg-surface-container-high/40 shrink-0 relative overflow-hidden">
              <h3 className="font-headline text-lg uppercase tracking-widest text-error mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-error text-xl">warning</span>
                THE PROBLEM
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                Modern travelers are forced into a compromise: sacrifice essentials or pay exorbitant overweight baggage fees. Traditional luggage design wastes critical cubic inches on inefficient structural supports and bulky wheel housings.
              </p>
            </div>
            
            {/* Bottom Card: Statistic */}
            <div className="glass-panel liquid-glass rounded-xl p-6 shadow-[0_20px_60px_rgba(241,201,125,0.06)] flex-grow flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-br from-surface-container-high to-surface-container-low min-h-[250px]">
              {/* Subtle radial gradient behind stat */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(241,201,125,0.05)_0%,transparent_70%)]"></div>
              <div className="relative z-10 w-full">
                <div className="font-headline text-7xl font-light text-on-surface mb-2 tracking-tighter">
                  2 <span className="text-3xl text-outline-variant font-body mx-1">in</span> 3
                </div>
                <div className="w-12 h-[1px] bg-primary/50 mx-auto mb-4"></div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant leading-loose">
                  Travelers admit to leaving essential items behind due to <span className="text-primary font-bold">space constraints</span>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurProduct;
