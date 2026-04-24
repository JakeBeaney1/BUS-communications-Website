import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Jake Beaney',
    role: 'Strategy & Operations',
    description: 'Guiding the overarching vision and ensuring kinetic engineering principles reach the market efficiently.',
    initials: 'JB'
  },
  {
    name: 'Daniel Talisman',
    role: 'Aerospace Architecture',
    description: 'Translating high-performance material science into consumer-scale travel solutions.',
    initials: 'DT'
  },
  {
    name: 'Y Phinh Ly',
    role: 'Projections & Modeling',
    description: 'Structuring robust pricing models and sustainable growth trajectories for long-term dominance.',
    initials: 'YL'
  },
  {
    name: 'Elise Kney',
    role: 'Brand & UX Design',
    description: 'Crafting the premium, uncompromising aesthetic language that defines the brand.',
    initials: 'EK'
  },
  {
    name: 'Sena Furat',
    role: 'Marketing & Partnerships',
    description: 'Architecting market penetration strategies and driving digital campaign momentum.',
    initials: 'SF'
  }
];

const MeetTheTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section id="team" className="flex-grow flex flex-col relative w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 gap-16 mb-24">
      {/* Header Section */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-4 text-primary font-label text-sm uppercase tracking-widest">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>The Minds Behind Freeform</span>
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-[0.15em] text-on-surface uppercase leading-tight">
          MEET THE<br/>TEAM
        </h2>
        <p className="font-body text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mt-4">
          A multidisciplinary syndicate of engineers, financial strategists, and designers united by a mandate to disrupt the premium luggage sector.
        </p>
      </div>

      {/* Team Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            className="glass-panel liquid-glass rounded-xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-outline-variant/10 hover:border-primary/30"
          >
            {/* Avatar / Initials Circle */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 xl:w-24 xl:h-24 rounded-full mb-8 relative flex items-center justify-center bg-surface-container-highest border border-outline-variant/30 group-hover:border-primary/50 transition-colors duration-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="font-serif text-3xl sm:text-4xl text-primary/80 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_10px_rgba(241,201,125,0.2)]">
                {member.initials}
              </span>
            </div>

            {/* Content */}
            <div className="flex-grow flex flex-col w-full">
              <h3 className="font-headline text-xl sm:text-2xl font-medium text-on-surface mb-4">{member.name}</h3>
              <div className="h-[1px] w-8 sm:w-12 bg-outline-variant/30 mx-auto group-hover:w-full group-hover:bg-primary/30 transition-all duration-700"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MeetTheTeam;
