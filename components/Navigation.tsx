'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Zap } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/pay', label: 'Pay Invoice' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'nav-glass scrolled' : 'nav-glass'
    }`}>
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      <div className="section-wrapper">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <Zap className="w-7 h-7 text-white relative z-10" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl gradient-text">Mean Streets Performance</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href
                    ? 'active'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <a
                href="tel:+1234567890"
                className="btn-secondary flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
              <Link href="/quote" className="btn-premium">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl glass-effect hover:bg-surface-hover transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-glass-border glass-effect backdrop-blur-20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${
                    pathname === link.href
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 pt-6 border-t border-glass-border">
                <a
                  href="tel:+1234567890"
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>(123) 456-7890</span>
                </a>
                <Link
                  href="/quote"
                  className="btn-premium"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}