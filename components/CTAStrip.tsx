'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 cta-section">
      <div className="section-wrapper">
        <div className="text-center fade-in relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get a free quote today and experience the Mean Streets Performance difference
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-accent font-bold rounded-xl hover:bg-gray-50 transition-all duration-200 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <span>Request Your Quote</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-accent transition-all duration-200 hover:transform hover:-translate-y-1"
            >
              Call the Shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}