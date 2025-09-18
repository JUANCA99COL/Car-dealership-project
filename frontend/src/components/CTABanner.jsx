import React from 'react';
import { Calendar, Phone, ArrowRight } from 'lucide-react';

export const CTABanner = ({ onTestDriveClick, onContactClick }) => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/10 via-transparent to-[var(--brand-primary)]/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="dark-full-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="display-large text-white leading-tight">
              Ready to Experience
              <br />
              <span className="text-[var(--brand-primary)]">Luxury Driving?</span>
            </h2>
            
            <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
              Take the next step towards owning your dream car. Book a test drive today 
              and discover why thousands of customers trust us with their automotive needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={onTestDriveClick}
                className="btn-primary group pulse-glow min-w-[240px]"
              >
                <Calendar size={20} />
                Book Test Drive Now
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button 
                className="btn-secondary group min-w-[240px]"
              >
                <Phone size={20} />
                Call (555) 123-4567
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-12 border-t border-[var(--border-subtle)]">
              <p className="body-small text-[var(--text-muted)] mb-6">
                Trusted by thousands of satisfied customers
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {/* Mock trust badges/certifications */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">A+</span>
                  </div>
                  <span className="body-small text-[var(--text-secondary)]">BBB Certified</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">★</span>
                  </div>
                  <span className="body-small text-[var(--text-secondary)]">5-Star Dealer</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">✓</span>
                  </div>
                  <span className="body-small text-[var(--text-secondary)]">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg">
              <h3 className="heading-3 text-[var(--brand-primary)] mb-2">0.9% APR</h3>
              <p className="body-small text-[var(--text-secondary)]">
                Financing available on select models
              </p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg">
              <h3 className="heading-3 text-[var(--brand-primary)] mb-2">7-Day Return</h3>
              <p className="body-small text-[var(--text-secondary)]">
                Money-back guarantee policy
              </p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg">
              <h3 className="heading-3 text-[var(--brand-primary)] mb-2">Free Delivery</h3>
              <p className="body-small text-[var(--text-secondary)]">
                Within 50 miles of our location
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};