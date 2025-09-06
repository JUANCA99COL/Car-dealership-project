import React from 'react';
import { ArrowRight } from 'lucide-react';
import { carCategories } from '../data/mock';

export const CategoriesSection = ({ onCategoryClick }) => {
  return (
    <section id="categories" className="py-20 bg-black">
      <div className="dark-full-container">
        <div className="text-center mb-16">
          <h2 className="display-large text-white mb-6">
            Explore Our <span className="text-[var(--brand-primary)]">Collection</span>
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            From elegant sedans to powerful sports cars, discover the perfect vehicle 
            that matches your lifestyle and passion for driving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {carCategories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-[var(--bg-secondary)] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/20"
              onClick={() => onCategoryClick(category)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Count Badge */}
                <div className="absolute top-4 right-4 bg-[var(--brand-primary)] text-black px-3 py-1 rounded-full text-sm font-bold">
                  {category.count} Cars
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="heading-2 text-white mb-2 group-hover:text-[var(--brand-primary)] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="body-medium text-[var(--text-secondary)] mb-4">
                  {category.description}
                </p>
                
                <button className="flex items-center gap-2 text-[var(--brand-primary)] font-medium group-hover:gap-4 transition-all duration-300">
                  Shop Now
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/10 via-transparent to-[var(--brand-primary)]/10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};