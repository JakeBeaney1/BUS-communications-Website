import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Note: Vite can import the video if we want to ensure it's in the build pipeline
import heroVideo from '../../assets/3d/Video For 3D interaction.mp4';

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    // Animate text fade in on load
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.95, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );

    // Scroll scrub animation for video
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%', // Video scales up to 3x viewport height for scrubbing
        pin: true,
        scrub: 1.5, // Increased scrub smoothing to eliminate frame stuttering
        onUpdate: (self) => {
          if (video && video.duration && video.readyState >= 2) {
            requestAnimationFrame(() => {
              video.currentTime = video.duration * self.progress;
            });
          }
        }
      }
    });

    // Make sure we load enough metadata to know the duration
    if (video) {
      video.load();
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.trigger === containerRef.current && t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-surface" id="hero">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={heroVideo}
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          style={{ willChange: 'transform' }}
          autoPlay={false}
          muted
          playsInline
          preload="auto"
        />
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-surface/20 to-surface"></div>
      </div>
      
      {/* Content Layer */}
      <div 
        ref={textRef} 
        className="relative z-10 w-full h-full max-w-7xl px-8 flex flex-col items-center justify-center text-center mx-auto"
      >
        <h1 className="font-headline font-bold text-[12vw] leading-none tracking-[0.1em] text-on-surface uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] opacity-90 mix-blend-screen pointer-events-none">
          Freeform
        </h1>
        <p className="font-headline text-xl md:text-3xl tracking-[0.2em] uppercase mt-8 text-gradient drop-shadow-[0_2px_12px_rgba(241,201,125,0.2)]">
          More Space. More Freedom.
        </p>
        
        {/* Technical Data List */}
        <div className="mt-16 flex gap-12 font-label text-sm text-on-surface-variant/70 tracking-widest uppercase">
          <div className="flex flex-col items-center">
            <span className="text-primary mb-1 text-xs">Material</span>
            <span>Polypropylene</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-primary mb-1 text-xs">Weight</span>
            <span>Ultra-Light</span>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 animate-pulse pointer-events-none">
        <span className="font-label text-xs tracking-[0.2em] text-on-surface-variant uppercase">Scroll to Explore</span>
        <span className="material-symbols-outlined text-primary/80" data-icon="keyboard_arrow_down" data-weight="fill">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
