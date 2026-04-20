import React from 'react';

const teamMembers = [
  {
    name: 'Executive Director',
    role: 'Strategy & Operations',
    description: 'Guiding the overarching vision and ensuring kinetic engineering principles reach the market efficiently.',
    initials: 'ED'
  },
  {
    name: 'Lead Engineer',
    role: 'Aerospace Architecture',
    description: 'Translating high-performance material science into consumer-scale travel solutions.',
    initials: 'LE'
  },
  {
    name: 'Financial Architect',
    role: 'Projections & Modeling',
    description: 'Structuring robust pricing models and sustainable growth trajectories for long-term dominance.',
    initials: 'FA'
  },
  {
    name: 'Creative Director',
    role: 'Brand & UX Design',
    description: 'Crafting the premium, uncompromising aesthetic language that defines the Kinetic brand.',
    initials: 'CD'
  }
];

const MeetTheTeam = () => {
  return (
    <section id="team" className="flex-grow flex flex-col relative w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 gap-16">
      {/* Header Section */}
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-4 text-primary font-label text-sm uppercase tracking-widest">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span>The Minds Behind Kinetic</span>
        </div>
        <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-[0.15em] text-on-surface uppercase leading-tight">
          MEET THE<br/>TEAM
        </h2>
        <p className="font-body text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mt-4">
          A multidisciplinary syndicate of engineers, financial strategists, and designers united by a mandate to disrupt the premium luggage sector.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="glass-panel liquid-glass rounded-xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            
            {/* Avatar / Initials Circle */}
            <div className="w-32 h-32 rounded-full mb-8 relative flex items-center justify-center bg-surface-container-highest border border-outline-variant/30 group-hover:border-primary/50 transition-colors duration-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Replace with <img src={member.image} /> when real photos are available */}
              <span className="font-serif text-5xl text-primary/80 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_10px_rgba(241,201,125,0.2)]">
                {member.initials}
              </span>
            </div>

            {/* Content */}
            <div className="flex-grow flex flex-col">
              <h3 className="font-headline text-2xl font-medium text-on-surface mb-2">{member.name}</h3>
              <p className="font-label text-xs uppercase tracking-widest text-primary mb-6">{member.role}</p>
              
              <div className="h-[1px] w-12 bg-outline-variant/30 mx-auto mb-6 group-hover:w-24 group-hover:bg-primary/30 transition-all duration-500"></div>
              
              <p className="font-body text-sm text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {member.description}
              </p>
            </div>

            {/* Minimal Social / Contact Icon placeholder */}
            <div className="mt-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors text-[20px]">link</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors text-[20px]">mail</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
