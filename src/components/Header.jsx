import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { getCartCount } from '../data/mock';

export const Header = ({ onCartClick, onNavigateToSection }) => {
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartCount());
    };
    
    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const navItems = [
    { label: 'Home', section: 'hero' },
    { label: 'Cars', section: 'categories' },
    { label: 'Featured', section: 'featured' },
    { label: 'Services', section: 'services' },
    { label: 'Contact', section: 'footer' }
  ];

  const handleNavClick = (section) => {
    onNavigateToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="dark-header">
      <div className="dark-logo">
        <h2 className="text-2xl font-bold text-white cursor-pointer">
          LuxuryCars<span className="text-[var(--brand-primary)]">Pro</span>
        </h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="dark-nav hidden md:flex">
        {navItems.map((item) => (
          <button
            key={item.section}
            onClick={() => handleNavClick(item.section)}
            className="dark-nav-link hover:text-[var(--brand-primary)] transition-all duration-300"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Cart and Mobile Menu */}
      <div className="flex items-center gap-4">
        <button
          onClick={onCartClick}
          className="relative p-2 text-white hover:text-[var(--brand-primary)] transition-colors duration-300"
        >
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[var(--brand-primary)] text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-[var(--border-subtle)] md:hidden z-50">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className="text-left py-3 text-white hover:text-[var(--brand-primary)] transition-colors duration-300 border-b border-[var(--border-subtle)] last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};