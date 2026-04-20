import React, { useState } from 'react';

const shareData = {
  others: {
    key: 'others',
    name: 'Others',
    share: '20%',
    role: '20% SHARE',
    desc: 'OTHERS SHARE'
  },
  monos: {
    key: 'monos',
    name: 'Monos',
    share: '30%',
    role: '30% SHARE',
    desc: 'MONOS SHARE'
  },
  samsonite: {
    key: 'samsonite',
    name: 'Samsonite',
    share: '20%',
    role: 'MARKET LEADER',
    desc: 'SAMSONITE GROUP DOMINANCE'
  },
  away: {
    key: 'away',
    name: 'Away',
    share: '30%',
    role: '30% SHARE',
    desc: 'AWAY SHARE'
  }
};

const MarketCompetition = () => {
  const [activeShare, setActiveShare] = useState('samsonite');

  return (
    <section id="market" className="flex-grow flex flex-col relative w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 gap-24">
      {/* Header Section */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-4 text-primary font-label text-sm uppercase tracking-widest">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Category Overview</span>
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-[0.15em] text-on-surface uppercase leading-tight">
          MARKET &amp;<br/>COMPETITION
        </h2>
        <p className="font-body text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mt-4">
          Defining a new category. While traditional luggage focuses on volume, Kinetic targets the premium intersection of aerospace engineering and mobile architecture.
        </p>
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Market Size Card */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="glass-panel liquid-glass rounded-xl p-8 border border-outline-variant/15 hover:border-outline-variant/40 transition-colors flex flex-col h-full relative overflow-hidden group min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="font-headline text-sm text-primary uppercase tracking-[0.2em] mb-12 relative z-10">Total Addressable Market</h3>
            <div className="flex-grow flex flex-col justify-center relative z-10">
              <div className="font-headline text-6xl xl:text-7xl font-bold tracking-tight text-on-surface mb-2">$3.2</div>
              <div className="font-headline text-2xl tracking-[0.1em] text-on-surface-variant uppercase">Billion</div>
            </div>
            <div className="mt-12 pt-6 border-t border-surface-container-lowest relative z-10">
              <p className="font-label text-sm text-on-surface-variant leading-relaxed">
                Projected global market size for premium travel solutions by 2028, reflecting a shift towards durable, high-performance hardshells.
              </p>
            </div>
          </div>
        </div>

        {/* Chart Card */}
        <div className="lg:col-span-8">
          <div className="glass-panel liquid-glass rounded-xl p-8 border border-outline-variant/15 transition-colors flex flex-col h-full min-h-[400px]">
            <div className="flex justify-between items-start mb-12">
              <h3 className="font-headline text-sm text-primary uppercase tracking-[0.2em]">Market Share Landscape</h3>
              <div className="flex gap-4 hidden sm:flex">
                <span className="flex items-center gap-2 font-label text-xs text-on-surface-variant">
                  <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(241,201,125,0.5)]"></span> Samsonite Group
                </span>
                <span className="flex items-center gap-2 font-label text-xs text-on-surface-variant">
                  <span className="w-3 h-3 rounded-full bg-surface-container-lowest border border-outline-variant"></span> DTC Challengers
                </span>
              </div>
            </div>

            <div className="flex-grow flex flex-col md:flex-row items-center justify-between relative px-4 md:px-12 py-12">
              
              {/* Background Connecting Lines */}
              <div className="hidden md:block absolute top-[4.5rem] left-12 right-12 h-[1px] bg-outline-variant/10 z-0"></div>
              <div className="hidden md:block absolute bottom-[4.5rem] left-12 right-12 h-[1px] bg-outline-variant/10 z-0"></div>

              {/* Left Column Data Labels */}
              <div className="flex flex-row md:flex-col gap-8 md:gap-32 relative z-20 w-full md:w-auto justify-between mb-8 md:mb-0">
                {/* Others */}
                <div 
                  className="flex flex-col md:items-start items-center cursor-pointer group"
                  onMouseEnter={() => setActiveShare('others')}
                >
                  <span className={`font-headline text-xl transition-colors duration-300 ${activeShare === 'others' ? 'text-primary' : 'text-on-surface-variant'}`}>{shareData.others.name}</span>
                  <span className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-wider mt-1">{shareData.others.role}</span>
                </div>
                {/* Monos */}
                <div 
                  className="flex flex-col md:items-start items-center cursor-pointer group"
                  onMouseEnter={() => setActiveShare('monos')}
                >
                  <span className={`font-headline text-xl transition-colors duration-300 ${activeShare === 'monos' ? 'text-primary' : 'text-on-surface-variant'}`}>{shareData.monos.name}</span>
                  <span className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-wider mt-1">{shareData.monos.role}</span>
                </div>
              </div>

              {/* Center Interactive Square Box */}
              <div className="relative w-64 h-64 shrink-0 transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-[#151515] rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-outline-variant/5 z-10"></div>
                <div className="absolute inset-2 bg-surface-container-highest rounded-2xl shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)] border border-white/5 z-15"></div>
                
                {/* Dynamic Glow Corners */}
                {/* Top Left - Others */}
                <div className={`absolute -inset-1 border-t-[16px] border-l-[16px] rounded-tl-[32px] border-primary transition-opacity duration-500 shadow-[-15px_-15px_40px_rgba(241,201,125,0.2)] z-20 ${activeShare === 'others' ? 'opacity-100' : 'opacity-0'}`} style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }}></div>
                
                {/* Top Right - Samsonite */}
                <div className={`absolute -inset-1 border-t-[16px] border-r-[16px] rounded-tr-[32px] border-primary transition-opacity duration-500 shadow-[15px_-15px_40px_rgba(241,201,125,0.2)] z-20 ${activeShare === 'samsonite' ? 'opacity-100' : 'opacity-0'}`} style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)' }}></div>
                
                {/* Bottom Left - Monos */}
                <div className={`absolute -inset-1 border-b-[16px] border-l-[16px] rounded-bl-[32px] border-primary transition-opacity duration-500 shadow-[-15px_15px_40px_rgba(241,201,125,0.2)] z-20 ${activeShare === 'monos' ? 'opacity-100' : 'opacity-0'}`} style={{ clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' }}></div>
                
                {/* Bottom Right - Away */}
                <div className={`absolute -inset-1 border-b-[16px] border-r-[16px] rounded-br-[32px] border-primary transition-opacity duration-500 shadow-[15px_15px_40px_rgba(241,201,125,0.2)] z-20 ${activeShare === 'away' ? 'opacity-100' : 'opacity-0'}`} style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>

                {/* Center Text */}
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none">
                  <div className="font-headline text-5xl md:text-6xl font-bold text-primary mb-2 tracking-tight drop-shadow-[0_0_15px_rgba(241,201,125,0.3)]">
                    {shareData[activeShare].share}
                  </div>
                  <div className="font-label text-[10px] md:text-xs uppercase tracking-[0.2em] text-on-surface-variant max-w-[150px] leading-relaxed">
                    {shareData[activeShare].desc}
                  </div>
                </div>
              </div>

              {/* Right Column Data Labels */}
              <div className="flex flex-row md:flex-col gap-8 md:gap-32 relative z-20 w-full md:w-auto justify-between mt-8 md:mt-0 text-center md:text-right items-center md:items-end">
                {/* Samsonite */}
                <div 
                  className="flex flex-col items-center md:items-end cursor-pointer group"
                  onMouseEnter={() => setActiveShare('samsonite')}
                >
                  <span className={`font-headline text-xl transition-colors duration-300 ${activeShare === 'samsonite' ? 'text-primary drop-shadow-[0_0_10px_rgba(241,201,125,0.5)]' : 'text-on-surface-variant'}`}>{shareData.samsonite.name}</span>
                  <span className={`font-label text-[10px] uppercase tracking-wider mt-1 transition-colors ${activeShare === 'samsonite' ? 'text-primary/80' : 'text-on-surface-variant/50'}`}>{shareData.samsonite.role}</span>
                </div>
                {/* Away */}
                <div 
                  className="flex flex-col items-center md:items-end cursor-pointer group"
                  onMouseEnter={() => setActiveShare('away')}
                >
                  <span className={`font-headline text-xl transition-colors duration-300 ${activeShare === 'away' ? 'text-primary' : 'text-on-surface-variant'}`}>{shareData.away.name}</span>
                  <span className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-wider mt-1">{shareData.away.role}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Strategic Insight */}
      <div className="bg-surface-container-low rounded-xl p-12 border border-outline-variant/10 relative overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.03] mix-blend-screen"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-headline text-2xl font-bold tracking-[0.1em] text-on-surface uppercase mb-6">The Kinetic Advantage</h3>
            <p className="font-body text-on-surface-variant leading-relaxed mb-8">
              While challengers focus on lifestyle branding, Samsonite Kinetic roots its value proposition in uncompromising structural engineering. We are not competing on color palettes; we are competing on the physics of endurance.
            </p>
            <a className="inline-flex items-center gap-2 text-primary font-headline text-sm uppercase tracking-widest hover:text-primary-container transition-colors group cursor-pointer">
              Read Engineering Brief
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 border-l border-outline-variant/20 pl-12">
            <div className="flex flex-col gap-2">
              <span className="font-headline text-3xl text-primary font-bold">4.2x</span>
              <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">Impact Resistance vs. DTC Avg</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-headline text-3xl text-primary font-bold">15%</span>
              <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">Weight Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketCompetition;
