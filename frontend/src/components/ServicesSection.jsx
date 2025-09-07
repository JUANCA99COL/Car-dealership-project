import React from 'react';
import { CreditCard, RefreshCw, Settings, Shield } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  CreditCard,
  RefreshCw,
  Settings,
  Shield
};

export const ServicesSection = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="dark-full-container">
        <div className="text-center mb-16">
          <h2 className="display-large text-white mb-6">
            Premium <span className="text-[var(--brand-primary)]">Services</span>
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Beyond selling exceptional cars, we provide comprehensive services 
            to enhance your ownership experience and maximize your investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <div
                key={service.id}
                className="group bg-[var(--bg-secondary)] p-8 rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/20 dark-hover"
                onClick={() => onServiceClick && onServiceClick(service)}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[var(--brand-hover)] rounded-lg flex items-center justify-center group-hover:bg-[var(--brand-primary)] transition-all duration-300">
                    <IconComponent 
                      size={32} 
                      className="text-[var(--brand-primary)] group-hover:text-black transition-colors duration-300" 
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="heading-2 text-white group-hover:text-[var(--brand-primary)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="body-medium text-[var(--text-secondary)]">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full flex-shrink-0"></div>
                        <span className="body-small text-[var(--text-secondary)]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <button className="text-[var(--brand-primary)] font-medium hover:text-[var(--brand-active)] transition-colors duration-300 flex items-center gap-2 group-hover:gap-4">
                    Learn More
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-primary)]/5 rounded-lg"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[var(--brand-primary)]/10 via-[var(--brand-primary)]/5 to-[var(--brand-primary)]/10 p-8 rounded-lg">
            <h3 className="heading-2 text-white mb-4">
              Need Something Else?
            </h3>
            <p className="body-medium text-[var(--text-secondary)] mb-6">
              Our team is ready to assist with any special requirements or custom services.
            </p>
            <button className="btn-primary">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};