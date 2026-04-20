import React from 'react';

const Strategies = () => {
  return (
    <section id="strategies" className="w-full">
      {/* Marketing Approach Section */}
      <div className="w-full py-24 bg-surface-container-low px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto z-10 relative">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-[1px] bg-primary"></div>
            <h2 className="font-headline text-3xl font-semibold tracking-widest uppercase text-on-surface">Marketing Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Decorator Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/30 hidden md:block z-0"></div>
            
            {/* Pillar 1 */}
            <div className="glass-panel liquid-glass rounded-lg p-8 relative z-10 flex flex-col gap-6 min-h-[300px]">
              <div className="flex justify-between items-start">
                <span className="font-headline text-5xl font-bold text-surface-container-lowest drop-shadow-[-1px_-1px_0_#f1c97d]">01</span>
                <span className="material-symbols-outlined text-primary text-3xl">language</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold uppercase tracking-wider mb-3 text-on-surface">Digital Campaign</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  High-fidelity visual assets deployed across premium digital networks. Focusing on the technical superiority and aesthetic precision of the Kinetic line.
                </p>
              </div>
              <ul className="mt-4 space-y-2 font-label text-xs text-on-surface-variant/80">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> SEO Optimization</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Targeted Paid Media</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Interactive Web GL</li>
              </ul>
            </div>
            
            {/* Pillar 2 */}
            <div className="glass-panel liquid-glass rounded-lg p-8 relative z-10 flex flex-col gap-6 transform md:translate-y-12 min-h-[300px]">
              <div className="flex justify-between items-start">
                <span className="font-headline text-5xl font-bold text-surface-container-lowest drop-shadow-[-1px_-1px_0_#f1c97d]">02</span>
                <span className="material-symbols-outlined text-primary text-3xl">redeem</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold uppercase tracking-wider mb-3 text-on-surface">Influencer PR Boxes</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Bespoke, engineering-grade unboxing experiences sent to key cultural architects. Designed to showcase the structural integrity firsthand.
                </p>
              </div>
              <ul className="mt-4 space-y-2 font-label text-xs text-on-surface-variant/80">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Tier 1 Tech Reviewers</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Premium Travel Creators</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Custom Hardware Latches</li>
              </ul>
            </div>
            
            {/* Pillar 3 */}
            <div className="glass-panel liquid-glass rounded-lg p-8 relative z-10 flex flex-col gap-6 min-h-[300px]">
              <div className="flex justify-between items-start">
                <span className="font-headline text-5xl font-bold text-surface-container-lowest drop-shadow-[-1px_-1px_0_#f1c97d]">03</span>
                <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold uppercase tracking-wider mb-3 text-on-surface">Retail Activation</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Immersive physical installations in flagship locations. Merging digital configuration with tactile material exploration.
                </p>
              </div>
              <ul className="mt-4 space-y-2 font-label text-xs text-on-surface-variant/80">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Kinetic Displays</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Material Touchpoints</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Configurator Kiosks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Sales Funnel Section */}
      <div className="w-full py-24 bg-surface px-6 md:px-12 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-primary/5 blur-[120px] z-0 rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <p className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Conversion Architecture</p>
            <h3 className="font-headline text-4xl font-bold tracking-widest uppercase text-on-surface">Customer Sales Funnel</h3>
          </div>
          
          <div className="flex flex-col items-center w-full relative">
            {/* Vertical Flow Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 -translate-x-1/2 z-0"></div>
            
            {/* Funnel Stages */}
            <div className="w-full space-y-12 z-10">
              
              {/* Stage 1: Awareness */}
              <div className="flex items-center justify-between w-full group">
                <div className="w-5/12 text-right pr-4 md:pr-8">
                  <h4 className="font-headline text-xl font-semibold uppercase tracking-wider text-on-surface group-hover:text-primary transition-colors">Awareness</h4>
                  <p className="font-body text-sm text-on-surface-variant mt-2 hidden sm:block">Initial exposure via targeted digital media and architectural PR unboxings.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container-high border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(241,201,125,0.4)] z-10 relative">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div className="w-5/12 pl-4 md:pl-8 opacity-50 font-label text-xs uppercase tracking-widest text-primary-fixed-dim">Top of Funnel</div>
              </div>
              
              {/* Stage 2: Consideration */}
              <div className="flex items-center justify-between w-full group">
                <div className="w-5/12 text-right pr-4 md:pr-8 opacity-50 font-label text-xs uppercase tracking-widest text-primary-fixed-dim">Mid Funnel</div>
                <div className="w-12 h-12 rounded-full bg-surface-container-high border-2 border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors z-10 relative">
                  <div className="w-3 h-3 bg-primary/50 group-hover:bg-primary rounded-full transition-colors"></div>
                </div>
                <div className="w-5/12 pl-4 md:pl-8">
                  <h4 className="font-headline text-xl font-semibold uppercase tracking-wider text-on-surface group-hover:text-primary transition-colors">Consideration</h4>
                  <p className="font-body text-sm text-on-surface-variant mt-2 hidden sm:block">Exploration of technical specs via interactive WebGL configurator.</p>
                </div>
              </div>
              
              {/* Stage 3: Conversion */}
              <div className="flex items-center justify-between w-full group">
                <div className="w-5/12 text-right pr-4 md:pr-8">
                  <h4 className="font-headline text-xl font-semibold uppercase tracking-wider text-on-surface group-hover:text-primary transition-colors">Conversion</h4>
                  <p className="font-body text-sm text-on-surface-variant mt-2 hidden sm:block">Seamless transaction flow prioritizing material choices and customization.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-surface-container-high border-2 border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors z-10 relative">
                  <div className="w-3 h-3 bg-primary/50 group-hover:bg-primary rounded-full transition-colors"></div>
                </div>
                <div className="w-5/12 pl-4 md:pl-8 opacity-50 font-label text-xs uppercase tracking-widest text-primary-fixed-dim">Bottom of Funnel</div>
              </div>
              
              {/* Stage 4: Post-Purchase */}
              <div className="flex items-center justify-between w-full group">
                <div className="w-5/12 text-right pr-4 md:pr-8 opacity-50 font-label text-xs uppercase tracking-widest text-primary-fixed-dim">Retention</div>
                <div className="w-12 h-12 rounded-full bg-surface-container-high border-2 border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors z-10 relative">
                  <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                </div>
                <div className="w-5/12 pl-4 md:pl-8">
                  <h4 className="font-headline text-xl font-semibold uppercase tracking-wider text-on-surface group-hover:text-primary transition-colors">Post-Purchase</h4>
                  <p className="font-body text-sm text-on-surface-variant mt-2 hidden sm:block">Warranty activation, maintenance protocols, and exclusive access.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
