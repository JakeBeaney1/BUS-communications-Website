import React, { useState, useEffect } from 'react';

const breakevenData = [
  { label: "Large Check-In", units: "32,259", height: "67%", fill: "bg-primary/20", hoverFill: "bg-primary/40" },
  { label: "Carry-On", units: "43,012", height: "90%", fill: "bg-primary/80", hoverFill: "bg-primary", delay: "delay-100" },
  { label: "Bundle", units: "25,807", height: "54%", fill: "bg-primary/40", hoverFill: "bg-primary/60", delay: "delay-200" }
];

const revenueData = [
  { 
    label: "Worst Case", 
    y1: { val: "$14.0M", height: "35%", delay: "delay-75" }, 
    y2: { val: "$18.4M", height: "46%", delay: "delay-100" } 
  },
  { 
    label: "Most Likely", 
    y1: { val: "$20.8M", height: "52%", delay: "delay-150" }, 
    y2: { val: "$27.2M", height: "68%", delay: "delay-200" } 
  },
  { 
    label: "Best Case", 
    y1: { val: "$30.8M", height: "77%", delay: "delay-300" }, 
    y2: { val: "$40.0M", height: "100%", delay: "delay-500" } 
  }
];

const Financials = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay to ensure the animation fires cleanly after rendering
    const timer = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="financials" className="flex-grow flex flex-col relative w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 gap-16">
      {/* Page Header */}
      <header className="mb-8">
        <h2 className="font-headline text-5xl md:text-6xl tracking-[0.15em] font-medium mb-4 text-on-surface">PROJECTIONS &amp; PRICING</h2>
        <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Financial forecasting models and baseline pricing structures engineered for optimal market penetration.
        </p>
      </header>

      {/* Pricing Section (Bento Grid) */}
      <div className="mb-12">
        <h3 className="font-headline text-primary tracking-widest text-sm uppercase mb-8 flex items-center">
          <span className="material-symbols-outlined mr-2 text-base">sell</span> Unit Pricing Architecture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pricing Card 1 */}
          <div className="glass-panel liquid-glass rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-surface-container to-surface-container opacity-50 group-hover:from-primary group-hover:to-primary-container transition-all duration-500"></div>
            <div className="mb-12">
              <h4 className="font-headline text-xl text-on-surface tracking-wider mb-2 uppercase">Large Check-In</h4>
              <p className="font-body text-xs text-on-surface-variant opacity-70">Model: Alpha-01</p>
            </div>
            <div className="flex items-baseline mb-6">
              <span className="font-headline text-2xl text-on-surface opacity-50 mr-1">$</span>
              <span className="font-headline text-5xl text-primary font-medium tracking-tight">316.49</span>
            </div>
            <div className="border-t border-outline-variant/20 pt-6 mt-8">
              <ul className="space-y-3 font-label text-xs text-on-surface-variant opacity-80">
                <li className="flex justify-between"><span>COGS:</span> <span className="text-on-surface">$142.10</span></li>
                <li className="flex justify-between"><span>Margin:</span> <span className="text-primary">55%</span></li>
              </ul>
            </div>
          </div>

          {/* Pricing Card 2 */}
          <div className="glass-panel liquid-glass rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-surface-container to-surface-container opacity-50 group-hover:from-primary group-hover:to-primary-container transition-all duration-500"></div>
            <div className="mb-12">
              <h4 className="font-headline text-xl text-on-surface tracking-wider mb-2 uppercase">Carry-On</h4>
              <p className="font-body text-xs text-on-surface-variant opacity-70">Model: Beta-02</p>
            </div>
            <div className="flex items-baseline mb-6">
              <span className="font-headline text-2xl text-on-surface opacity-50 mr-1">$</span>
              <span className="font-headline text-5xl text-primary font-medium tracking-tight">238.74</span>
            </div>
            <div className="border-t border-outline-variant/20 pt-6 mt-8">
              <ul className="space-y-3 font-label text-xs text-on-surface-variant opacity-80">
                <li className="flex justify-between"><span>COGS:</span> <span className="text-on-surface">$105.00</span></li>
                <li className="flex justify-between"><span>Margin:</span> <span className="text-primary">56%</span></li>
              </ul>
            </div>
          </div>

          {/* Pricing Card 3 */}
          <div className="glass-panel liquid-glass rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-surface-container to-surface-container opacity-50 group-hover:from-primary group-hover:to-primary-container transition-all duration-500"></div>
            <div className="mb-12">
              <h4 className="font-headline text-xl text-on-surface tracking-wider mb-2 uppercase">Bundle</h4>
              <p className="font-body text-xs text-on-surface-variant opacity-70">Model: Sigma Set</p>
            </div>
            <div className="flex items-baseline mb-6">
              <span className="font-headline text-2xl text-on-surface opacity-50 mr-1">$</span>
              <span className="font-headline text-5xl text-primary font-medium tracking-tight">439.74</span>
            </div>
            <div className="border-t border-outline-variant/20 pt-6 mt-8">
              <ul className="space-y-3 font-label text-xs text-on-surface-variant opacity-80">
                <li className="flex justify-between"><span>Combined COGS:</span> <span className="text-on-surface">$220.00</span></li>
                <li className="flex justify-between"><span>Margin:</span> <span className="text-primary">50%</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Chart 1: Breakeven */}
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 flex flex-col h-[500px]">
            <div className="mb-8 flex justify-between items-start">
              <div>
                <h4 className="font-headline text-lg tracking-widest uppercase text-on-surface mb-1">Breakeven Units Detail</h4>
                <p className="font-label text-xs text-on-surface-variant opacity-60">Volume required to cover fixed costs.</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant opacity-40">ssid_chart</span>
            </div>
            {/* Pseudo Chart Canvas */}
            <div className="flex-1 relative flex items-end justify-around pb-10 border-b border-outline-variant/30 px-4">
              {/* Y-Axis Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pb-10 z-0 pointer-events-none">
                <div className="border-t border-outline-variant/10 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-on-surface-variant/40 font-label">40k</span></div>
                <div className="border-t border-outline-variant/10 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-on-surface-variant/40 font-label">30k</span></div>
                <div className="border-t border-outline-variant/10 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-on-surface-variant/40 font-label">20k</span></div>
                <div className="border-t border-outline-variant/10 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-on-surface-variant/40 font-label">10k</span></div>
              </div>
              
              {/* Bars Map */}
              {breakevenData.map((d, i) => (
                <div key={i} className="relative z-10 w-16 bg-surface-container-high border border-outline-variant/30 flex flex-col justify-end items-center group cursor-pointer transition-all duration-[800ms] hover:-translate-y-2 hover:border-primary/50 ease-out" style={{ height: mounted ? d.height : '0%' }}>
                  <div className={`w-full ${d.fill} h-full transition-colors duration-300 group-hover:${d.hoverFill} ${d.delay || ''}`}></div>
                  <span className="absolute -bottom-8 font-label text-[10px] text-on-surface-variant text-center whitespace-nowrap">{d.label}</span>
                  
                  {/* Enhanced Interactive Tooltip */}
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-md shadow-2xl border border-primary/30 rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 transform scale-95 group-hover:scale-100 origin-bottom">
                       <span className="text-base font-headline text-primary whitespace-nowrap font-medium">{d.units}</span>
                       <span className="block text-[9px] font-label text-on-surface-variant text-center tracking-widest uppercase mt-0.5">Units</span>
                       {/* Arrow indicator */}
                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-primary/30"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2: Revenue */}
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 flex flex-col h-[500px]">
            <div className="mb-8 flex justify-between items-start">
              <div>
                <h4 className="font-headline text-lg tracking-widest uppercase text-on-surface mb-1">Pro Forma Revenue</h4>
                <p className="font-label text-xs text-on-surface-variant opacity-60">Year 1 vs Year 2 Scenario Analysis</p>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-surface-container-highest mr-2"></div><span className="text-[10px] font-label text-on-surface-variant">Year 1</span></div>
                <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-primary mr-2 shadow-[0_0_8px_rgba(241,201,125,0.4)]"></div><span className="text-[10px] font-label text-on-surface-variant">Year 2</span></div>
              </div>
            </div>
            {/* Pseudo Chart Canvas */}
            <div className="flex-1 relative flex items-end justify-around pb-10 border-b border-outline-variant/30 px-4">
              {/* Y-Axis Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pb-10 z-0 pointer-events-none">
                <div className="border-t border-outline-variant/10 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-on-surface-variant/40 font-label">40M</span></div>
                <div className="border-t border-outline-variant/10 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-on-surface-variant/40 font-label">30M</span></div>
                <div className="border-t border-outline-variant/10 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-on-surface-variant/40 font-label">20M</span></div>
                <div className="border-t border-outline-variant/10 w-full relative"><span className="absolute -left-8 -top-2 text-[10px] text-on-surface-variant/40 font-label">10M</span></div>
              </div>
              
              {/* Bar Groups Map */}
              {revenueData.map((d, i) => (
                <div key={i} className="relative z-10 flex space-x-1 items-end h-full">
                  {/* Year 1 Bar */}
                  <div className="w-8 bg-surface-container-highest transition-all duration-1000 hover:bg-surface-variant hover:-translate-y-2 relative group cursor-pointer ease-out" style={{ height: mounted ? d.y1.height : '0%' }}>
                     <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-[8px] shadow-2xl border border-outline-variant rounded-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 transform scale-95 group-hover:scale-100 origin-bottom">
                       <span className="text-xs font-label text-on-surface whitespace-nowrap block text-center mb-0.5 tracking-wider">YEAR 1</span>
                       <span className="text-sm font-headline text-on-surface font-medium whitespace-nowrap">{d.y1.val}</span>
                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-outline-variant"></div>
                     </div>
                  </div>
                  {/* Year 2 Bar */}
                  <div className="w-8 bg-primary/60 transition-all duration-1000 hover:bg-primary/80 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(241,201,125,0.3)] relative group cursor-pointer ease-out" style={{ height: mounted ? d.y2.height : '0%' }}>
                     <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-surface/90 backdrop-blur-[8px] shadow-2xl border border-primary/50 border-b-primary rounded-lg px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 transform scale-95 group-hover:scale-100 origin-bottom">
                       <span className="text-xs font-label text-primary/70 whitespace-nowrap block text-center mb-0.5 tracking-wider">YEAR 2</span>
                       <span className="text-sm font-headline text-primary font-medium whitespace-nowrap">{d.y2.val}</span>
                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-primary/50"></div>
                     </div>
                  </div>
                  <span className="absolute -bottom-8 w-full text-center font-label text-[10px] text-on-surface-variant whitespace-nowrap">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financials;
