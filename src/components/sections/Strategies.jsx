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
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-primary"></div>
            <h2 className="font-headline text-4xl font-semibold tracking-widest uppercase text-on-surface">Marketing Approach</h2>
          </div>
          <p className="font-body text-on-surface-variant text-xl leading-relaxed mb-16 max-w-3xl">
            A multi-channel strategy combining data-driven digital advertising, elite influencer partnerships, immersive online experiences, and hands-on retail activations.
          </p>

          {/* PILLAR 1 — Digital Campaign */}
          <div className="mb-14">
            <div className="glass-panel liquid-glass rounded-xl p-12 relative z-10 flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <span className="font-headline text-7xl font-bold text-surface-container-lowest drop-shadow-[-1px_-1px_0_#f1c97d]">01</span>
                <span className="material-symbols-outlined text-primary text-5xl">language</span>
              </div>
              <div>
                <h3 className="font-headline text-3xl font-semibold uppercase tracking-wider mb-4 text-on-surface">Digital Campaign</h3>
                <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-4">
                  Re-hire <span className="text-primary font-semibold">Bench Media</span> (advertising agency) who partnered with <span className="text-primary font-semibold">Tourist Tracka</span> (data vendor) to develop a data-driven digital campaign targeting frequent travelers.
                </p>
                <a href="https://benchmedia.com/case-study/samsonite/" target="_blank" rel="noopener noreferrer" className="font-label text-sm uppercase tracking-widest text-primary/70 hover:text-primary transition-colors underline underline-offset-4">
                  Source: Bench Media × Samsonite Case Study →
                </a>
              </div>
              <ul className="mt-2 space-y-4 font-label text-lg text-on-surface-variant/90">
                <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-primary rounded-full"></div> Bench Media programmatic analytics</li>
                <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-primary rounded-full"></div> Tourist Tracka travel-intent data integration</li>
                <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-primary rounded-full"></div> Visual demo ads showcasing compression technology</li>
                <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-primary rounded-full"></div> GIF/video content showing before vs. after compression</li>
              </ul>
            </div>
          </div>

          {/* PILLAR 2 — Influencer PR Boxes */}
          <div className="mb-14">
            <div className="glass-panel liquid-glass rounded-xl p-12 relative z-10 flex flex-col gap-8">
              <div className="flex justify-between items-start">
                <span className="font-headline text-7xl font-bold text-surface-container-lowest drop-shadow-[-1px_-1px_0_#f1c97d]">02</span>
                <span className="material-symbols-outlined text-primary text-5xl">redeem</span>
              </div>
              <div>
                <h3 className="font-headline text-3xl font-semibold uppercase tracking-wider mb-4 text-on-surface">Influencer PR Boxes</h3>
                <p className="font-body text-xl text-on-surface-variant leading-relaxed">
                  Highly selective PR boxes sent to influencers with strong international presence. Each recipient receives an exclusive invitation to the <span className="text-primary font-semibold">Samsonite Freeform Compress Launch Party</span> — an all-expenses-covered long-weekend getaway to <span className="text-primary font-semibold">Nice, France</span>, including tickets to the Freeform Compress Fashion Show.
                </p>
              </div>

              {/* Fashion Show Image */}
              <div className="rounded-xl overflow-hidden border border-outline-variant/15 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                <img src="/images/fashion_show.png" alt="Freeform Compress Fashion Show — Models dragging rolling suitcases on runway" className="w-full h-auto object-contain" />
              </div>

              {/* Influencer Cards with Real Photos */}
              <div className="border-t border-outline-variant/20 pt-6 mt-2">
                <h4 className="font-label text-sm uppercase tracking-widest text-primary mb-6 font-bold">Selected Influencer Partners</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {/* Jeraldine */}
                  <div className="flex items-center gap-4 bg-surface-container-lowest/30 rounded-xl p-4 border border-outline-variant/10">
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary/40">
                      <img src="/images/influencer_jeraldine.png" alt="@jeraldinejeronimojorjette" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-on-surface font-semibold text-lg leading-tight">@jeraldinejeronimojorjette</p>
                      <p className="text-on-surface-variant text-base mt-1">Family life & travel</p>
                      <p className="text-primary/80 text-sm mt-1 font-medium">3.5M IG · 3.7M TikTok</p>
                    </div>
                  </div>
                  {/* Bucket List Family */}
                  <div className="flex items-center gap-4 bg-surface-container-lowest/30 rounded-xl p-4 border border-outline-variant/10">
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary/40">
                      <img src="/images/influencer_bucketlist.png" alt="@thebucketlistfamily" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-on-surface font-semibold text-lg leading-tight">@thebucketlistfamily</p>
                      <p className="text-on-surface-variant text-base mt-1">Family travel adventures</p>
                      <p className="text-primary/80 text-sm mt-1 font-medium">3.7M IG · 0.5M TikTok</p>
                    </div>
                  </div>
                  {/* Kara and Nate */}
                  <div className="flex items-center gap-4 bg-surface-container-lowest/30 rounded-xl p-4 border border-outline-variant/10">
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary/40">
                      <img src="/images/influencer_karaandnate.png" alt="@Kara and Nate" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-on-surface font-semibold text-lg leading-tight">@Kara and Nate</p>
                      <p className="text-on-surface-variant text-base mt-1">Couple travel content</p>
                      <p className="text-primary/80 text-sm mt-1 font-medium">1.2M IG · 0.3M TikTok · 4.43M YT</p>
                    </div>
                  </div>
                  {/* Ha Sisters */}
                  <div className="flex items-center gap-4 bg-surface-container-lowest/30 rounded-xl p-4 border border-outline-variant/10">
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary/40">
                      <img src="/images/influencer_hjevelyn.png" alt="@hjevelyn & the Ha Sisters" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-on-surface font-semibold text-lg leading-tight">@hjevelyn & the Ha Sisters</p>
                      <p className="text-on-surface-variant text-base mt-1">Lifestyle, GenZ, Asian American</p>
                      <p className="text-primary/80 text-sm mt-1 font-medium">2.3M IG · 4.4M TikTok · 4.96M YT</p>
                    </div>
                  </div>
                  {/* Casey Neistat */}
                  <div className="flex items-center gap-4 bg-surface-container-lowest/30 rounded-xl p-4 border border-outline-variant/10">
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary/40">
                      <img src="/images/influencer_casey.png" alt="@caseyneistat" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-on-surface font-semibold text-lg leading-tight">@caseyneistat</p>
                      <p className="text-on-surface-variant text-base mt-1">Product review content</p>
                      <p className="text-primary/80 text-sm mt-1 font-medium">2.8M IG · 12.7M YT</p>
                    </div>
                  </div>
                  {/* Drew Binsky */}
                  <div className="flex items-center gap-4 bg-surface-container-lowest/30 rounded-xl p-4 border border-outline-variant/10">
                    <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary/40">
                      <img src="/images/influencer_drew.png" alt="@Drew Binsky" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-on-surface font-semibold text-lg leading-tight">@Drew Binsky</p>
                      <p className="text-on-surface-variant text-base mt-1">Mass-market & international travel</p>
                      <p className="text-primary/80 text-sm mt-1 font-medium">1.4M IG · 0.8M TikTok · 6.86M YT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PILLAR 3 — Online & Retail Experience (combined) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-panel liquid-glass rounded-xl p-12 relative z-10 flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <span className="font-headline text-7xl font-bold text-surface-container-lowest drop-shadow-[-1px_-1px_0_#f1c97d]">03</span>
                <span className="material-symbols-outlined text-primary text-5xl">devices</span>
              </div>
              <div>
                <h3 className="font-headline text-3xl font-semibold uppercase tracking-wider mb-4 text-on-surface">Online & Retail Experience</h3>
                <p className="font-body text-xl text-on-surface-variant leading-relaxed">
                  A seamless omnichannel strategy — from interactive online demos to immersive in-store activations that let customers experience vacuum compression firsthand.
                </p>
              </div>
              <div>
                <h4 className="font-label text-sm uppercase tracking-widest text-primary mb-3 font-bold">Online</h4>
                <ul className="space-y-3 font-label text-lg text-on-surface-variant/90">
                  <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-primary rounded-full"></div> Product page with interactive compression demo</li>
                  <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-primary rounded-full"></div> GIF/video showing real-time compression</li>
                  <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-primary rounded-full"></div> Before vs. after visual comparisons</li>
                  <li className="flex items-center gap-3"><div className="w-2.5 h-2.5 bg-primary rounded-full"></div> Seamless DTC purchase flow via Samsonite.com</li>
                </ul>
              </div>
              <div className="border-t border-outline-variant/20 pt-4">
                <h4 className="font-label text-sm uppercase tracking-widest text-primary mb-3 font-bold">Retail</h4>
                <ul className="space-y-3 font-label text-lg text-on-surface-variant/90">
                  <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-1.5 bg-primary rounded-full shrink-0"></div> Display suitcase showing compressed vs. uncompressed contents</li>
                  <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-1.5 bg-primary rounded-full shrink-0"></div> In-store live compression demos</li>
                  <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-1.5 bg-primary rounded-full shrink-0"></div> Interactive displays (press button → see compression happen)</li>
                  <li className="flex items-start gap-3"><div className="w-2.5 h-2.5 mt-1.5 bg-primary rounded-full shrink-0"></div> Side-by-side comparison visualizers</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-outline-variant/15 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              <img src="/images/online_demo.png" alt="Online Interactive Demo" className="w-full h-full object-cover" />
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
