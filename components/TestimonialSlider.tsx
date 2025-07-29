'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'Outstanding service! They diagnosed my engine issue quickly and had me back on the road the same day. Highly recommend!',
    rating: 5,
    vehicle: '2019 Honda Civic'
  },
  {
    name: 'Mike Rodriguez',
    text: 'The team at Mean Streets Performance really knows their stuff. Fair pricing and excellent work on my truck\'s suspension.',
    rating: 5,
    vehicle: '2020 Ford F-150'
  },
  {
    name: 'Emily Chen',
    text: 'Professional, honest, and fast. They explained everything clearly and didn\'t try to upsell me on unnecessary services.',
    rating: 5,
    vehicle: '2018 Toyota Camry'
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
    <section className="py-24 bg-gray-50">
      <div className="section-wrapper">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-in">
          <div className="testimonial-card text-center relative">
            <div className="flex justify-center mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-medium">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div>
              <p className="font-bold text-ink text-xl mb-2">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-500 font-medium">
                {testimonials[currentIndex].vehicle}
              </p>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-accent shadow-lg' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}