'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Award, Clock, Shield, Zap, Users, Star, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Master Craftsmen',
    description: 'Elite ASE-certified technicians with decades of precision automotive artistry and performance mastery.',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Clock,
    title: 'Express Excellence',
    description: 'Premium concierge service with most repairs completed within hours, not days. Your time is precious.',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Lifetime Assurance',
    description: 'Comprehensive warranty coverage and satisfaction guarantee. Your investment is protected with us.',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'State-of-the-art diagnostic equipment and tools that rival factory specifications.',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: Users,
    title: 'VIP Treatment',
    description: 'Personalized service experience with dedicated account management for every client.',
    gradient: 'from-indigo-400 to-blue-500'
  },
  {
    icon: Star,
    title: 'Premium Parts Only',
    description: 'Exclusively OEM and performance-grade components. No compromises on quality.',
    gradient: 'from-red-400 to-pink-500'
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
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary"></div>
      
      <div className="section-wrapper">
        <div className="text-center mb-24 fade-in relative z-10">
          <div className="inline-flex items-center space-x-3 px-6 py-3 glass-effect rounded-full mb-8">
            <Star className="w-5 h-5 text-accent-primary" />
            <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">The Elite Difference</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            Why Choose <span className="gradient-text">Excellence</span>?
          </h2>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-light">
            Experience the pinnacle of automotive service where 
            <span className="gradient-text-secondary font-semibold"> precision meets passion</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card p-8 text-center stagger-item group cursor-pointer interactive-element"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90`}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon className="w-12 h-12 text-white relative z-10" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-6 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg group-hover:text-text-primary transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20 fade-in relative z-10">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-4">Ready for the Elite Experience?</h3>
            <p className="text-text-secondary mb-8 text-lg">
              Join hundreds of satisfied clients who trust us with their most prized vehicles.
            </p>
            <Link href="/quote" className="btn-premium">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}