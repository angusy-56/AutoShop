'use client';

import { useEffect } from 'react';
import { Award, Users, Wrench, Clock } from 'lucide-react';

const timeline = [
  {
    year: '2015',
    title: 'Founded',
    description: 'Started as a small family-owned shop with a passion for automotive excellence'
  },
  {
    year: '2018',
    title: 'ASE Certification',
    description: 'All technicians achieved ASE certification, ensuring top-quality service'
  },
  {
    year: '2020',
    title: 'Facility Expansion',
    description: 'Expanded to a larger facility with state-of-the-art diagnostic equipment'
  },
  {
    year: '2024',
    title: 'Performance Division',
    description: 'Launched specialized performance tuning and modification services'
  }
];

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'We never compromise on the quality of our work or parts used'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction and safety are our top priorities'
  },
  {
    icon: Wrench,
    title: 'Expert Service',
    description: 'ASE-certified technicians with years of experience'
  },
  {
    icon: Clock,
    title: 'Reliable Timing',
    description: 'We respect your time and deliver when promised'
  }
];

export default function AboutPage() {
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
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="section-wrapper">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">
              About Mean Streets Performance
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For nearly a decade, we've been the trusted automotive repair shop for drivers who demand 
              performance-grade service with neighborhood-level care. Our story is built on expertise, 
              integrity, and a genuine passion for keeping you on the road.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-ink mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Mean Streets Performance was born from a simple belief: every driver deserves honest, 
                  expert automotive care without the runaround. Founded in 2015 by master technician 
                  Mike Rodriguez, our shop has grown from a small garage to a full-service facility 
                  trusted by thousands of customers.
                </p>
                <p>
                  What sets us apart isn't just our ASE-certified expertise or state-of-the-art 
                  equipment—it's our commitment to treating every customer like family. We take the 
                  time to explain what's wrong, what it'll cost, and why it matters for your safety 
                  and your wallet.
                </p>
                <p>
                  Today, we're proud to be the go-to shop for everything from routine maintenance to 
                  high-performance modifications, always delivering the same level of care and 
                  attention to detail that built our reputation.
                </p>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-6">
                  {/* Placeholder for team photo */}
                  <div className="text-center">
                    <Users className="w-16 h-16 text-accent mx-auto mb-4" />
                    <p className="text-gray-600">Team Photo</p>
                    <p className="text-sm text-gray-500">TODO: Replace with actual team photo</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ink mb-2">Meet Our Team</h3>
                <p className="text-gray-600">
                  Our ASE-certified technicians bring decades of combined experience to every job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="section-wrapper">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-ink mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Nearly a decade of growth, learning, and serving our community
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20"></div>

              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-12 fade-in ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-accent mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-ink mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="section-wrapper">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-ink mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="card p-6 text-center fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="section-wrapper">
          <div className="text-center fade-in">
            <h2 className="text-3xl font-bold text-ink mb-8">Certifications & Credentials</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="card p-6 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-2" />
                <p className="font-semibold">ASE Certified</p>
              </div>
              <div className="card p-6 text-center">
                <Shield className="w-12 h-12 text-accent mx-auto mb-2" />
                <p className="font-semibold">Licensed & Insured</p>
              </div>
              <div className="card p-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-2" />
                <p className="font-semibold">BBB Accredited</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}