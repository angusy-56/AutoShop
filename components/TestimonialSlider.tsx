'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'Absolutely exceptional service! The attention to detail and craftsmanship exceeded every expectation. My vehicle has never performed better.',
    rating: 5,
    vehicle: '2022 Porsche 911 Turbo',
    location: 'Beverly Hills, CA'
  },
  {
    name: 'Mike Rodriguez',
    text: 'True automotive artisans. The precision and expertise they bring to every job is unmatched. Worth every penny for this level of excellence.',
    rating: 5,
    vehicle: '2021 BMW M5 Competition',
    location: 'Manhattan, NY'
  },
  {
    name: 'Emily Chen',
    text: 'The most professional automotive experience I\'ve ever had. They treat your vehicle like a masterpiece and deliver results that speak for themselves.',
    rating: 5,
    vehicle: '2023 Mercedes-AMG GT',
    location: 'San Francisco, CA'
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
      <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-tertiary to-bg-secondary"></div>
      
      <div className="section-wrapper">
        <div className="text-center mb-24 fade-in relative z-10">
          <div className="inline-flex items-center space-x-3 px-6 py-3 glass-effect rounded-full mb-8">
            <Star className="w-5 h-5 text-accent-tertiary" />
            <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">Client Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="gradient-text">Elite</span> Client Experiences
          </h2>
          <p className="text-2xl text-text-secondary font-light">
            Discover why discerning clients choose <span className="gradient-text-secondary font-semibold">excellence</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto fade-in relative z-10">
          <div className="testimonial-card text-center relative group">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-accent-primary" />
              </div>
            </div>
            
            <div className="flex justify-center mb-10 pt-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-7 h-7 text-accent-tertiary fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl text-text-primary mb-12 leading-relaxed font-light max-w-4xl mx-auto">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="space-y-3">
              <p className="font-bold text-text-primary text-2xl gradient-text">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-accent-primary font-semibold text-lg">
                {testimonials[currentIndex].vehicle}
              </p>
              <p className="text-text-secondary text-sm">
                {testimonials[currentIndex].location}
              </p>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 glass-effect rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-text-primary group-hover:text-accent-primary transition-colors duration-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 glass-effect rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-text-primary group-hover:text-accent-primary transition-colors duration-300" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-12 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent-primary shadow-glow scale-125' 
                    : 'bg-surface hover:bg-surface-hover hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}