import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import PlaceholderBlock from '../ui/PlaceholderBlock';

const Future = () => {
  return (
    <section id="future" className="py-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <SectionTitle title="The Future" subtitle="Roadmap & Expansion" />
      <div className="flex-grow w-full">
        <PlaceholderBlock text="Future section content coming soon. Add your future roadmap, expansion plans, or next product here." />
      </div>
    </section>
  );
};

export default Future;
