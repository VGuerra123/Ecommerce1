import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-bold">
            <ShoppingBag className={`${isScrolled ? 'text-primary-600' : 'text-white'} h-6 w-6`} />
            <span className={isScrolled ? 'text-primary-600' : 'text-white'}>ShopEase</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Shop', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#" 
                className={`${
                  isScrolled ? 'text-secondary-600 hover:text-primary-600' : 'text-white hover:text-gray-200'
                } font-medium transition-colors`}
              >
                {item}
              </a>
            ))}
            <button 
              className={`${
                isScrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'bg-white text-primary-600 hover:bg-gray-100'
              } px-4 py-2 rounded-full font-medium transition-colors`}
            >
              Sign In
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-secondary-600' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-secondary-600' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {['Home', 'Shop', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-secondary-600 hover:text-primary-600 font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button 
                className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-full font-medium transition-colors w-full mt-2"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;