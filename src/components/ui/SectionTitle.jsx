import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-samsonite-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-samsonite-gold font-light tracking-wide text-lg md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
