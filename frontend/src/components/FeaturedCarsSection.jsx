import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, ShoppingCart } from 'lucide-react';
import { featuredCars, addToCart } from '../data/mock';

export const FeaturedCarsSection = ({ onViewDetails, onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredCars.length) % featuredCars.length);
  };

  const handleAddToCart = (car) => {
    const updatedCart = addToCart(car);
    if (onAddToCart) {
      onAddToCart(updatedCart);
    }
    // Dispatch custom event for cart update
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };

  return (
    <section id="featured" className="py-20 bg-[var(--bg-secondary)]">
      <div className="dark-full-container">
        <div className="text-center mb-16">
          <h2 className="display-large text-white mb-6">
            Featured <span className="text-[var(--brand-primary)]">Collection</span>
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Handpicked premium vehicles that define luxury, performance, and innovation. 
            Each car represents the pinnacle of automotive excellence.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredCars.map((car) => (
                <div key={car.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center p-8">
                    
                    {/* Car Image */}
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Availability Badge */}
                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${
                          car.availability === 'In Stock' 
                            ? 'bg-green-500 text-black' 
                            : car.availability === 'Limited'
                            ? 'bg-yellow-500 text-black'
                            : 'bg-[var(--brand-primary)] text-black'
                        }`}>
                          {car.availability}
                        </div>
                      </div>
                    </div>

                    {/* Car Details */}
                    <div className="space-y-6">
                      <div>
                        <p className="body-medium text-[var(--brand-primary)] mb-2">{car.brand}</p>
                        <h3 className="heading-1 text-white mb-4">{car.name}</h3>
                        <p className="display-medium text-[var(--brand-primary)]">
                          ${car.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Car Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/40 p-4 rounded-lg">
                          <p className="body-small text-[var(--text-muted)] mb-1">Horsepower</p>
                          <p className="heading-3 text-white">{car.horsepower} HP</p>
                        </div>
                        <div className="bg-black/40 p-4 rounded-lg">
                          <p className="body-small text-[var(--text-muted)] mb-1">Category</p>
                          <p className="heading-3 text-white">{car.category}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <p className="body-medium text-[var(--text-secondary)] mb-3">Key Features:</p>
                        <div className="flex flex-wrap gap-2">
                          {car.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[var(--brand-hover)] text-[var(--brand-primary)] rounded-full text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => onViewDetails && onViewDetails(car)}
                          className="btn-primary group flex-1"
                        >
                          <Eye size={20} />
                          View Details
                        </button>
                        <button
                          onClick={() => handleAddToCart(car)}
                          className="btn-secondary group flex-1"
                        >
                          <ShoppingCart size={20} />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[var(--brand-primary)] text-white hover:text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[var(--brand-primary)] text-white hover:text-black p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredCars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[var(--brand-primary)] scale-125'
                    : 'bg-gray-500 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};