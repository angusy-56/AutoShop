'use client';

import { useEffect } from 'react';
import { Award, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'ASE-Certified Expertise',
    description: 'Our technicians are ASE-certified with years of experience in automotive repair and performance tuning.'
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'We understand your time is valuable. Most repairs completed same-day or within 24 hours.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. You\'ll know exactly what you\'re paying for before we start.'
  }
];

export function WhyChooseUs() {
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
    <section className="py-20 bg-white">
      <div className="section-wrapper">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Why Choose Mean Streets Performance?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with honest service to deliver the best automotive care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card p-8 text-center fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}