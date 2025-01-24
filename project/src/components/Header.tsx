import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: isHomePage ? '#about' : '/#about' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Study Destinations', href: isHomePage ? '#countries' : '/#countries' },
    { name: 'Contact Us', href: isHomePage ? '#contact' : '/#contact' },
    { name: 'Testimonials', href: isHomePage ? '#testimonials' : '/#testimonials' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-primary-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://i.ibb.co/X8gskxx/gk1-1-1-removebg-preview.png" alt="GK Overseas Logo" className="h-12" />
            <span className="text-2xl font-bold text-primary-600">GK Overseas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href === '/' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href.replace('/', ''))}
                  className="text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              )
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-primary-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-white rounded-lg shadow-xl p-4 border border-primary-100">
            {navigation.map((item) => (
              item.href === '/' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-primary-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href.replace('/', ''))}
                  className="block text-gray-700 hover:text-primary-600 transition-colors py-2 cursor-pointer"
                >
                  {item.name}
                </a>
              )
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all text-center cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;