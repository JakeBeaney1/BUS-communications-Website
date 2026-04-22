import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const animateCount = (element, endValue, duration, prefix = '', suffix = '') => {
  let startTimestamp = null;
  const isFloat = endValue % 1 !== 0;
  // If the prefix has a dash (like $75-$), we want to only animate the last number.
  // We handle prefix/suffix as static wrappers.
  
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    // Custom easing function (easeOutQuart)
    const easeOut = 1 - Math.pow(1 - progress, 4);
    
    const currentValue = (easeOut * endValue).toFixed(isFloat ? 2 : 0);
    element.innerText = `${prefix}${currentValue}${suffix}`;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.innerText = `${prefix}${endValue.toFixed(isFloat ? 2 : 0)}${suffix}`;
    }
  };
  window.requestAnimationFrame(step);
};

const AnimatedStat = ({ end, duration = 2500, prefix = '', suffix = '', title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (isInView && ref.current && !ref.current.hasAnimated) {
      animateCount(ref.current, end, duration, prefix, suffix);
      ref.current.hasAnimated = true;
    }
  }, [isInView, end, duration, prefix, suffix]);

  return (
    <div className="glass-panel liquid-glass rounded-xl p-6 border border-outline-variant/15 flex flex-col justify-center text-center group hover:border-primary/50 transition-colors">
      <div className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight drop-shadow-[0_0_15px_rgba(241,201,125,0.2)]">
        <span ref={ref}>{prefix}0{suffix}</span>
      </div>
      <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant/80 leading-relaxed">
        {title}
      </div>
    </div>
  );
};

const marketShareData = [
  { name: 'Samsonite Group', value: 20, color: '#c8a96e' },
  { name: 'Other', value: 68, color: '#333333' },
  { name: 'Away', value: 4, color: '#666666' },
  { name: 'Rimowa', value: 3, color: '#666666' },
  { name: 'Travelpro', value: 3, color: '#666666' },
  { name: 'Monos', value: 2, color: '#666666' }
];

const competitors = [
  { brand: 'Away', price: '$295 - $395', weakness: 'Standard DTC shell, zero volume flexibility' },
  { brand: 'Monos', price: '$245 - $345', weakness: 'Aesthetic focus over technical utility' },
  { brand: 'Travelpro', price: '$180 - $350', weakness: 'Heavy nylon construct, outdated aesthetics' },
  { brand: 'Rimowa', price: '$900 - $1500+', weakness: 'Prohibitive cost, easily dented aluminum' },
  { brand: 'Delsey', price: '$150 - $300', weakness: 'Weak zipper integration, poor security' }
];

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

      {/* Animated Stats Grid */}
      <div>
        <h3 className="font-headline text-sm text-primary uppercase tracking-[0.2em] mb-8">Industry Trajectory</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <AnimatedStat end={43} prefix="$" suffix="B" title="Global luggage market valuation (2026)" />
          <AnimatedStat end={60} prefix="$" suffix="B+" title="Projected market size by 2031 (6.6% CAGR)" />
          <AnimatedStat end={3.83} prefix="$" suffix="B" title="Smart luggage sub-segment (2024)" />
          <AnimatedStat end={11} prefix="$" suffix="B+" title="Smart luggage projected by 2033 (12.7% CAGR)" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <AnimatedStat end={76.5} suffix="%" title="Share of revenue from travel luggage bags" />
          <AnimatedStat end={7.27} prefix="$" suffix="B" title="U.S. airline baggage fees collected (2024)" />
          <AnimatedStat end={100} prefix="$75-$" title="Overweight bag charge per flight" />
        </div>
      </div>

      {/* Pie Chart & Differentiator Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Pie Chart Side */}
        <div className="lg:col-span-6 bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 flex flex-col h-[500px]">
          <h3 className="font-headline text-sm text-primary uppercase tracking-[0.2em] mb-4">Market Share Landscape</h3>
          <div className="flex-grow w-full py-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketShareData}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={160}
                  paddingAngle={2}
                  dataKey="value"
                  animationBegin={200}
                  animationDuration={1500}
                >
                  {marketShareData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(255,255,255,0.05)" />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => [`${value}%`, name]}
                  contentStyle={{ backgroundColor: 'rgba(10, 10, 10, 0.95)', border: '1px solid rgba(241,201,125,0.3)', borderRadius: '8px', color: '#f5f5f5', padding: '12px' }}
                  itemStyle={{ color: '#c8a96e', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 flex-wrap justify-center font-label text-xs tracking-widest uppercase text-on-surface-variant">
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-primary rounded-full"></span>Samsonite</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-[#666] rounded-full"></span>Competitors</div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 bg-[#333] rounded-full"></span>Other</div>
          </div>
        </div>

        {/* Differentiator Callout Side */}
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 text-primary font-label text-xs uppercase tracking-widest rounded-full w-max">
              The Disruption
            </div>
            <h3 className="font-headline text-4xl lg:text-6xl font-bold uppercase tracking-wide text-on-surface leading-tight drop-shadow-[0_4px_16px_rgba(241,201,125,0.1)]">
              No suitcase like this exists.
            </h3>
            <div className="w-16 h-1 bg-primary mb-2"></div>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              No competitor in the premium hard-shell category offers built-in vacuum compression. This is a category-defining product that directly answers the largest pain point in modern travel.
            </p>
          </motion.div>
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

      {/* Target Market Block */}
      <div>
        <div className="flex items-center gap-4 text-primary font-label text-[10px] uppercase tracking-[0.2em] mb-8 justify-center">
          <span className="w-4 h-[1px] bg-primary"></span>
          <span>Demographic Definition</span>
          <span className="w-4 h-[1px] bg-primary"></span>
        </div>
        <h3 className="font-headline text-3xl font-light tracking-[0.2em] text-on-surface uppercase mb-12 text-center">
          Frequent Flyers & Core Audiences
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -5 }} className="glass-panel liquid-glass p-8 rounded-xl flex flex-col items-center text-center border border-outline-variant/15 hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">flight_takeoff</span>
            <h4 className="font-headline text-xl uppercase tracking-widest text-on-surface mb-4">Business Travelers</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Professionals maximizing efficiency, combining tech-enabled carry-ons with premium aesthetics to breeze through terminals without checking bags.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="glass-panel liquid-glass p-8 rounded-xl flex flex-col items-center text-center border border-outline-variant/15 hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">family_restroom</span>
            <h4 className="font-headline text-xl uppercase tracking-widest text-on-surface mb-4">Families</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Frequent flyers needing to fit bulky items for multiple people into fewer suitcases, mitigating extreme overweight bag charges.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="glass-panel liquid-glass p-8 rounded-xl flex flex-col items-center text-center border border-outline-variant/15 hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">school</span>
            <h4 className="font-headline text-xl uppercase tracking-widest text-on-surface mb-4">College Students</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Cross-country movers shifting seasonal wardrobes. Maximized internal capacity without expanding physical footprint.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketCompetition;
