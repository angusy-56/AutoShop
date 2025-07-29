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
    <section className="py-24 bg-white">
      <div className="section-wrapper">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            Why Choose Mean Streets Performance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with honest service to deliver the best automotive care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card p-10 text-center fade-in hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ink mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
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