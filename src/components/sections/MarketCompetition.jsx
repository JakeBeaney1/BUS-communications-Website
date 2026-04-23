import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const animateCount = (element, endValue, duration, prefix = '', suffix = '') => {
  let startTimestamp = null;
  const isFloat = endValue % 1 !== 0;
  
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    const easeOut = 1 - Math.pow(1 - progress, 4);
    
    const currentValue = (easeOut * endValue).toFixed(isFloat ? 1 : 0);
    element.innerText = `${prefix}${currentValue}${suffix}`;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.innerText = `${prefix}${endValue.toFixed(isFloat ? 1 : 0)}${suffix}`;
    }
  };
  window.requestAnimationFrame(step);
};

const AnimatedStat = ({ end, duration = 2500, prefix = '', suffix = '', title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView && ref.current && !ref.current.hasAnimated) {
      animateCount(ref.current, end, duration, prefix, suffix);
      ref.current.hasAnimated = true;
    }
  }, [isInView, end, duration, prefix, suffix]);

  return (
    <div className="glass-panel liquid-glass rounded-xl p-6 border border-outline-variant/15 flex flex-col justify-center text-center group hover:border-primary/50 transition-colors h-full">
      <div className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight drop-shadow-[0_0_15px_rgba(241,201,125,0.2)]">
        <span ref={ref}>{prefix}0{suffix}</span>
      </div>
      <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant/90 leading-relaxed font-bold mb-2">
        {title}
      </div>
      {description && (
        <div className="font-body text-xs text-on-surface-variant/70 leading-relaxed mt-2">
          {description}
        </div>
      )}
    </div>
  );
};

const competitors = [
  { brand: 'Away', price: '$295 - $395', weakness: 'Standard DTC shell, zero volume flexibility' },
  { brand: 'Monos', price: '$245 - $345', weakness: 'Aesthetic focus over technical utility' },
  { brand: 'Travelpro', price: '$180 - $350', weakness: 'Heavy nylon construct, outdated aesthetics' },
  { brand: 'Rimowa', price: '$900 - $1500+', weakness: 'Prohibitive cost, easily dented aluminum' },
  { brand: 'Delsey', price: '$150 - $300', weakness: 'Weak zipper integration, poor security' }
];

const ProblemCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }} 
    className="bg-surface-container-low p-8 rounded-xl border border-error/20 hover:border-error/50 transition-colors flex flex-col gap-4 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-error/10"></div>
    <span className="material-symbols-outlined text-4xl text-error mb-2 relative z-10">{icon}</span>
    <h4 className="font-headline text-xl text-on-surface uppercase tracking-wider relative z-10">{title}</h4>
    {description && <p className="font-body text-on-surface-variant text-sm leading-relaxed relative z-10">{description}</p>}
  </motion.div>
);

const SolutionCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }} 
    className="bg-surface-container-low p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors flex flex-col gap-4 relative overflow-hidden group h-full"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-primary/10"></div>
    <span className="material-symbols-outlined text-4xl text-primary mb-2 relative z-10">{icon}</span>
    <h4 className="font-headline text-xl text-on-surface uppercase tracking-wider relative z-10">{title}</h4>
    {description && <p className="font-body text-on-surface-variant text-sm leading-relaxed relative z-10">{description}</p>}
  </motion.div>
);

const MarketCompetition = () => {
  return (
    <section id="market" className="flex-grow flex flex-col relative w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 gap-24">
      {/* Header Section */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-4 text-primary font-label text-sm uppercase tracking-widest">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Category Overview</span>
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-[0.15em] text-on-surface uppercase leading-tight">
          MARKET &amp;<br />COMPETITION
        </h2>
        <p className="font-body text-on-surface-variant text-lg leading-relaxed mt-4">
          Defining a new category. While traditional luggage focuses on volume, Freeform targets the premium intersection of aerospace engineering and mobile architecture.
        </p>
      </div>

      {/* Market Size & Growth */}
      <div>
        <h3 className="font-headline text-2xl font-light uppercase tracking-[0.2em] mb-8 text-on-surface flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">trending_up</span>
          Market Size &amp; Growth
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
          <div className="xl:col-span-4">
             <ul className="space-y-4 font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> Global luggage market: $43B (2026), projected $60B+ by 2031</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> Smart luggage sub-segment: $4B today, projected $11B+ by 2033</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> Smart luggage growing at ~13% CAGR - double the broader market rate</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> Travel luggage bags account for 76.5% of total industry revenue</li>
             </ul>
          </div>
          <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AnimatedStat 
              end={43} prefix="$" suffix="B" 
              title="Global Luggage Market" 
            />
            <AnimatedStat 
              end={4} prefix="$" suffix="B" 
              title="Smart Luggage Segment" 
            />
            <AnimatedStat 
              end={13} suffix="%" 
              title="Smart Luggage CAGR" 
            />
            <AnimatedStat 
              end={76.5} suffix="%" 
              title="Travel Bags Share" 
            />
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div>
        <h3 className="font-headline text-2xl font-light uppercase tracking-[0.2em] mb-8 text-error flex items-center gap-4">
          <span className="material-symbols-outlined">warning</span>
          The Problem In This Growing Market
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
           <div className="xl:col-span-4">
             <ul className="space-y-4 font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-error rounded-full shrink-0"></div> Checked bag fees and overweight charges are massive and rising each year</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-error rounded-full shrink-0"></div> U.S. airlines collected $7.27B in baggage fees in 2024</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-error rounded-full shrink-0"></div> Current solutions (rolling, packing cubes, external vacuum bags) are inconvenient workarounds</li>
             </ul>
          </div>
          <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ProblemCard 
              icon="payments"
              title="Massive Fees"
            />
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-panel liquid-glass p-8 rounded-xl border border-error/30 flex flex-col justify-center text-center group h-full relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-error/5 to-transparent"></div>
               <div className="relative z-10">
                  <div className="font-headline text-5xl md:text-6xl font-bold text-error mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(244,67,54,0.3)]">
                    $7.27B
                  </div>
                  <div className="font-label text-sm uppercase tracking-widest text-on-surface-variant leading-relaxed">
                    Baggage Fees (2024)
                  </div>
               </div>
            </motion.div>
            <ProblemCard 
              icon="work_history"
              title="Inconvenient Workarounds"
            />
          </div>
        </div>
      </div>

      {/* The Solution */}
      <div>
        <h3 className="font-headline text-2xl font-light uppercase tracking-[0.2em] mb-8 text-primary flex items-center gap-4">
          <span className="material-symbols-outlined">verified</span>
          The Freeform Solution
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Eliminating the second bag */}
          <div className="flex flex-col gap-6">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-label text-xs uppercase tracking-widest rounded-full w-max mb-2">
              Eliminating the Second Bag
            </div>
            <ul className="space-y-4 font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-2">
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> Most people check a second bag because they run out of room, not because their stuff is too heavy</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> Freeform compresses clothing so everything fits in one suitcase</li>
            </ul>
            <div className="grid sm:grid-cols-2 gap-6">
              <SolutionCard 
                icon="luggage"
                title="Space Over Weight"
              />
              <SolutionCard 
                icon="compress"
                title="Total Consolidation"
              />
            </div>
          </div>

          {/* Indirectly helping with weight */}
          <div className="flex flex-col gap-6">
             <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-label text-xs uppercase tracking-widest rounded-full w-max mb-2">
              Indirectly Helping With Weight
            </div>
            <ul className="space-y-4 font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-2">
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> Compression doesn't make clothes lighter, but it helps you pack more intentionally</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> When you can see how much space you actually have, you're less likely to overpack "just in case" items</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> People overpack because they're bad at estimating space, not because they need 40 pounds of clothing</li>
                <li className="flex items-start gap-3"><div className="w-2 h-2 mt-2.5 bg-primary rounded-full shrink-0"></div> Visible room to spare removes the instinct to cram in extras</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full mt-2">
               <SolutionCard 
                icon="scale"
                title="Intentional Packing"
              />
              <SolutionCard 
                icon="visibility"
                title="Visual Feedback"
              />
              <SolutionCard 
                icon="psychology"
                title="The Space Illusion"
              />
              <SolutionCard 
                icon="check_circle"
                title="Removing the Urge"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Competitor Comparison Matrix */}
      <div>
        <h3 className="font-headline text-2xl font-light uppercase tracking-[0.2em] text-center mb-12">Competitive Matrix</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {competitors.map((comp, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={idx} 
              className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 flex flex-col items-center text-center opacity-70 hover:opacity-100 hover:border-primary/30 transition-all"
            >
              <h4 className="font-headline text-xl text-on-surface mb-2">{comp.brand}</h4>
              <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-6">{comp.price}</span>
              <p className="font-body text-xs text-on-surface-variant/80 mb-6 flex-grow">{comp.weakness}</p>
              <div className="w-full pt-4 border-t border-outline-variant/20">
                <span className="font-label text-[10px] text-error uppercase tracking-widest flex items-center justify-center gap-1">
                  Vacuum Compression: <span className="text-sm font-bold">✗</span>
                </span>
              </div>
            </motion.div>
          ))}

          {/* Freeform Champion Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-surface-container-highest p-6 rounded-xl border-2 border-primary shadow-[0_0_30px_rgba(241,201,125,0.15)] flex flex-col items-center text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
            <h4 className="font-headline text-2xl text-primary font-bold mb-2 relative z-10">Freeform</h4>
            <span className="font-label text-[10px] text-primary uppercase tracking-widest mb-6 relative z-10">$238 - $439</span>
            <p className="font-body text-xs text-on-surface mb-6 flex-grow relative z-10">Uncompromised strength with integrated spatial manipulation.</p>
            <div className="w-full pt-4 border-t border-primary/30 relative z-10">
              <span className="font-label text-[10px] text-green-400 uppercase tracking-widest flex items-center justify-center gap-1 font-bold">
                Vacuum Compression: <span className="text-sm font-bold">✓</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketCompetition;
