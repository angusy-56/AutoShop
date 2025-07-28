'use client';

import { useEffect } from 'react';
import { Wrench, Search, Disc, Zap, Gauge, Droplets } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'General Repair',
    description: 'Complete automotive repair services for all makes and models'
  },
  {
    icon: Search,
    title: 'Diagnostics',
    description: 'Advanced computer diagnostics to identify issues quickly'
  },
  {
    icon: Disc,
    title: 'Brakes',
    description: 'Brake repair, replacement, and performance upgrades'
  },
  {
    icon: Zap,
    title: 'Suspension',
    description: 'Suspension repair and performance tuning services'
  },
  {
    icon: Gauge,
    title: 'Performance Tuning',
    description: 'Engine tuning and performance modifications'
  },
  {
    icon: Droplets,
    title: 'Oil & Maintenance',
    description: 'Regular maintenance to keep your vehicle running smooth'
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
    <section className="py-20">
      <div className="section-wrapper">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From routine maintenance to performance upgrades, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card p-8 text-center fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}