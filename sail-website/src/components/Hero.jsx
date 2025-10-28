import React, { useEffect, useRef } from "react";
import "../assets/css/Hero.css";
import HeroBg from "../assets/drone.jpg";

export default function Hero() {
  const heroRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !backgroundRef.current) return;

      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5; // Parallax speed (negative for opposite direction)
      const heroHeight = heroRef.current.offsetHeight;
      
      // Only apply parallax when hero is in view
      if (scrolled < heroHeight) {
        backgroundRef.current.style.transform = `translateY(${rate}px) scale(1.1)`;
        
        // Add rotation for fractured effect
        const rotation = scrolled * 0.1;
        backgroundRef.current.style.transform += ` rotate(${rotation}deg)`;
        
        // Add subtle skew for more dynamic effect
        const skew = scrolled * 0.05;
        backgroundRef.current.style.transform += ` skew(${skew}deg, ${skew * 0.5}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Parallax Background Layer */}
      <div 
        ref={backgroundRef}
        className="hero-background"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "120%",
          height: "140%",
          willChange: "transform",
          transition: "transform 0.1s ease-out",
        }}
      />
      
      {/* Dark overlay */}
      <div className="hero-overlay-bg" />
      
      {/* Content */}
      <div className="hero-overlay">
        <h2 className="hero-subtitle">The Ohio State University</h2>
        <h1 className="hero-title">./ Systems and AI Lab</h1>
      </div>
    </section>
  );
}
