import React from 'react';

const PlaceholderBlock = ({ text }) => {
  return (
    <div className="w-full h-full min-h-[300px] border-2 border-dashed border-yellow-400 bg-samsonite-surface flex flex-col items-center justify-center p-8 animate-pulse rounded-lg">
      <span className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-xl">
        [ PLACEHOLDER ]
      </span>
      <p className="text-yellow-400/80 text-center font-light text-sm max-w-md">
        {text || 'Content goes here'}
      </p>
    </div>
  );
};

export default PlaceholderBlock;
