import React from 'react';
import { motion } from 'framer-motion';

const Future = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="future" className="flex-grow flex flex-col relative w-full max-w-[1600px] mx-auto px-6 md:px-12 py-32 gap-16">
      {/* Header Section */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-4 text-primary font-label text-sm uppercase tracking-widest">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>Vision & Roadmap</span>
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-[0.15em] text-on-surface uppercase leading-tight">
          THE FUTURE<br />OF FREEFORM
        </h2>
        <p className="font-body text-on-surface-variant text-lg leading-relaxed mt-4">
          Scaling the vacuum compression technology across the Samsonite Group portfolio to completely redefine the travel experience.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="glass-panel liquid-glass p-8 rounded-xl border border-outline-variant/10 relative overflow-hidden flex flex-col h-[400px] group hover:border-primary/40 transition-all cursor-crosshair">
          <span className="font-headline text-8xl text-surface-container-lowest drop-shadow-[0_0_1px_rgba(241,201,125,0.4)] font-bold absolute -top-6 -right-4 group-hover:scale-110 transition-transform duration-700">01</span>
          <h3 className="font-headline text-4xl text-on-surface tracking-widest uppercase mb-2 relative z-10 drop-shadow-md">TUMI</h3>
          <p className="font-label text-xs uppercase text-primary tracking-widest mb-6 relative z-10">Phase 1 Integration</p>
          <div className="flex-grow relative z-10">
            <p className="font-body text-sm text-on-surface-variant/90 leading-relaxed group-hover:text-[#f5f5f5] transition-colors">
              Premium positioning. Introducing the technology in high-end, luxury business luggage lines. Focusing on executives and frequent flyers who demand maximum efficiency without sacrificing aesthetic refinement.
            </p>
          </div>
          <div className="w-full bg-surface-container-high h-1 mt-auto overflow-hidden rounded relative z-10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="bg-primary h-full"
            ></motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel liquid-glass p-8 rounded-xl border border-outline-variant/10 relative overflow-hidden flex flex-col h-[400px] group hover:border-primary/40 transition-all cursor-crosshair">
          <span className="font-headline text-8xl text-surface-container-lowest drop-shadow-[0_0_1px_rgba(241,201,125,0.4)] font-bold absolute -top-6 -right-4 group-hover:scale-110 transition-transform duration-700">02</span>
          <h3 className="font-headline text-4xl text-on-surface tracking-widest uppercase mb-2 relative z-10 drop-shadow-md">Samsonite</h3>
          <p className="font-label text-xs uppercase text-primary tracking-widest mb-6 relative z-10">Phase 2 Scaling</p>
          <div className="flex-grow relative z-10">
            <p className="font-body text-sm text-on-surface-variant/90 leading-relaxed group-hover:text-[#f5f5f5] transition-colors">
              Mainstream adoption. Rolling out across the core Samsonite lineup. Making vacuum compression the new industry standard for durable, reliable travel luggage worldwide.
            </p>
          </div>
          <div className="w-full bg-surface-container-high h-1 mt-auto overflow-hidden rounded relative z-10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="bg-primary/80 h-full"
            ></motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel liquid-glass p-8 rounded-xl border border-outline-variant/10 relative overflow-hidden flex flex-col h-[400px] group hover:border-primary/40 transition-all cursor-crosshair">
          <span className="font-headline text-8xl text-surface-container-lowest drop-shadow-[0_0_1px_rgba(241,201,125,0.4)] font-bold absolute -top-6 -right-4 group-hover:scale-110 transition-transform duration-700">03</span>
          <h3 className="font-headline text-3xl text-on-surface tracking-widest uppercase mb-2 relative z-10 drop-shadow-md">American<br/>Tourister</h3>
          <p className="font-label text-xs uppercase text-primary tracking-widest mb-6 relative z-10">Phase 3 Domination</p>
          <div className="flex-grow relative z-10">
            <p className="font-body text-sm text-on-surface-variant/90 leading-relaxed group-hover:text-[#f5f5f5] transition-colors">
              Mass market penetration. Utilizing economies of scale to bring the tech to younger, budget-conscious travelers and families seeking value-driven innovation.
            </p>
          </div>
          <div className="w-full bg-surface-container-high h-1 mt-auto overflow-hidden rounded relative z-10">
             <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '25%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1.1 }}
              className="bg-primary/50 h-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Future;
