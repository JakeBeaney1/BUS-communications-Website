import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FunnelNode = ({ title, subtitle, position, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30%" });

  return (
    <div ref={ref} className="flex items-center justify-between w-full group py-4 h-[150px]">
      {/* Left Column */}
      <div className="w-5/12 text-right pr-4 md:pr-8">
        {position === 'left' ? (
          <div>
            <motion.h4 
                animate={{ color: isInView ? '#c8a96e' : '#f5f5f5' }}
                transition={{ duration: 0.5 }}
                className="font-headline text-2xl font-semibold uppercase tracking-wider text-on-surface"
            >
              {title}
            </motion.h4>
            <motion.p 
                animate={{ color: isInView ? '#f5f5f5' : '#888888', opacity: isInView ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                className="font-body text-sm mt-3 hidden sm:block text-on-surface-variant leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>
        ) : (
          <motion.div 
              animate={{ opacity: isInView ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
              className="opacity-50 font-label text-[10px] uppercase tracking-widest text-primary font-bold"
          >
            Stage Detail
          </motion.div>
        )}
      </div>

      {/* Center Node */}
      <motion.div 
        animate={{ 
            borderColor: isInView ? 'rgba(200, 169, 110, 1)' : 'rgba(200, 169, 110, 0.2)',
            scale: isInView ? 1.2 : 1,
            boxShadow: isInView ? '0 0 25px rgba(200, 169, 110, 0.6)' : '0 0 0px rgba(0,0,0,0)'
        }}
        transition={{ duration: 0.5 }}
        className="w-14 h-14 shrink-0 rounded-full border-2 flex items-center justify-center z-10 relative bg-surface-container-high"
      >
        {icon ? (
          <motion.span 
              animate={{ color: isInView ? 'rgba(200, 169, 110, 1)' : 'rgba(200, 169, 110, 0.3)' }}
              className="material-symbols-outlined text-[20px] font-bold text-primary"
          >
              {icon}
          </motion.span>
        ) : (
          <motion.div 
              animate={{ backgroundColor: isInView ? 'rgba(200, 169, 110, 1)' : 'rgba(200, 169, 110, 0.3)' }}
              className="w-3.5 h-3.5 rounded-full bg-primary"
          ></motion.div>
        )}
      </motion.div>

      {/* Right Column */}
      <div className="w-5/12 pl-4 md:pl-8">
        {position === 'right' ? (
          <div>
            <motion.h4 
                animate={{ color: isInView ? '#c8a96e' : '#f5f5f5' }}
                transition={{ duration: 0.5 }}
                className="font-headline text-2xl font-semibold uppercase tracking-wider text-on-surface"
            >
              {title}
            </motion.h4>
            <motion.p 
                animate={{ color: isInView ? '#f5f5f5' : '#888888', opacity: isInView ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                className="font-body text-sm mt-3 hidden sm:block text-on-surface-variant leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>
        ) : (
          <motion.div 
              animate={{ opacity: isInView ? 1 : 0.3 }}
              transition={{ duration: 0.5 }}
              className="opacity-50 font-label text-[10px] uppercase tracking-widest text-primary font-bold"
          >
            Funnel Path
          </motion.div>
        )}
      </div>
    </div>
  );
};

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
            <div className="absolute top-[40%] left-0 w-full h-[1px] bg-outline-variant/30 hidden md:block z-0"></div>
            
            {/* Pillar 1 */}
            <div className="glass-panel liquid-glass rounded-lg p-8 relative z-10 flex flex-col gap-6 min-h-[300px]">
              <div className="flex justify-between items-start">
                <span className="font-headline text-5xl font-bold text-surface-container-lowest drop-shadow-[-1px_-1px_0_#f1c97d]">01</span>
                <span className="material-symbols-outlined text-primary text-3xl">language</span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold uppercase tracking-wider mb-3 text-on-surface">Digital Campaign</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Re-engage Bench Media + Tourist Tracka data partnership for programmatic video ads across digital channels.
                </p>
              </div>
              <ul className="mt-4 space-y-2 font-label text-xs text-on-surface-variant/80">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Bench Media Analytics</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Tourist Tracka Integration</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Programmatic Delivery</li>
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
                <p className="font-body text-[12px] text-on-surface-variant leading-relaxed mb-4">
                  All PR box recipients are invited to the Samsonite AirMax Launch Party — an all-expenses-covered long weekend in Nice, France, including tickets to the AirMax Fashion Show.
                </p>
              </div>
              <ul className="space-y-2 font-label text-[10px] text-on-surface-variant/full leading-tight flex-grow">
                <li className="flex items-start gap-2"><div className="w-1 h-1 mt-1 bg-primary rounded-full shrink-0"></div> @jeraldinejeronimojorjette (3.5M IG / 3.7M TT)</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 mt-1 bg-primary rounded-full shrink-0"></div> @thebucketlistfamily (3.7M IG / 0.5M TT)</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 mt-1 bg-primary rounded-full shrink-0"></div> @Kara and Nate (1.2M IG / 4.43M YT)</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 mt-1 bg-primary rounded-full shrink-0"></div> @hjevelyn & Ha Sisters (2.3M IG / 4.96M YT)</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 mt-1 bg-primary rounded-full shrink-0"></div> @caseyneistat (2.8M IG / 12.7M YT)</li>
                <li className="flex items-start gap-2"><div className="w-1 h-1 mt-1 bg-primary rounded-full shrink-0"></div> @Drew Binsky (1.4M IG / 6.86M YT)</li>
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
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full shrink-0"></div> In-store live compression demos</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full shrink-0"></div> Interactive displays (press → compress)</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full shrink-0"></div> Side-by-side compression visualizers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Sales Funnel Section */}
      <div className="w-full py-32 bg-surface px-6 md:px-12 relative overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-primary/5 blur-[120px] z-0 rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-24 flex flex-col items-center">
            <p className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4">Conversion Architecture</p>
            <h3 className="font-headline text-4xl font-bold tracking-widest uppercase text-on-surface">Customer Sales Funnel</h3>
          </div>
          
          <div className="flex flex-col items-center w-full relative">
            {/* Vertical Flow Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 -translate-x-1/2 z-0"></div>
            
            {/* Funnel Stages */}
            <div className="w-full z-10 relative">
              <FunnelNode position="left" title="Awareness" subtitle="Targeting via social media demo videos highlighting compression capabilities." />
              <FunnelNode position="right" title="Interest" subtitle="Converting ads into traffic via our immersive website and curated reviews." />
              <FunnelNode position="left" title="Consideration" subtitle="Side-by-side comparison matrix vs standard hard-shell luggage solutions." />
              <FunnelNode position="right" title="Purchase" subtitle="Seamless flow via online DTC at Samsonite.com or physical in-store units." />
              <FunnelNode position="left" icon="check" title="Post-Purchase" subtitle="Encouraging UGC content sharing and real-world travel experience features." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
