import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = ({ onShopCarsClick, onTestDriveClick }) => {
  return (
    <section id="hero" className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--brand-primary)] to-transparent opacity-20"></div>
      </div>

      <div className="dark-full-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="display-huge text-white leading-tight">
                Drive Luxury.
                <br />
                <span className="text-[var(--brand-primary)]">Own Performance.</span>
              </h1>
              
              <p className="body-large text-[var(--text-secondary)] max-w-lg">
                Explore our collection of premium cars with exclusive offers. 
                Experience the perfect blend of luxury, performance, and innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onShopCarsClick}
                className="btn-primary group min-w-[200px]"
              >
                Shop Cars
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={onTestDriveClick}
                className="btn-secondary group min-w-[200px]"
              >
                <Play size={20} />
                Book Test Drive
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[var(--border-subtle)]">
              <div>
                <h3 className="heading-2 text-[var(--brand-primary)]">500+</h3>
                <p className="body-small text-[var(--text-muted)]">Premium Cars</p>
              </div>
              <div>
                <h3 className="heading-2 text-[var(--brand-primary)]">25+</h3>
                <p className="body-small text-[var(--text-muted)]">Luxury Brands</p>
              </div>
              <div>
                <h3 className="heading-2 text-[var(--brand-primary)]">98%</h3>
                <p className="body-small text-[var(--text-muted)]">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Spline Animation */}
          <div className="relative h-[600px] lg:h-[700px]">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Spline 
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'transparent'
                }}
              />
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--brand-primary)] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[var(--brand-primary)] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};