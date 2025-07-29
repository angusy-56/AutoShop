'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

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
    <section ref={heroRef} className="pt-32 pb-20 hero-gradient">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-tight">
                Mean Streets
                <span className="block gradient-text">Performance</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 text-balance">
                Fast, fair, and performance-tuned automotive repair
              </p>
            </div>

            <div className="fade-in" style={{ animationDelay: '200ms' }}>
              <p className="text-lg text-gray-600 text-balance leading-relaxed">
                Performance-grade repairs. Neighborhood-level care. Your trusted partner for all automotive needs.
              </p>
            </div>

            <div className="fade-in flex flex-col sm:flex-row gap-6" style={{ animationDelay: '400ms' }}>
              <Link href="/quote" className="btn btn-primary ripple flex items-center space-x-2">
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+1234567890" className="btn btn-secondary flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Stats */}
            <div className="fade-in grid grid-cols-3 gap-8 pt-8" style={{ animationDelay: '600ms' }}>
              <div className="text-center">
                <div className="stat-number">9+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="stat-number">24hr</div>
                <div className="stat-label">Turnaround</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="fade-in flex justify-center" style={{ animationDelay: '800ms' }}>
            <div className="parallax-float">
              <div className="w-96 h-96 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">
                {/* Simple garage illustration */}
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  className="text-accent"
                >
                  {/* Garage door */}
                  <rect x="20" y="80" width="160" height="100" rx="8" fill="currentColor" opacity="0.15" />
                  <rect x="30" y="90" width="140" height="80" rx="4" fill="currentColor" opacity="0.25" />
                  
                  {/* Car silhouette */}
                  <ellipse cx="100" cy="140" rx="50" ry="15" fill="currentColor" opacity="0.35" />
                  <rect x="60" y="125" width="80" height="20" rx="10" fill="currentColor" opacity="0.45" />
                  
                  {/* Tools */}
                  <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.7" />
                  <rect x="47" y="35" width="6" height="20" rx="3" fill="currentColor" opacity="0.7" />
                  
                  <circle cx="150" cy="45" r="3" fill="currentColor" opacity="0.7" />
                  <rect x="147" y="30" width="6" height="20" rx="3" fill="currentColor" opacity="0.7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}