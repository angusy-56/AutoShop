'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, Zap, Star, Award } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <section ref={heroRef} className="relative pt-32 pb-32 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Morphing Shapes */}
      <div className="morphing-shape w-96 h-96 -top-48 -left-48" style={{ animationDelay: '0s' }} />
      <div className="morphing-shape w-64 h-64 top-1/4 -right-32" style={{ animationDelay: '7s' }} />
      <div className="morphing-shape w-80 h-80 bottom-0 left-1/3" style={{ animationDelay: '14s' }} />

      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Content */}
          <div className="space-y-10">
            <div className="fade-in-left">
              <div className="inline-flex items-center space-x-3 px-4 py-2 glass-effect rounded-full mb-6">
                <Star className="w-5 h-5 text-accent-tertiary" />
                <span className="text-sm font-medium text-text-secondary">Premium Automotive Care</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span className="reveal-text">
                  <span>Mean Streets</span>
                </span>
                <br />
                <span className="gradient-text reveal-text">
                  <span>Performance</span>
                </span>
              </h1>
              <p className="text-2xl text-text-secondary mt-8 text-balance font-light">
                Precision engineering meets <span className="gradient-text font-semibold">uncompromising quality</span>
              </p>
            </div>

            <div className="fade-in-left" style={{ animationDelay: '200ms' }}>
              <p className="text-xl text-text-secondary text-balance leading-relaxed max-w-2xl">
                Experience automotive excellence redefined. Where cutting-edge technology meets artisanal craftsmanship.
              </p>
            </div>

            <div className="fade-in-left flex flex-col sm:flex-row gap-6" style={{ animationDelay: '400ms' }}>
              <Link href="/quote" className="btn-premium group">
                <span>Request Premium Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+1234567890" className="btn-secondary group">
                <Phone className="w-4 h-4" />
                <span>Expert Consultation</span>
              </a>
            </div>

            {/* Stats */}
            <div className="fade-in-left grid grid-cols-3 gap-8 pt-12" style={{ animationDelay: '600ms' }}>
              <div className="text-center group">
                <div className="stat-number group-hover:scale-110 transition-transform duration-300">9+</div>
                <div className="stat-label">Years Mastery</div>
              </div>
              <div className="text-center group">
                <div className="stat-number group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="stat-label">Elite Clients</div>
              </div>
              <div className="text-center group">
                <div className="stat-number group-hover:scale-110 transition-transform duration-300">24hr</div>
                <div className="stat-label">Express Service</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="fade-in-right flex justify-center relative" style={{ animationDelay: '800ms' }}>
            <div className="relative">
              {/* Main Visual Element */}
              <div className="relative w-[500px] h-[500px] float-element">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-glass-border animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full bg-gradient-primary"></div>
                  <div className="absolute bottom-0 right-1/4 w-3 h-3 -mr-1.5 -mb-1.5 rounded-full bg-gradient-secondary"></div>
                </div>
                
                {/* Middle Ring */}
                <div className="absolute inset-8 rounded-full border border-glass-border animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-1/4 right-0 w-3 h-3 -mr-1.5 -mt-1.5 rounded-full bg-gradient-tertiary"></div>
                </div>
                
                {/* Center Glass Card */}
                <div className="absolute inset-16 glass-card flex items-center justify-center group hover:scale-105 transition-all duration-500">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <Zap className="w-24 h-24 mx-auto text-accent-primary animate-pulse" />
                      <div className="absolute inset-0 w-24 h-24 mx-auto bg-accent-primary opacity-20 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">Premium Service</h3>
                      <p className="text-text-secondary text-sm">Excellence in Motion</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 glass-card p-4 float-element">
                  <Award className="w-8 h-8 text-accent-tertiary" />
                </div>
                <div className="absolute -bottom-8 -right-8 glass-card p-4 float-element" style={{ animationDelay: '-3s' }}>
                  <Star className="w-8 h-8 text-accent-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}