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
    <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
                Mean Streets
                <span className="block text-accent">Performance</span>
              </h1>
              <p className="text-xl text-gray-600 mt-4 text-balance">
                Fast, fair, and performance-tuned automotive repair
              </p>
            </div>

            <div className="fade-in" style={{ animationDelay: '200ms' }}>
              <p className="text-lg text-gray-700 text-balance">
                Performance-grade repairs. Neighborhood-level care. Your trusted partner for all automotive needs.
              </p>
            </div>

            <div className="fade-in flex flex-col sm:flex-row gap-4" style={{ animationDelay: '400ms' }}>
              <Link href="/quote" className="btn btn-primary ripple flex items-center space-x-2">
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+1234567890" className="btn btn-secondary flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="fade-in flex justify-center" style={{ animationDelay: '600ms' }}>
            <div className="parallax-float">
              <div className="w-80 h-80 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl flex items-center justify-center">
                {/* Simple garage illustration */}
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  className="text-accent"
                >
                  {/* Garage door */}
                  <rect x="20" y="80" width="160" height="100" rx="8" fill="currentColor" opacity="0.1" />
                  <rect x="30" y="90" width="140" height="80" rx="4" fill="currentColor" opacity="0.2" />
                  
                  {/* Car silhouette */}
                  <ellipse cx="100" cy="140" rx="50" ry="15" fill="currentColor" opacity="0.3" />
                  <rect x="60" y="125" width="80" height="20" rx="10" fill="currentColor" opacity="0.4" />
                  
                  {/* Tools */}
                  <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.6" />
                  <rect x="47" y="35" width="6" height="20" rx="3" fill="currentColor" opacity="0.6" />
                  
                  <circle cx="150" cy="45" r="3" fill="currentColor" opacity="0.6" />
                  <rect x="147" y="30" width="6" height="20" rx="3" fill="currentColor" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}