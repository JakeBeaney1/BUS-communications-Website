import React from 'react';

const StatCard = ({ title, value, subtitle }) => {
  return (
    <div className="bg-samsonite-surface border border-samsonite-border rounded-xl p-8 hover:border-samsonite-gold transition-colors duration-300 transform hover:-translate-y-1">
      <h3 className="text-samsonite-secondary font-light text-sm tracking-widest uppercase mb-4">
        {title}
      </h3>
      <div className="text-5xl md:text-6xl font-bold tabular-nums text-samsonite-white mb-2">
        {value}
      </div>
      {subtitle && (
        <p className="text-samsonite-primary font-light text-base mt-4 border-t border-samsonite-border pt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StatCard;
