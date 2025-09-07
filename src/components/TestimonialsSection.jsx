import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

export const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating
            ? 'text-[var(--brand-primary)] fill-current'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-[var(--bg-secondary)]">
      <div className="dark-full-container">
        <div className="text-center mb-16">
          <h2 className="display-large text-white mb-6">
            What Our <span className="text-[var(--brand-primary)]">Customers Say</span>
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Don't just take our word for it. Hear from satisfied customers who have 
            found their dream cars and experienced our exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-black p-8 rounded-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/20"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-[var(--brand-primary)] rounded-full flex items-center justify-center">
                  <Quote size={24} className="text-black" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 space-y-6">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="body-medium text-[var(--text-secondary)] leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <h4 className="heading-3 text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="body-small text-[var(--text-muted)] mb-2">
                    {testimonial.location}
                  </p>
                  <p className="text-[var(--brand-primary)] font-medium text-sm">
                    Purchased: {testimonial.car}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-primary)]/10 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="heading-1 text-[var(--brand-primary)]">1,200+</h3>
              <p className="body-small text-[var(--text-muted)]">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-1 text-[var(--brand-primary)]">4.9/5</h3>
              <p className="body-small text-[var(--text-muted)]">Average Rating</p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-1 text-[var(--brand-primary)]">15+</h3>
              <p className="body-small text-[var(--text-muted)]">Years Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="heading-1 text-[var(--brand-primary)]">24/7</h3>
              <p className="body-small text-[var(--text-muted)]">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};