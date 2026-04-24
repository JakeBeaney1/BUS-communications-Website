import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, LabelList } from 'recharts';

// --- Animated Count Utility ---
const animateCount = (element, endValue, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(easeOut * endValue);
    element.textContent = currentValue.toLocaleString();
    if (progress < 1) window.requestAnimationFrame(step);
    else element.textContent = endValue.toLocaleString();
  };
  window.requestAnimationFrame(step);
};

const AnimatedCount = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20px 0px" });
  useEffect(() => {
    if (isInView && ref.current && !ref.current.hasAnimated) {
      animateCount(ref.current, value, 1500);
      ref.current.hasAnimated = true;
    }
  }, [isInView, value]);
  return <tspan ref={ref}>0</tspan>;
};

const CustomCountUpLabel = (props) => {
  const { x, y, width, value } = props;
  return (
    <g transform={`translate(${x + width / 2},${y - 15})`}>
      <text x={0} y={0} fill="#c8a96e" textAnchor="middle" dominantBaseline="middle" className="font-headline font-bold text-lg drop-shadow-[0_0_8px_rgba(241,201,125,0.4)]">
        <AnimatedCount value={value} />
      </text>
    </g>
  );
};

// --- Bloomberg Styled Table ---
const BloombergTable = ({ headers, subHeaders, rows }) => (
  <div className="w-full overflow-x-auto mt-6 border border-outline-variant/30 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)]">
    <table className="w-full text-left border-collapse font-mono text-[11px] md:text-sm whitespace-nowrap">
      <thead className="bg-[#c8a96e] text-black">
        {headers && (
          <tr>
            {headers.map((h, i) => (
              <th key={i} colSpan={h.colSpan || 1} className={`p-3 font-bold uppercase tracking-widest border-r border-[#ae8e4a] ${h.align || 'text-left'}`}>
                {h.label}
              </th>
            ))}
          </tr>
        )}
        {subHeaders && (
          <tr className="bg-[#ae8e4a] text-black/90">
             {subHeaders.map((sh, i) => (
               <th key={i} className={`p-2 border-r border-black/10 font-medium ${sh.align || 'text-right'}`}>
                 {sh.label}
               </th>
             ))}
          </tr>
        )}
      </thead>
      <tbody>
         {rows.map((row, i) => (
           <tr key={i} className={`border-b border-outline-variant/20 hover:bg-[#1a1c23] transition-colors ${i % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#111111]'} ${row.isHighlight ? 'font-bold text-[#c8a96e]' : 'text-[#f5f5f5]'}`}>
             {row.cells.map((cell, j) => {
               const valStr = String(cell);
               const isPositiveMoney = valStr.includes('$') && !valStr.includes('-') && !valStr.includes('Range');
               const isPercentage = valStr.includes('%');
               return (
                 <td key={j} className={`p-3 border-r border-outline-variant/10 ${j === 0 ? 'text-left' : 'text-right'} ${(isPositiveMoney || isPercentage) && !row.isHighlight && j>0 ? 'text-[#39ff14]' : ''}`}>
                   {cell}
                 </td>
               );
             })}
           </tr>
         ))}
      </tbody>
    </table>
  </div>
);

// --- SVG Circular Progress ---
const CircularProgress = ({ percentage }) => {
  const r = 30;
  const c = Math.PI * (r * 2);
  const pct = ((100 - percentage) / 100) * c;
  return (
    <div className="relative w-20 h-20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(241,201,125,0.1)] rounded-full bg-surface-container-highest">
      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
        <circle cx="40" cy="40" r="30" stroke="rgba(241,201,125,0.1)" strokeWidth="4" fill="none" />
        <motion.circle 
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: pct }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          cx="40" cy="40" r="30" 
          stroke="#c8a96e" 
          strokeWidth="4" 
          fill="none" 
          strokeDasharray={c} 
          strokeLinecap="round" 
        />
      </svg>
      <div className="text-center">
        <span className="font-headline text-lg font-bold text-primary leading-none">{percentage}%</span>
      </div>
    </div>
  );
};

// --- Data ---
const breakevenChartData = [
  { name: 'Large Check-In', units: 32259, revenueEquivalent: '$10.2M' },
  { name: 'Carry-On', units: 43012, revenueEquivalent: '$10.3M' },
  { name: 'Bundle', units: 25807, revenueEquivalent: '$11.3M' }
];

const bomData = [
  {
    name: 'Air Pump Machine', total: '$17.10',
    components: ['Mini diaphragm pump', 'DC motor', 'Lithium battery (2000 mAh)', 'PCB + charging module', 'Plastic casing (ABS)', 'Nozzle'],
    manufacturing: ['Assembly labor', 'Packaging', 'Quality control', 'Shipping (bulk/unit)', 'Factory margin']
  },
  {
    name: 'Vacuum Bag', total: '$18.40',
    components: ['Nylon/polyester fabric (outer)', 'TPU airtight inner layer', 'Heavy-duty zipper (airtight)', 'Valve (higher quality)', 'Stitching + reinforcement'],
    manufacturing: ['Sewing labor', 'Heat sealing inner lining', 'Quality control', 'Factory margin']
  }
];

const proFormaData = {
  year1: [
    { scenario: 'Worst Case', Revenue: 14324500, GrossProfit: 8594700, OperatingIncome: 6735230 },
    { scenario: 'Most Likely', Revenue: 21336750, GrossProfit: 12802050, OperatingIncome: 10521845 },
    { scenario: 'Best Case', Revenue: 31213900, GrossProfit: 18728340, OperatingIncome: 15855506 }
  ],
  year2: [
    { scenario: 'Worst Case', Revenue: 18621850, GrossProfit: 11173110, OperatingIncome: 9555799 },
    { scenario: 'Most Likely', Revenue: 27737775, GrossProfit: 16642665, OperatingIncome: 14478399 },
    { scenario: 'Best Case', Revenue: 40578070, GrossProfit: 24346842, OperatingIncome: 21412158 }
  ]
};

const salesForecastData = {
  Best: [
    { product: 'Carry-On', units: 160000, revenue: 38198400 },
    { product: 'Large Check-In', units: 150000, revenue: 47473500 },
    { product: 'Bundle', units: 140000, revenue: 61563600 }
  ],
  Likely: [
    { product: 'Carry-On', units: 140000, revenue: 33423600 },
    { product: 'Large Check-In', units: 135000, revenue: 42726150 },
    { product: 'Bundle', units: 130000, revenue: 57166200 }
  ],
  Worst: [
    { product: 'Carry-On', units: 125000, revenue: 29842500 },
    { product: 'Large Check-In', units: 120000, revenue: 37978800 },
    { product: 'Bundle', units: 115000, revenue: 50570100 }
  ]
};

const formatDollar = (num) => '$' + num.toLocaleString();

const Financials = () => {
  const [proFormaYear, setProFormaYear] = useState('year1');
  const [forecastScenario, setForecastScenario] = useState('Likely');

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111] border border-primary/30 p-4 rounded-lg shadow-[0_0_15px_rgba(241,201,125,0.2)]">
          <p className="font-headline text-primary uppercase tracking-widest mb-2 font-bold">{label}</p>
          {payload.map((p, i) => (
            <p key={i} className="font-mono text-xs mb-1" style={{ color: p.color }}>
              {p.name}: {p.name === 'units' || p.name === 'Units' ? p.value.toLocaleString() : `$${p.value.toLocaleString()}`}
            </p>
          ))}
          {payload[0].payload.revenueEquivalent && (
            <p className="font-mono text-xs text-[#39ff14] mt-2 pt-2 border-t border-outline-variant/30">
              Rev. Equiv: {payload[0].payload.revenueEquivalent}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="financials" className="flex-grow flex flex-col relative w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 gap-24">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0"></div>

      <header className="relative z-10 flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-4 text-primary font-label text-sm uppercase tracking-widest">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Financial Architecture</span>
        </div>
        <h2 className="font-headline text-5xl md:text-7xl tracking-[0.15em] font-bold text-on-surface uppercase leading-tight">
          PROJECTIONS<br/>&amp; PRICING
        </h2>
        <p className="font-body text-on-surface-variant text-lg leading-relaxed mt-4">
          Terminal-grade financial modeling and baseline pricing structures engineered for optimal market penetration.
        </p>
      </header>

      {/* 5A. PRICING CARDS */}
      <div className="relative z-10">
        <h3 className="font-headline text-2xl font-light tracking-widest text-on-surface uppercase mb-8">Unit Economics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="glass-panel liquid-glass rounded-xl p-8 flex flex-col group hover:border-primary/40 transition-colors">
            <h4 className="font-headline text-xl text-primary tracking-wider uppercase mb-2">Large Check-In</h4>
            <p className="font-body text-xs text-on-surface-variant opacity-80 mb-8">31.1" × 20.9" × 13.8" | 9.6 lbs</p>
            <div className="flex items-center justify-between mt-auto border-t border-outline-variant/20 pt-6">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">MSRP</p>
                <div className="font-headline text-2xl text-on-surface">$319.99</div>
              </div>
              <CircularProgress percentage={65} />
            </div>
          </div>
          {/* Card 2 */}
          <div className="glass-panel liquid-glass rounded-xl p-8 flex flex-col group hover:border-primary/40 transition-colors">
            <h4 className="font-headline text-xl text-primary tracking-wider uppercase mb-2">Carry-On</h4>
            <p className="font-body text-xs text-on-surface-variant opacity-80 mb-8">23" × 15" × 10" | 6.5 lbs</p>
            <div className="flex items-center justify-between mt-auto border-t border-outline-variant/20 pt-6">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">MSRP</p>
                <div className="font-headline text-2xl text-on-surface">$239.99</div>
              </div>
              <CircularProgress percentage={60} />
            </div>
          </div>
          {/* Card 3 */}
          <div className="glass-panel liquid-glass rounded-xl p-8 flex flex-col group hover:border-primary/40 transition-colors">
            <h4 className="font-headline text-xl text-primary tracking-wider uppercase mb-2">Bundle</h4>
            <p className="font-body text-xs text-on-surface-variant opacity-80 mb-8">Includes both sizes</p>
            <div className="flex items-center justify-between mt-auto border-t border-outline-variant/20 pt-6">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">MSRP</p>
                <div className="font-headline text-2xl text-on-surface">$439.99</div>
              </div>
              <CircularProgress percentage={55} />
            </div>
          </div>
        </div>
      </div>

      {/* 5B. BREAKEVEN ANALYSIS */}
      <div className="relative z-10 w-full">
        <h3 className="font-headline text-2xl font-light tracking-widest text-on-surface uppercase mb-8">Breakeven Analysis (Incremental)</h3>
        <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15">
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={breakevenChartData} margin={{ top: 40, right: 0, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" tick={{fill: '#888', fontSize: 12, fontFamily: 'Inter'}} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{fill: '#888', fontSize: 12, fontFamily: 'Inter'}} axisLine={false} tickLine={false} tickFormatter={(val) => `${val/1000}k`} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(241,201,125,0.05)'}} />
                <Bar dataKey="units" fill="#c8a96e" radius={[4, 4, 0, 0]} animationDuration={1500}>
                  <LabelList content={<CustomCountUpLabel />} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 5C. BILL OF MATERIALS */}
      <div className="relative z-10 w-full">
        <h3 className="font-headline text-2xl font-light tracking-widest text-on-surface uppercase mb-8">Bill of Materials</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {bomData.map((item, idx) => (
            <div key={idx} className="bg-[#111] rounded-xl border border-outline-variant/20 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <div className="bg-[#c8a96e] p-4 flex justify-between items-center">
                <h4 className="font-headline font-bold text-black uppercase tracking-widest text-lg">{item.name}</h4>
                <div className="bg-black/90 text-[#39ff14] font-mono px-3 py-1 rounded text-sm shadow-inner">{item.total}</div>
              </div>
              <div className="p-0 font-mono text-xs text-[#f5f5f5]">
                {/* Components */}
                <div className="bg-[#1a1a1a] p-3 border-b border-black/30 font-bold uppercase tracking-wider text-[#ae8e4a]">Component Costs</div>
                {item.components.map((c, i) => (
                  <div key={i} className="px-4 py-3 border-b border-outline-variant/10 flex justify-between hover:bg-surface-variant/20">
                    <span>{c}</span>
                  </div>
                ))}
                {/* Manufacturing */}
                <div className="bg-[#1a1a1a] p-3 border-y border-black/30 font-bold uppercase tracking-wider text-[#ae8e4a] mt-2">Manufacturing Costs</div>
                {item.manufacturing.map((m, i) => (
                  <div key={i} className="px-4 py-3 border-b border-outline-variant/10 flex justify-between hover:bg-surface-variant/20">
                    <span>{m}</span>
                  </div>
                ))}
                {/* Total */}
                <div className="bg-[#0a0a0a] p-4 flex justify-between border-t-2 border-[#c8a96e] mt-4">
                  <span className="font-bold text-[#c8a96e] tracking-widest uppercase">Total Unit Cost</span>
                  <span className="font-bold text-[#39ff14] text-sm">{item.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5D. PRO FORMA STATEMENT */}
      <div className="relative z-10 w-full">
        <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
          <h3 className="font-headline text-2xl font-light tracking-widest text-on-surface uppercase">Pro Forma Statement</h3>
          <div className="flex bg-[#111] border border-primary/30 rounded-lg p-1">
            <button 
              onClick={() => setProFormaYear('year1')}
              className={`px-6 py-2 font-label text-xs uppercase tracking-widest rounded transition-colors ${proFormaYear === 'year1' ? 'bg-primary text-black font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Year 1
            </button>
            <button 
              onClick={() => setProFormaYear('year2')}
              className={`px-6 py-2 font-label text-xs uppercase tracking-widest rounded transition-colors ${proFormaYear === 'year2' ? 'bg-primary text-black font-bold' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Year 2
            </button>
          </div>
        </div>
        
        <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15">
          <div className="w-full h-[400px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={proFormaData[proFormaYear]} margin={{ top: 20, right: 0, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="scenario" tick={{fill: '#888', fontSize: 12, fontFamily: 'Inter'}} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{fill: '#888', fontSize: 12, fontFamily: 'Inter'}} axisLine={false} tickLine={false} tickFormatter={(val) => `$${val/1000000}M`} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(241,201,125,0.05)'}} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '12px', fontFamily: 'Inter' }} />
                <Bar dataKey="Revenue" fill="#c8a96e" radius={[2, 2, 0, 0]} animationDuration={1000} />
                <Bar dataKey="GrossProfit" fill="#a08a5d" radius={[2, 2, 0, 0]} animationDuration={1000} />
                <Bar dataKey="OperatingIncome" fill="#39ff14" radius={[2, 2, 0, 0]} animationDuration={1000} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 5E. FORECASTED SALES */}
      <div className="relative z-10 w-full mb-32">
        <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
          <h3 className="font-headline text-2xl font-light tracking-widest text-on-surface uppercase">Forecasted Sales (Y1)</h3>
          <div className="flex bg-[#111] border border-primary/30 rounded-lg p-1">
            {['Worst', 'Likely', 'Best'].map((scen) => (
              <button 
                key={scen}
                onClick={() => setForecastScenario(scen)}
                className={`px-6 py-2 font-label text-xs uppercase tracking-widest rounded transition-colors ${forecastScenario === scen ? 'bg-primary text-black font-bold' : 'text-on-surface-variant hover:text-primary'}`}
              >
                {scen} Case
              </button>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[300px] w-full border border-outline-variant/10 rounded-lg p-4 pb-8 bg-[#111]">
              <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 text-center">Unit Volume Projection</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesForecastData[forecastScenario]} margin={{ top: 10, right: 0, left: 10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="product" tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} dy={5} />
                  <YAxis tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(val) => `${val/1000}k`} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="units" name="Units" fill="#7a8c99" radius={[2, 2, 0, 0]} animationDuration={800} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="h-[300px] w-full border border-outline-variant/10 rounded-lg p-4 pb-8 bg-[#111]">
              <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 text-center">Revenue Projection</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesForecastData[forecastScenario]} margin={{ top: 10, right: 0, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="product" tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} dy={5} />
                  <YAxis tick={{fill: '#888', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(val) => `$${val/1000000}M`} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="revenue" name="Revenue" fill="#c8a96e" radius={[2, 2, 0, 0]} animationDuration={800} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financials;
