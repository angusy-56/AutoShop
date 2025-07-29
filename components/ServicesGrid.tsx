'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Wrench, Search, Disc, Zap, Gauge, Droplets, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Precision Engineering',
    description: 'Master-level repairs with surgical precision for all premium vehicles',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Search,
    title: 'Advanced Diagnostics',
    description: 'State-of-the-art diagnostic systems for instant problem identification',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Disc,
    title: 'Performance Braking',
    description: 'High-performance brake systems and racing-grade upgrades',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Dynamic Suspension',
    description: 'Precision suspension tuning for ultimate handling and comfort',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Gauge,
    title: 'Power Enhancement',
    description: 'Expert engine tuning and performance optimization',
    gradient: 'from-yellow-500 to-red-500'
  },
  {
    icon: Droplets,
    title: 'Premium Maintenance',
    description: 'Concierge-level maintenance with premium fluids and parts',
    gradient: 'from-indigo-500 to-blue-500'
  }
];

export function ServicesGrid() {
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
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary"></div>
      
      <div className="section-wrapper">
        <div className="text-center mb-24 fade-in relative z-10">
          <div className="inline-flex items-center space-x-3 px-6 py-3 glass-effect rounded-full mb-8">
            <Zap className="w-5 h-5 text-accent-primary" />
            <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">Premium Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="gradient-text">Automotive</span> Excellence
          </h2>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-light">
            From precision maintenance to <span className="gradient-text-secondary font-semibold">performance mastery</span>, 
            we deliver automotive excellence beyond expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="glass-card p-8 text-center stagger-item group cursor-pointer interactive-element"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="service-icon mx-auto group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6 group-hover:text-text-primary transition-colors duration-300">
                  {service.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-accent-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20 fade-in relative z-10">
          <Link href="/quote" className="btn-premium group">
            <span>Experience Premium Service</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}