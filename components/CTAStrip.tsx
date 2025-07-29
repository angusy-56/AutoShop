'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';

export function CTAStrip() {
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

  return (
    <section className="py-32 cta-section relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary via-bg-tertiary to-bg-secondary"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent"></div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 morphing-shape opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 morphing-shape opacity-10" style={{ animationDelay: '10s' }}></div>
      
      <div className="section-wrapper relative z-10">
        <div className="text-center fade-in">
          <div className="inline-flex items-center space-x-3 px-6 py-3 glass-effect rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-accent-tertiary" />
            <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">Ready to Experience Excellence</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="gradient-text">Transform</span> Your Drive
          </h2>
          
          <p className="text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Join the elite circle of automotive enthusiasts who demand 
            <span className="gradient-text-secondary font-semibold"> nothing but perfection</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              href="/quote"
              className="btn-premium text-lg px-12 py-5 group"
            >
              <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span>Request Premium Consultation</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <a
              href="tel:+1234567890"
              className="btn-secondary text-lg px-12 py-5 group"
            >
              <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span>Speak with Expert</span>
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black gradient-text mb-2">24/7</div>
              <div className="text-text-secondary text-sm uppercase tracking-wider">Premium Support</div>
            </div>
            <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black gradient-text mb-2">100%</div>
              <div className="text-text-secondary text-sm uppercase tracking-wider">Satisfaction Guarantee</div>
            </div>
            <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-black gradient-text mb-2">Elite</div>
              <div className="text-text-secondary text-sm uppercase tracking-wider">Certified Technicians</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}